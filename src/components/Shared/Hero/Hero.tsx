import Image from "next/image";

const Hero = ({ hero, openModal }) => {
  return (
    <div>
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
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={openModal}
          >
            Explore Academia
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
