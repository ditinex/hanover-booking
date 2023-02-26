import { useState } from "react";
import Buildings from "./buildings";
import BuildingDetailsPopup from "./buildingDetailsPopup";
import "./style.css";

const Home = () => {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [popupData, setPopupData] = useState({
    positionX: 0,
    positionY: 0,
    title: "",
    subtitle1: "",
    subtitle2: "",
    subtitle3: "",
  });

  const onMouseEnter = (data) => {
    // Calculate popup position so that it won't get outside of screen.
    const width = 208;
    const height = 208;
    const xAxis = data.positionX;
    const yAxis = data.positionY;
    const xDelta = width - xAxis;
    const yDelta = height - yAxis;
    var leftvalue = data.positionX;
    var topvalue = data.positionY;

    if (xDelta >= 180 && yDelta >= 180) {
      leftvalue = xDelta >= width / 2 ? xAxis - 150 - 20 : xAxis + 20;
      topvalue = yAxis + 20;
    } else if (xDelta >= 180 && yDelta <= 180) {
      leftvalue = xDelta >= width / 2 ? xAxis - 150 - 20 : xAxis + 20;
      topvalue = -(yDelta + 20);
    }

    data.positionX = leftvalue;
    data.positionY = topvalue;

    setPopupData(data);
    setPopupVisibility(true);
  };

  const onMouseLeave = () => {
    setPopupData((prev) => {
      const temp = {
        ...prev,
        title: "",
        subtitle1: "",
        subtitle2: "",
        subtitle3: "",
      };
      return temp;
    });
    setPopupVisibility(false);
  };

  return (
    <div className="home bg-white relative">
      <BuildingDetailsPopup show={popupVisibility} data={popupData} />
      <svg
        className="relative"
        width="100%"
        height="100%"
        x="0px"
        y="0px"
        viewBox="0 0 1512 982"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="dropshadow" width="110%" height="110%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5"></feGaussianBlur>
            <feOffset dx="-1" dy="1" result="offsetblur"></feOffset>
            <feFlood floodColor="#777"></feFlood>
            <feComposite operator="in" in2="offsetblur"></feComposite>
            <feMerge>
              <feMergeNode></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <filter
            id="innershadow"
            x0="-50%"
            y0="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="3"
              result="blur"
            ></feGaussianBlur>
            <feOffset dy="2" dx="3"></feOffset>
            <feComposite
              in2="SourceAlpha"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            ></feComposite>

            <feFlood floodColor="#444444" floodOpacity="0.75"></feFlood>
            <feComposite in2="shadowDiff" operator="in"></feComposite>
            <feComposite
              in2="SourceGraphic"
              operator="over"
              result="firstfilter"
            ></feComposite>

            <feGaussianBlur
              in="firstfilter"
              stdDeviation="3"
              result="blur2"
            ></feGaussianBlur>
            <feOffset dy="-2" dx="-3"></feOffset>
            <feComposite
              in2="firstfilter"
              operator="arithmetic"
              k2="-1"
              k3="1"
              result="shadowDiff"
            ></feComposite>

            <feFlood floodColor="#444444" floodOpacity="0.75"></feFlood>
            <feComposite in2="shadowDiff" operator="in"></feComposite>
            <feComposite in2="firstfilter" operator="over"></feComposite>
          </filter>
          <linearGradient id="gradselected" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#11998e", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#38ef7d", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <image
          className="home_bg_image"
          href="/master-plan.jpg"
          height="100%"
          width="100%"
        />
        <Buildings _this={{ onMouseEnter, onMouseLeave }} />
      </svg>
    </div>
  );
};

export default Home;
