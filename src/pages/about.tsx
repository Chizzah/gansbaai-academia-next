import { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";

import Layout from "../components/shared/Layout/Layout";

const useMountEffect = (fun) => useEffect(fun, []);

const About = ({ file }) => {
  const ourSchool = useRef(null);
  const ourHistory = useRef(null);
  const ourCurriculum = useRef(null);

  const ourSchoolScroll = () => ourSchool.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

  const ourHistoryScroll = () => ourHistory.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

  const ourCurriculumScroll = () => ourCurriculum.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

  useMountEffect(ourSchoolScroll); // Scroll on mount
  useMountEffect(ourHistoryScroll); // Scroll on mount
  useMountEffect(ourCurriculumScroll); // Scroll on mount

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
      {
        label: "Curriculum",
        name: "curriculum",
        component: "group",
        fields: [
          {
            label: "Heading",
            name: "heading",
            component: "text",
          },
          {
            label: "Paragraph",
            name: "para",
            component: "textarea",
          },
          {
            label: "Core",
            name: "core",
            component: "group-list",
            fields: [
              {
                label: "ID",
                name: "id",
                component: "text",
              },
              {
                label: "Paragraph",
                name: "para",
                component: "textarea",
              },
            ],
          },
          {
            label: "Other",
            name: "other",
            component: "group-list",
            fields: [
              {
                label: "ID",
                name: "id",
                component: "text",
              },
              {
                label: "Paragraph",
                name: "para",
                component: "textarea",
              },
            ],
          },
        ],
      },
    ],
  };

  const [data, form] = useGithubJsonForm(file, formOptions);

  const { hero, about, history, curriculum } = data;

  const { core, other } = curriculum;

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
          <div className="hero_content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light text-center">
            <p className="mb-0 fw-bolder text-warning">{hero.para_1}</p>
            <h1 className="fs-2 text-uppercase fs-lg-1">{hero.heading}</h1>
            <p className="px-3 px-md-0">{hero.para_2}</p>
          </div>
        </section>

        {/* PAGE CONTENT */}

        <section className="container-fluid py-5">
          <div className="container">
            {/* MAIN CONTENT */}

            <div className="row d-flex flex-column flex-lg-row">
              {/* OUR SCHOOL */}

              <section
                id="our_school"
                ref={ourSchool}
                className="col-12 col-lg-9 order-2 order-lg-1"
              >
                <div className="container">
                  <div className="row">
                    <div className="col py-5">
                      <h2 className="mb-sm-3">{about.heading}</h2>
                      <p>{about.para_1}</p>
                      <p>{about.para_2}</p>
                    </div>
                  </div>
                </div>

                {/* OUR HISTORY */}

                <div id="our_history" ref={ourHistory} className="container">
                  <div className="row">
                    <div className="col py-5">
                      <h2 className="mb-sm-3">{history.heading}</h2>
                      <p>{history.para_1}</p>
                      <p>{history.para_2}</p>
                      <p>{history.para_3}</p>
                      <p>{history.para_4}</p>
                    </div>
                  </div>
                </div>

                {/* OUR CURRICULUM */}

                <div
                  id="our_curriculum"
                  ref={ourCurriculum}
                  className="container"
                >
                  <div className="row">
                    <div className="col py-5">
                      <h2 className="mb-sm-3">{curriculum.heading}</h2>
                      <p>{curriculum.para}</p>
                      <div className="my-5">
                        <button
                          className="btn btn-danger btn-lg"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#core"
                          aria-expanded="false"
                          aria-controls="core"
                          style={{ width: "25rem" }}
                        >
                          Core Subjects
                        </button>
                        <div className="collapse" id="core">
                          {core.map((c) => {
                            return (
                              <ul
                                key={c.id}
                                className="mt-3"
                                style={{ width: "25rem" }}
                              >
                                <li>{c.para}</li>
                              </ul>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <button
                          className="btn btn-danger btn-lg"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#other"
                          aria-expanded="false"
                          aria-controls="other"
                          style={{ width: "25rem" }}
                        >
                          Other Subjects
                        </button>
                        <div className="collapse" id="other">
                          {other.map((o) => {
                            return (
                              <ul
                                key={o.id}
                                className="mt-3"
                                style={{ width: "25rem" }}
                              >
                                <li>{o.para}</li>
                              </ul>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SIDEBAR CONTENT */}

              <aside className="col-12 col-lg-3 order-1 order-lg-2">
                <ul className="top-0 start-0">
                  <li className="mb-5">
                    <button
                      className="btn btn-outline-danger"
                      onClick={ourSchoolScroll}
                    >
                      Our School
                    </button>
                  </li>
                  <li className="mb-5">
                    <button
                      className="btn btn-outline-danger"
                      onClick={ourHistoryScroll}
                    >
                      Our History
                    </button>
                  </li>
                  <li className="mb-5">
                    <button
                      className="btn btn-outline-danger"
                      onClick={ourCurriculumScroll}
                    >
                      Our Curriculum
                    </button>
                  </li>
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
