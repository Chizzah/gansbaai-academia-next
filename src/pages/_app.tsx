import { TinaCMS, TinaProvider } from "tinacms";
import { GithubClient, TinacmsGithubProvider } from "react-tinacms-github";
import { NextGithubMediaStore } from "next-tinacms-github";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const App = ({ Component, pageProps }) => {
  const github = new GithubClient({
    proxy: "/api/proxy-github",
    authCallbackRoute: "/api/create-github-access-token",
    clientId: process.env.GITHUB_CLIENT_ID,
    baseRepoFullName: process.env.REPO_FULL_NAME,
    baseBranch: process.env.BASE_BRANCH,
  });

  const mediaStore = new NextGithubMediaStore(github);

  const cms = new TinaCMS({
    enabled: pageProps.preview,
    apis: {
      github,
    },
    media: mediaStore,
    sidebar: pageProps.preview,
    toolbar: pageProps.preview,
  });

  const onLogin = async () => {
    const token = localStorage.getItem("tinacms-github-token") || null;
    const headers = new Headers();

    if (token) {
      headers.append("Authorization", "Bearer " + token);
    }

    const resp = await fetch(`/api/preview`, { headers: headers });
    const data = await resp.json();

    if (resp.status == 200) window.location.href = window.location.pathname;
    else throw new Error(data.message);
  };

  const onLogout = () => {
    return fetch(`/api/reset-preview`).then(() => {
      window.location.reload();
    });
  };

  return (
    <TinaProvider cms={cms}>
      <TinacmsGithubProvider
        onLogin={onLogin}
        onLogout={onLogout}
        error={pageProps.error}
      >
        <EditLink cms={cms} />
        <Component {...pageProps} />
      </TinacmsGithubProvider>
    </TinaProvider>
  );
};

export default App;

export interface EditLinkProps {
  cms: TinaCMS;
}

export const EditLink = ({ cms }: EditLinkProps) => {
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </button>
  );
};
