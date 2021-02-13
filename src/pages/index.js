import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/shared/Layout/Layout";
import Sponsors from "../components/Sponsors/Sponsors";

const Index = () => {
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

        {/* Sponsors */}
        <Sponsors />

        {/* Welcome */}

        <section className="py-5 mt-5 container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 px-sm-5">
                <h2 className="py-sm-5">Welcome to Academia</h2>
                <p>
                  Chocolate bar lemon drops danish macaroon pastry tiramisu
                  wafer dessert gummies. Powder topping liquorice halvah sugar
                  plum jelly-o. Chocolate cake carrot cake candy sweet gummies.
                  Pie tiramisu carrot cake chocolate cake. Wafer brownie
                  brownie. Apple pie pastry tart danish cake. Icing chocolate
                  bar cotton candy carrot cake jelly beans. Lollipop soufflé
                  sesame snaps biscuit tart ice cream cotton candy dessert pie.
                </p>
                <p>
                  Cotton candy cookie tootsie roll powder brownie. Chocolate
                  cake bear claw marzipan. Bear claw fruitcake cake lemon drops
                  sugar plum. Lollipop apple pie oat cake tiramisu toffee
                  brownie fruitcake marzipan. Icing tart chupa chups candy canes
                  croissant chocolate bar tart lollipop caramels. Ice cream
                  biscuit sugar plum lollipop biscuit toffee sesame snaps.
                </p>
              </div>
              <div className="col-12 col-sm-6 d-sm-flex justify-content-center align-items-end">
                <Link href="/about">
                  <a className="fs-sm-2 fw-bold text-uppercase text-danger">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 container-fluid bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6">
                <Image
                  src="/images/gansbaai-academia-home-diverse.jpg"
                  alt="Diverse and inclusive school"
                  layout="responsive"
                  width="480"
                  height="300"
                  objectFit="cover"
                />
              </div>
              <div className="py-5 col-12 col-sm-6 py-sm-0 px-sm-5 d-sm-flex flex-sm-column justify-content-center align-items-start">
                <h2 className="mb-5">Diverse & Inclusive Culture</h2>
                <p>
                  Biscuit dragée jelly-o macaroon bear claw powder pudding lemon
                  drops. Icing jelly beans cheesecake powder tiramisu dragée
                  pastry danish. Dragée jelly-o bear claw cotton candy lemon
                  drops carrot cake. Carrot cake pie candy canes sweet roll
                  jelly-o jelly beans icing halvah. Donut candy candy. Jelly-o
                  wafer pie sugar plum tart cheesecake toffee candy chocolate
                  cake. Sugar plum icing wafer sesame snaps dessert muffin
                  dragée biscuit biscuit.
                </p>
                <p>
                  Pastry toffee cake jelly beans powder marshmallow. Chupa chups
                  pudding sesame snaps cookie cupcake. Toffee marshmallow sweet
                  roll pie jujubes sweet pie fruitcake. Jelly oat cake muffin
                  bear claw pastry liquorice dessert tart tart. Cookie dessert
                  sesame snaps. Tiramisu sesame snaps chocolate chupa chups.
                  Macaroon jelly beans chupa chups sugar plum chupa chups danish
                  tiramisu.
                </p>
                <Link href="/investors">Learn More</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Extracurricular */}

        <section className="py-5 container-fluid bg-danger">
          <div className="container py-sm-5">
            <div className="row d-flex justify-content-center align-items-center">
              <Link href="/sports">
                <div
                  className="my-5 overflow-hidden col-12 col-sm-4 position-relative rounded-circle my-sm-0 mx-sm-5"
                  style={{ width: 300, height: 300 }}
                >
                  <Image
                    className="rounded-circle"
                    src="/images/gansbaai-academia-home-sports.jpg"
                    alt="Sports"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="bottom-0 mb-5 bg-dark position-absolute start-0 text-light d-flex justify-content-center align-items-center w-100">
                    <h2>Sports</h2>
                  </div>
                </div>
              </Link>
              <Link href="/arts">
                <div
                  className="my-5 overflow-hidden col-12 col-sm-4 position-relative rounded-circle my-sm-0 mx-sm-5"
                  style={{ width: 300, height: 300 }}
                >
                  <Image
                    className="rounded-circle"
                    src="/images/gansbaai-academia-home-arts.jpg"
                    alt="Arts"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="bottom-0 mb-5 position-absolute start-0 text-light bg-dark d-flex justify-content-center align-items-center w-100">
                    <h2>Arts</h2>
                  </div>
                </div>
              </Link>
              <Link href="/societies">
                <div
                  className="my-5 overflow-hidden col-12 col-sm-4 position-relative rounded-circle my-sm-0 mx-sm-5"
                  style={{ width: 300, height: 300 }}
                >
                  <Image
                    className="rounded-circle"
                    src="/images/gansbaai-academia-home-societies.jpg"
                    alt="Societies"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="bottom-0 mb-5 position-absolute start-0 text-light bg-dark d-flex justify-content-center align-items-center w-100">
                    <h2>Societies</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* News */}

        <section className="mb-5 container-fluid">
          <div className="container py-5">
            <h2 className="py-sm-5">Latest News</h2>
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
                    <h6 class="card-subtitle mb-2 text-muted">
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
                    <h6 class="card-subtitle mb-2 text-muted">
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
                    <h6 class="card-subtitle mb-2 text-muted">by Sam Smith</h6>
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

export default Index;
