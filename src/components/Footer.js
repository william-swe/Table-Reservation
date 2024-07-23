import "../css/Footer.css"
import logo from "../images/Logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const items = ["Home", "About", "Menu", "Reservations", "Order Online", "Login"];
  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: hello@example.com",
    },
    {
      icon: faGithub,
      url: "https://github.com",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com",
    },
    {
      icon: faMedium,
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com",
    },
  ];

  return (
    <footer>
      <img id="footer-img" src={logo} alt="logo"></img>
      <nav id="footer-nav">
        <ul>
          {items.map((item, index) => {
            return <li key={index}><a
              href="https://example.com"
              target="_blank"
              rel="noreferrer">{item}</a></li>
          })}
        </ul>
      </nav>
      <div id="footer-contact">
        <p>1234 N Michigan Ave, Chicago, IL 60611, United States</p>
        <p>(312) 555-1234</p>
        <p>litte_lemon_chicago@business.com</p>
      </div>
      <div id="footer-social-media">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social["url"]}
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon
              icon={social["icon"]}
              size="2x" />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer;