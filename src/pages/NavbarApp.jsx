import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarApp() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="../../">
        <img
          src="/images/menacing.png"
          className="mr-3 h-6 sm:h-9"
          alt="Menacing Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Gao Erwann's Website
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/services" activeClassName="active">
            Services
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/pricing" activeClassName="active">
            Pricing
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/portfolio" activeClassName="active">
            Portfolio
          </Link>
        </Navbar.Link>
        <DarkThemeToggle />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
