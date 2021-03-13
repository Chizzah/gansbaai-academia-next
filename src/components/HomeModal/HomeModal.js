import Link from "next/link";
import Image from "next/image";
import Rodal from "rodal";

import "rodal/lib/rodal.css";

const HomeModal = ({ visible, closeModal }) => {
  return (
    <Rodal width={1000} height={600} visible={visible} onClose={closeModal}>
      <section className="container-fluid">
        <div className="container">
          <div className="row">
            <h2 className="fs-2 fs-lg-2 mt-3 mb-4">
              Explore Gansbaai Academia
            </h2>
          </div>
          <div className="row g-0 w-100">
            <div className="col-12 col-lg-4 position-relative order-2 order-lg-1">
              <Link href="/investors">
                <a>
                  <Image
                    src="/images/investors.jpg"
                    alt="Investors"
                    layout="responsive"
                    width="480"
                    height="720"
                  />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100" />
                  <div className="hero_content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light text-center">
                    <h3 className="text-uppercase">Investors</h3>
                    <p className="py-1 px-3">
                      Find out how to become a sponsor at Gansbaai Academia.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-12 col-lg-4 position-relative order-1 order-lg-2">
              <Link href="/parents">
                <a>
                  <Image
                    src="/images/parents.jpg"
                    alt="Parents"
                    layout="responsive"
                    width="480"
                    height="720"
                  />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100" />
                  <div className="hero_content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light text-center">
                    <h3 className="text-uppercase">Parents</h3>
                    <p className="py-1 px-3">
                      Learn more about Gansbaai Academia and what it offers your
                      child.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-12 col-lg-4 position-relative order-3">
              <Link href="/student-portal">
                <a>
                  <Image
                    src="/images/students.jpg"
                    alt="Students"
                    layout="responsive"
                    width="480"
                    height="720"
                  />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100" />
                  <div className="hero_content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light text-center">
                    <h3 className="text-uppercase">Students</h3>
                    <p className="py-1 px-3">
                      Find the latest learning resources in our Student Portal.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Rodal>
  );
};

export default HomeModal;
