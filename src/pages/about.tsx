import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";

import Layout from "../components/shared/Layout/Layout";

const About = ({ file }) => {
  const formOptions = {
    label: "Home Page",
    fields: [
      {
        label: "Hero",
        name: "hero",
        component: "group",
        fields: [
          {
            label: "Paragraph 1",
            name: "para_1",
            component: "text",
          },
          {
            label: "Image",
            name: "image",
            component: "image",
          },
          {
            label: "Heading",
            name: "heading",
            component: "text",
          },
          {
            label: "Paragraph 2",
            name: "para_2",
            component: "textarea",
          },
        ],
      },
      {
        label: "About",
        name: "about",
        component: "group",
        fields: [
          {
            label: "Heading",
            name: "heading",
            component: "text",
          },
          {
            label: "Paragraph 1",
            name: "para_1",
            component: "textarea",
          },
          {
            label: "Paragraph 2",
            name: "para_2",
            component: "textarea",
          },
        ],
      },
      {
        label: "History",
        name: "history",
        component: "group",
        fields: [
          {
            label: "Heading",
            name: "heading",
            component: "text",
          },
          {
            label: "Paragraph 1",
            name: "para_1",
            component: "textarea",
          },
          {
            label: "Paragraph 2",
            name: "para_2",
            component: "textarea",
          },
          {
            label: "Paragraph 3",
            name: "para_3",
            component: "textarea",
          },
          {
            label: "Paragraph 4",
            name: "para_4",
            component: "textarea",
          },
        ],
      },
    ],
  };

  const [data, form] = useGithubJsonForm(file, formOptions);

  const { hero, about, history } = data;

  usePlugin(form);

  return (
    <>
      <Head>
        <title>About | Gansbaai Academia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* HERO */}

        <section className="hero position-relative w-100 overflow-hidden">
          <Image
            src={hero.image}
            alt="Mountains"
            layout="responsive"
            width="1920"
            height="1080"
            objectFit="cover"
            objectPosition="bottom"
            priority={true}
          />
          <div className="overlay position-absolute top-0 start-0 w-100 h-100" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light text-center">
            <p className="mb-0 fw-bolder text-warning">{hero.para_1}</p>
            <h1 className="fs-2 text-uppercase fs-lg-1">{hero.heading}</h1>
            <p className="px-3 px-md-0">{hero.para_2}</p>
          </div>
        </section>

        {/* PAGE CONTENT */}

        <section className="container-fluid py-5">
          <div className="container">
            <div className="row d-flex flex-column flex-lg-row">
              {/* MAIN CONTENT */}

              <section className="col-12 col-lg-9 order-2 order-lg-1">
                <div className="container">
                  <div className="row">
                    <div className="col min-vh-100 bg-danger">
                      <h2 className="mb-sm-3">{about.heading}</h2>
                      <p>{about.para_1}</p>
                      <p>{about.para_2}</p>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col min-vh-100 bg-warning">
                      <h2 className="mb-sm-3">{history.heading}</h2>
                      <p>{history.para_1}</p>
                      <p>{history.para_2}</p>
                      <p>{history.para_3}</p>
                      <p>{history.para_4}</p>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col min-vh-100 bg-success">
                      <h2>SECTION THREE</h2>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col min-vh-100 bg-info">
                      <h2>SECTION FOUR</h2>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col min-vh-100 bg-primary">
                      <h2>SECTION FIVE</h2>
                    </div>
                  </div>
                </div>
              </section>

              {/* SIDEBAR CONTENT */}

              <aside className="col-12 col-lg-3 order-1 order-lg-2">
                <ul>
                  <li>One</li>
                  <li>Two</li>
                  <li>Three</li>
                  <li>Four</li>
                  <li>Five</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/about.json",
      parse: parseJson,
    });
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/about.json",
        data: (await import("../../content/about.json")).default,
      },
    },
    revalidate: 60,
  };
};

export default About;
