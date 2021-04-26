import React from "react";
import logo from "../../Assets/portal.gif";
import BaseText from "../Text/BaseText";
import "./Navbar.css";
export default function Navbar() {
  const [colorClass, setColorClass] = React.useState("navbar-light");
  const [color, setColor] = React.useState(undefined);
  // const colorChange = () => {
  //   let navPosition = window.scrollY;
  //   let banner = document.getElementById("banner");
  //   let navbar = document.getElementById("navbar");
  //   if (navPosition > banner.getBoundingClientRect().height - 30) {
  //     setColorClass("navbar-light");
  //     navbar.classList.replace("bg-transparent", "navbar-light");
  //     navbar.style.backgroundColor = "#FF5353";
  //   } else {
  //     setColorClass("navbar-dark");
  //   }
  // };

  React.useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let href = document.querySelector(anchor.getAttribute("href"));
        console.log(window.pageYOffset + href?.getBoundingClientRect().top);
        window.scroll({
          top: window.pageYOffset + href?.getBoundingClientRect().top - 100,
          behavior: "smooth",
        });
      });
    });

    const interval = setInterval(() => {
      const diff = window.scrollY - window.innerHeight + 30;

      let navbar = document.getElementById("navbar");
      if (diff > 0) {
        // setColorClass("navbar-light");
        setColor("#222");
      } else {
        // setColorClass("navbar-dark");
        setColor(undefined);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg ${colorClass}  fixed-top`}
      style={{
        backgroundColor: color,
      }}
    >
      <a className="navbar-brand ml-3" href="/">
        <img
          src={logo}
          className="logo-img"
          alt=""
          style={{
            width: "70px",
          }}
        ></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#Banner">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#Mission">
              Mission
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#Token">
              Token
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#Roadmap">
              Roadmap
            </a>
          </li> */}
          <li className="nav-item">
            <a
              className="nav-link active"
              href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x36e433c6b4a0f19afc63358b36a4ffe8011be8be"
            >
              <BaseText fontSize="16px" fontWeight="500" color="white">
                🚀 Buy now!
              </BaseText>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
