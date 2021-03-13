import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand text-uppercase fw-bold text-danger">
            Gansbaai Academia
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse fw-bold"
          id="navbarSupportedContent"
        >
          <ul className="mb-2 navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/admissions">
                <a className="nav-link">Admissions</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/student-portal">
                <a className="nav-link">Student Portal</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
