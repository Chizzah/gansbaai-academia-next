import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";

import Layout from "../components/shared/Layout/Layout";

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  // TINACMS
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/staff.json",
      parse: parseJson,
    });
  }

  // file is variable like article or events

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/staff.json",
        data: (await import("../../content/staff.json")).default,
      },
    },
  };
};

const Staff = ({ file }) => {
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
        label: "Management",
        name: "management",
        component: "group-list",
        fields: [
          {
            label: "Image",
            name: "image",
            component: "image",
          },
          {
            label: "Full Name",
            name: "fullName",
            component: "text",
          },
          {
            label: "Position",
            name: "position",
            component: "text",
          },
          {
            label: "About",
            name: "about",
            component: "textarea",
          },
          {
            label: "About",
            name: "about",
            component: "group-list",
            fields: [
              {
                label: "Name",
                name: "Name",
                component: "text",
              },
              {
                label: "Grades",
                name: "grades",
                component: "text",
              },
            ],
          },
        ],
      },
      {
        label: "About",
        name: "about",
        component: "group",
        fields: [
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
            label: "Link Text",
            name: "link",
            component: "text",
          },
        ],
      },
      {
        label: "News",
        name: "news",
        component: "group",
        fields: [
          {
            label: "Heading One",
            name: "heading_1",
            component: "text",
          },
          {
            label: "Heading Two",
            name: "heading_2",
            component: "text",
          },
          {
            label: "Paragraph",
            name: "para",
            component: "textarea",
          },
          {
            label: "Link Text",
            name: "link",
            component: "text",
          },
        ],
      },
      {
        label: "Extracurricular",
        name: "extracurricular",
        component: "group-list",
        fields: [
          {
            label: "Href",
            name: "href",
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
        ],
      },
    ],
  };

  const [data, form] = useGithubJsonForm(file, formOptions);

  const { hero, management, about, extracurricular, news } = data;

  console.log(management);

  usePlugin(form);

  return (
    <>
      <Head>
        <title>Staff | Gansbaai Academia</title>
      </Head>

      <Layout>
        {/* Management */}

        <section className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <Image
                  src="https://via.placeholder.com/960x540/f1f1f1.png%20C/O%20https://placeholder.com/"
                  layout="responsive"
                  width="960"
                  height="540"
                />
              </div>
              <div className="col">
                <h3>{management[0].fullName}</h3>
                <h4>{management[0].position}</h4>
                <p>{management[0].about}</p>
                {/* {management[0].map(item /=)} */}
              </div>
            </div>
          </div>
        </section>

        {/* Teachers */}

        <section className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>hello</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Office */}

        <section className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>hello</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Grounds */}

        <section className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>hello</h1>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Staff;
