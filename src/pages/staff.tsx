import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";

import Layout from "../components/shared/Layout/Layout";
import ManagementList from "../components/ManagementList/ManagementList";
import TeacherList from "../components/TeacherList/TeacherList";

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

  const { hero, management, teachers } = data;

  usePlugin(form);

  return (
    <>
      <Head>
        <title>Staff | Gansbaai Academia</title>
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
        {/* Management */}

        <ManagementList management={management} />

        {/* Teachers */}

        <TeacherList teachers={teachers} />
      </Layout>
    </>
  );
};

export default Staff;
