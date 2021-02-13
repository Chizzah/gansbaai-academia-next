import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-5 text-center bg-light text-lg-start bg-dark text-light">
      {/* Grid container  */}
      <div className="container p-4">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="mb-4 col-lg-6 col-md-12 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="mb-4 col-lg-3 col-md-6 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="mb-0 list-unstyled">
              <li>
                <Link href="#">
                  <a className="text-light">Link 1</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-light">Link 2</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-light">Link 3</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-light">Link 4</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="mb-4 col-lg-3 col-md-6 mb-md-0">
            <h5 className="mb-0 text-uppercase">Links</h5>

            <ul className="list-unstyled">
              <li>
                <Link href="#">
                  <a className="text-light">Link 1</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-light">Link 2</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-light">Link 3</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-light">Link 4</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
      {/* Grid container  */}

      {/* Copyright  */}
      <div
        className="p-3 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "0.75rem" }}
      >
        Copyright © Gansbaai Academia {new Date().getFullYear()} | All rights
        reserved
      </div>
      {/* Copyright  */}
    </footer>
  );
};

export default Footer;
