import { useEffect, useRef } from "react";
import TwitterIcon from "../../components/Icons/TwitterIcon";
import TelegramIcon from "../../components/Icons/TelegramIcon";

import { HorizontalFlexContainer } from "../../components/Layout/HorizontalFlexContainer";
import MainSectionContainer from "../../components/Layout/MainSectionContainer";
import { VerticalFlexContainer } from "../../components/Layout/VerticalFlexContainer";
import "./Banner.css";
import Spacer from "../../components/Layout/Spacer";

const socialMedia = [
  {
    link: "https://t.me/ApeSocks",
    logo: <TelegramIcon color="white" size={500} />,
  },
];

function Icons() {
  return (
    <HorizontalFlexContainer width="100%" justify="flex-start">
      {socialMedia.map((val, i) => (
        <div
          className="icon"
          key={i}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(val.link);
          }}
          style={{
            zIndex: 1000,
          }}
        >
          {val.logo}
        </div>
      ))}
    </HorizontalFlexContainer>
  );
}
export default function Banner() {
  const canvas = useRef();
  const circleArray = useRef([]);

  const innerHeight = window.innerHeight;
  const innerWidth = window.innerWidth;

  //Object Oriented Programming
  //JavaScript Object below is CAPITALIZED to indicate this is an Object
  function Circle(x, y, dx, dy, radius) {
    this.x = x; //Each circle has its own x and y value and separate positioning
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    //create method within Object to actually put x and y parameters to use
    this.draw = function () {
      var c = canvas.current.getContext("2d"); //context variable

      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = "white";
      c.stroke();
      c.fillStyle = "white";
      c.fill();
      c.closePath();
    };

    this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx; //reverses circle to boune left to right
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy; //to bounce up and down
      }
      this.x += this.dx; //Add 1 on to X.
      this.y += this.dy;

      this.draw();
    };
  }

  function init() {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    var c = [];

    /*Below is where you can decide the amount of circles. Right now there are 100. */
    for (var i = 0; i < 100; i++) {
      var radius = 1;
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = Math.random() - 0.5;
      var dy = Math.random() - 0.5;
      c.push(new Circle(x, y, dx, dy, radius)); //pushes a new circle every time the array is ran
    }
    circleArray.current = c;
  }

  function animate() {
    requestAnimationFrame(animate);
    var c = canvas.current.getContext("2d"); //context variable
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.current.length; i++) {
      circleArray.current[i].update();
    }
  }

  useEffect(() => {
    init();
    animate();
  }, []);
  return (
    <MainSectionContainer backgroundColor="#FFBD00" id="Home">
      <canvas id="c" ref={canvas}></canvas>
      <div className="banner-inner-container">
        <VerticalFlexContainer justify="flex-start" align="flex-start">
          <div className="title-container">
            <h1 id="main-title">Welcome to ApeSocks 🧦</h1>
            <h3 id="sub-title">Putting some monkeys with socks in the moon</h3>
            <Spacer height="32px" />
            <Icons />
          </div>
        </VerticalFlexContainer>
      </div>
    </MainSectionContainer>
  );
}
