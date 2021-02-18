import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import { usePlugin } from "tinacms";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { client } from "../utils/contentfulClient";

import Layout from "../components/shared/Layout/Layout";
import Sponsors from "../components/Sponsors/Sponsors";

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/home.json",
      parse: parseJson,
    });
  }

  const data = await client.getEntries({
    content_type: "news",
  });

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../../content/home.json")).default,
      },
      articles: data.items,
    },
    revalidate: 60,
  };
};

const Index = ({ file, articles }) => {
  // console.log(articles);

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
        label: "Welcome",
        name: "welcome",
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
            label: "Heading",
            name: "heading",
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

  const { hero, welcome, about, extracurricular, news } = data;

  usePlugin(form);

  useGithubToolbarPlugins();

  return (
    <>
      <Head>
        <title>Gansbaai Academia | High School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="hero position-relative w-100 h-100">
          <Image
            src={hero.image}
            alt="Mountains"
            layout="responsive"
            width="1920"
            height="1080"
            objectFit="cover"
          />
          <div className="overlay position-absolute top-0 start-0 w-100 h-100" />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light text-center">
            <p className="mb-0 fw-bolder text-warning">{hero.para_1}</p>
            <h1 className="fs-2 text-uppercase fs-lg-1">{hero.heading}</h1>
            <p className="px-3 px-md-0">{hero.para_2}</p>
          </div>
        </section>

        {/* Sponsors */}
        <Sponsors />

        {/* Welcome */}

        <section className="py-5 mt-5 container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 px-lg-5">
                <h2 className="mb-sm-3">{welcome.heading}</h2>
                <p>{welcome.para_1}</p>
                <p>{welcome.para_2}</p>
              </div>
              <div className="col-12 col-lg-6 d-lg-flex justify-content-center align-items-end">
                <Link href="/about">
                  <a className="fs-lg-2 fw-bold text-uppercase text-danger">
                    {welcome.link}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About */}

        <section className="py-5 container-fluid bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <Image
                  src={about.image}
                  alt="Diverse and inclusive school"
                  layout="responsive"
                  width="480"
                  height="300"
                  objectFit="cover"
                />
              </div>
              <div className="py-5 col-12 col-lg-6 py-lg-0 px-lg-5 d-lg-flex flex-lg-column justify-content-center align-items-start">
                <h2 className="mb-sm-3">{about.heading}</h2>
                <p>{about.para_1}</p>
                <p>{about.para_2}</p>
                <Link href="/investors">
                  <a className="fs-lg-2 fw-bold text-uppercase text-danger mt-lg-2">
                    {about.link}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Extracurricular */}
        <section className="py-5 container-fluid bg-danger">
          <div className="container py-lg-5">
            <div className="row">
              {extracurricular.map((extra) => {
                return (
                  <div
                    className="col d-flex justify-content-center align-items-center"
                    key={extra.id}
                  >
                    <Link href={extra.href}>
                      <a>
                        <div
                          className="my-5 overflow-hidden position-relative rounded-circle my-lg-0 mx-lg-5"
                          style={{ width: 300, height: 300 }}
                        >
                          <Image
                            className="rounded-circle"
                            src={extra.image}
                            alt="Sports"
                            layout="fill"
                            objectFit="cover"
                          />
                          <div className="bottom-0 mb-5 bg-dark position-absolute start-0 text-light d-flex justify-content-center align-items-center w-100">
                            <h2>{extra.heading}</h2>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* News */}

        <section className="mb-5 container-fluid">
          <div className="container py-5">
            <h2 className="py-lg-5">{news.heading}</h2>
            <div className="row">
              {articles
                .sort((a, b) => (b.fields.date > a.fields.date ? 1 : -1))
                .map((article) => {
                  return (
                    <div className="col-12 col-lg-4" key={article.sys.id}>
                      <div className="my-5 card my-lg-0">
                        <Image
                          className="card-img-top"
                          src={
                            "https:" +
                            article.fields.featuredImage.fields.file.url
                          }
                          alt={article.fields.featuredImage.fields.file.title}
                          layout="responsive"
                          objectFit="cover"
                          width={
                            article.fields.featuredImage.fields.file.details
                              .image.width
                          }
                          height={
                            article.fields.featuredImage.fields.file.details
                              .image.height
                          }
                        />
                        <div
                          className="card-body d-flex flex-column justify-content-between align-items-start"
                          style={{ minHeight: 300 }}
                        >
                          <div>
                            <p className="mb-2 text-muted">
                              {article.fields.date}
                            </p>
                            <h5 className="card-title">
                              {article.fields.title}
                            </h5>
                            <h6 className="card-subtitle mb-2">
                              by{" "}
                              <span className="text-muted">
                                {article.fields.author.fields.name}
                              </span>
                            </h6>
                            <p className="card-text">
                              {article.fields.summary}
                            </p>
                          </div>
                          <div>
                            <Link href={`/articles/${article.fields.slug}`}>
                              <a>Continue Reading...</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <Sponsors />
      </Layout>
    </>
  );
};

export default Index;
