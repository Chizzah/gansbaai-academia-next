import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/shared/Layout/Layout";

export default function Home() {
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
            src="/images/gansbaai-academia-home-hero.jpg"
            alt="Mountains"
            layout="responsive"
            width="1920"
            height="720"
            objectFit="cover"
          />
          <div className="hero_overlay" />
          <div className="hero_content">
            <h1>Gansbaai Academia</h1>
            <p>Spread your wings</p>
          </div>
        </section>

        {/* Intro */}

        <section className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 px-sm-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore in explicabo aperiam itaque fugit doloribus voluptatum
                  voluptate ipsam libero. Debitis repellat minima pariatur earum
                  totam soluta? Voluptates quas tempora blanditiis!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur autem tempore iste, architecto reprehenderit, cum,
                  doloremque in placeat accusantium voluptates blanditiis
                  quaerat quas. Assumenda similique quod explicabo fuga
                  cupiditate? Tempora?
                </p>
              </div>
              <div className="col-12 col-sm-6 d-sm-flex justify-content-center align-items-end">
                <Link href="/about">
                  <a>Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <Image
                  src="/images/gansbaai-academia-home-diverse.jpg"
                  alt="Diverse and inclusive school"
                  layout="responsive"
                  width="480"
                  height="360"
                  objectFit="cover"
                />
              </div>
              <div className="col-12 col-sm-6 py-5 py-sm-0 px-sm-5 d-sm-flex flex-sm-column justify-content-center align-items-start">
                <h2 className="mb-5">Diverse & Inclusive Culture</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem, vero aperiam omnis dolore ipsa eius cum, explicabo,
                  velit quod odit labore ullam ad nostrum suscipit pariatur
                  consectetur aliquam corrupti accusamus!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur autem tempore iste, architecto reprehenderit, cum,
                  doloremque in placeat accusantium voluptates blanditiis
                  quaerat quas. Assumenda similique quod explicabo fuga
                  cupiditate? Tempora?
                </p>
                <Link href="/investors">Learn More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Extracurricular */}

        <section className="container-fluid py-5 bg-danger">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-4">
                <Image
                  src="/images/gansbaai-academia-home-sports.jpg"
                  class="rounded-circle"
                  alt="Sport"
                  layout="fixed"
                  width="360"
                  height="360"
                  objectFit="cover"
                />
              </div>
              <div className="col-12 col-sm-4">
                <Image
                  src="/images/gansbaai-academia-home-arts.jpg"
                  class="rounded-circle"
                  alt="Arts"
                  layout="fixed"
                  width="360"
                  height="360"
                  objectFit="cover"
                />
              </div>
              <div className="col-12 col-sm-4">
                <Image
                  src="/images/gansbaai-academia-home-societies.jpg"
                  class="rounded-circle"
                  alt="Societies"
                  layout="fixed"
                  width="360"
                  height="360"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
