import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import { usePlugin } from "tinacms";
import { useGithubJsonForm } from "react-tinacms-github";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";

import Layout from "../components/shared/Layout/Layout";
import Sponsors from "../components/Sponsors/Sponsors";

const Index = ({ file }) => {
  const pageForm = {
    label: "Home Page",
    fields: [
      {
        label: "Home Page",
        name: "home.json",
        component: "group",
        fields: [
          {
            label: "Hero",
            name: "hero",
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
                label: "Paragraph",
                name: "para",
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
            label: "Sports",
            name: "sports",
            component: "group",
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
          {
            label: "Arts",
            name: "arts",
            component: "group",
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
          {
            label: "Societies",
            name: "societies",
            component: "group",
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
        ],
      },
    ],
  };

  const [data, form] = useGithubJsonForm(file, pageForm);

  usePlugin(form);

  const { hero, welcome, about, sports, arts, societies, news } = data;

  return (
    <>
      <Head>
        <title>Gansbaai Academia | High School</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* Hero */}
        <section className="hero">
          <Image
            src={hero.image}
            alt="Mountains"
            layout="responsive"
            width="1920"
            height="720"
            objectFit="cover"
          />
          <div className="hero_overlay" />
          <div className="hero_content">
            <h1>{hero.heading}</h1>
            <p>{hero.para}</p>
          </div>
        </section>

        {/* Sponsors */}
        <Sponsors />

        {/* Welcome */}

        <section className="py-5 mt-5 container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 px-sm-5">
                <h2 className="py-sm-5">{welcome.heading}</h2>
                <p>{welcome.para_1}</p>
                <p>{welcome.para_2}</p>
              </div>
              <div className="col-12 col-sm-6 d-sm-flex justify-content-center align-items-end">
                <Link href="/about">
                  <a className="fs-sm-2 fw-bold text-uppercase text-danger">
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
              <div className="col-12 col-sm-6">
                <Image
                  src={about.image}
                  alt="Diverse and inclusive school"
                  layout="responsive"
                  width="480"
                  height="300"
                  objectFit="cover"
                />
              </div>
              <div className="py-5 col-12 col-sm-6 py-sm-0 px-sm-5 d-sm-flex flex-sm-column justify-content-center align-items-start">
                <h2 className="mb-5">{about.heading}</h2>
                <p>{about.para_1}</p>
                <p>{about.para_2}</p>
                <Link href="/investors">{about.link}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Extracurricular */}

        <section className="py-5 container-fluid bg-danger">
          <div className="container py-sm-5">
            <div className="row">
              <div className="col-12 col-sm-4 d-sm-flex justify-content-center align-items-center w-100">
                <Link href={sports.href}>
                  <a>
                    <div
                      className="my-5 overflow-hidden col-12 col-sm-4 position-relative rounded-circle my-sm-0 mx-sm-5"
                      style={{ width: 300, height: 300 }}
                    >
                      <Image
                        className="rounded-circle"
                        src={sports.image}
                        alt="Sports"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="bottom-0 mb-5 bg-dark position-absolute start-0 text-light d-flex justify-content-center align-items-center w-100">
                        <h2>{sports.heading}</h2>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href={arts.href}>
                  <a>
                    <div
                      className="my-5 overflow-hidden col-12 col-sm-4 position-relative rounded-circle my-sm-0 mx-sm-5"
                      style={{ width: 300, height: 300 }}
                    >
                      <Image
                        className="rounded-circle"
                        src={arts.image}
                        alt="Sports"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="bottom-0 mb-5 bg-dark position-absolute start-0 text-light d-flex justify-content-center align-items-center w-100">
                        <h2>{arts.heading}</h2>
                      </div>
                    </div>
                  </a>
                </Link>
                <Link href={societies.href}>
                  <a>
                    <div
                      className="my-5 overflow-hidden col-12 col-sm-4 position-relative rounded-circle my-sm-0 mx-sm-5"
                      style={{ width: 300, height: 300 }}
                    >
                      <Image
                        className="rounded-circle"
                        src={societies.image}
                        alt="Sports"
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="bottom-0 mb-5 bg-dark position-absolute start-0 text-light d-flex justify-content-center align-items-center w-100">
                        <h2>{societies.heading}</h2>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* News */}

        <section className="mb-5 container-fluid">
          <div className="container py-5">
            <h2 className="py-sm-5">{news.heading}</h2>
            <div className="row">
              <div className="col-12 col-sm-4">
                <div className="my-5 card my-sm-0">
                  <Image
                    className="card-img-top"
                    src="/images/gansbaai-academia-news-post-1.jpg"
                    alt="Societies"
                    layout="responsive"
                    objectFit="cover"
                    width="360"
                    height="360"
                  />
                  <div className="card-body">
                    <h5 className="card-title">News Post One</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      by Robin Thicke
                    </h6>
                    <p className="card-text">
                      Gingerbread apple pie fruitcake gummies danish cake.
                      Powder candy canes jelly muffin dragée jelly beans.
                      Lollipop dessert chocolate topping bonbon.
                    </p>
                    <Link href="#">
                      <a>Continue Reading...</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="my-5 card my-sm-0">
                  <Image
                    className="card-img-top"
                    src="/images/gansbaai-academia-news-post-2.jpg"
                    alt="Societies"
                    layout="responsive"
                    objectFit="cover"
                    width="360"
                    height="360"
                  />
                  <div className="card-body">
                    <h5 className="card-title">News Post Two</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      by Mariah Carey
                    </h6>
                    <p className="card-text">
                      Cake wafer croissant. Lemon drops bonbon gingerbread
                      croissant macaroon halvah. Chocolate cake donut cookie
                      halvah jelly tiramisu wafer dessert.
                    </p>
                    <Link href="#">
                      <a>Continue Reading...</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="my-5 card my-sm-0">
                  <Image
                    className="card-img-top"
                    src="/images/gansbaai-academia-news-post-3.jpg"
                    alt="Societies"
                    layout="responsive"
                    objectFit="cover"
                    width="360"
                    height="360"
                  />
                  <div className="card-body">
                    <h5 className="card-title">News Post Three</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      by Sam Smith
                    </h6>
                    <p className="card-text">
                      Soufflé chocolate bar candy. Tiramisu cake danish
                      chocolate cake jujubes dessert gummi bears. Cheesecake
                      pudding sweet roll pastry caramels.
                    </p>
                    <Link href="#">
                      <a>Continue Reading...</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <Sponsors />
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
      fileRelativePath: "content/home.json",
      parse: parseJson,
    });
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../../content/home.json")).default,
      },
    },
  };
};

export default Index;
