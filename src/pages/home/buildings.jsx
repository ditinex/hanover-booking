const Buildings = ({ _this }) => {
  return (
    <g>
      <path
        d="M432.92 401.827L432.433 391.607L437.786 390.634V386.741L454.817 381.874L457.737 384.794L514.184 369.22V366.787L531.702 361.92L535.595 367.273L538.935 366.62L539.487 364.353H542.407L547.76 370.194L555.059 368.247L566.738 380.9V394.041L567.224 394.527L567.711 396.961L577.443 406.208L577.93 413.508L580.363 415.454L580.849 424.701H582.309L584.742 429.568H586.202L587.175 431.515L590.582 430.541L590.095 428.595L603.234 425.675V423.241L606.153 422.268L618.318 435.895V442.708L619.292 443.195L624.644 652.952L491.8 694.806L483.527 680.693L476.228 684.586L465.523 669.986L461.143 611.585L458.223 614.991L455.79 615.965L447.031 601.851L430 402.801L432.92 401.827Z"
        id="tower-path-0"
        class="home_building"
        stroke-dasharray="5,1"
        onMouseOver={() =>
          _this.onMouseEnter({
            positionX: 170,
            positionY: 160,
            title: "A Block",
            subtitle1: "16 Floors | 93 Apartments",
            subtitle2: "Typology : 3BHK",
            subtitle3: "Area: 1523 - 1626 Sq. ft",
          })
        }
        onMouseLeave={_this.onMouseLeave}
      ></path>
      <path
        d="M546.123 368.003L545.57 349.478L576.813 341.737L585.107 350.031L585.66 353.073L606.396 348.096V333.995L637.363 325.424L645.657 334.272V340.631L649.251 345.055L648.145 322.936L674.135 315.747L684.088 326.254V317.406L716.713 308.282L754.315 342.843L752.103 552.97L708.972 564.859L696.254 567.9L691.553 569.283L690.171 573.43L665.011 580.895V589.742L641.786 596.655L637.363 592.231V586.978L632.386 580.342L625.474 582.83H622.985L619.944 442.93L618.838 442.276V435.741L606.396 421.64L602.526 422.746L602.802 425.235L589.531 428L590.084 430.211L587.319 431.041L586.766 429.106H586.213H585.107L582.619 424.129H581.236L580.96 415.281L578.195 413.346L577.919 406.157L567.965 396.757L567.136 393.716V380.721L561.053 374.085L555.247 368.003L547.782 369.662L546.123 368.003Z"
        id="tower-path-1"
        class="home_building"
        stroke-dasharray="5,1"
        onMouseOver={() =>
          _this.onMouseEnter({
            positionX: 290,
            positionY: 140,
            title: "A Block",
            subtitle1: "16 Floors | 93 Apartments",
            subtitle2: "Typology : 3BHK",
            subtitle3: "Area: 1523 - 1626 Sq. ft",
          })
        }
        onMouseLeave={_this.onMouseLeave}
      ></path>
      <path
        d="M754.868 342.566L716.99 308.006L742.703 301.647L748.786 308.006V315.471L760.398 312.429V293.629L811.824 279.804L820.948 288.652V290.587L838.09 286.716L838.643 273.445L866.568 265.98L876.521 274.828V280.91L884.263 287.546L875.139 475.555V483.02L871.544 484.126L869.609 526.981L848.078 533.893L836.984 535.828L820.395 530.575L809.888 533.893L805.741 529.469L794.405 533.893V538.316L752.656 552.694L754.868 342.566Z"
        id="tower-path-2"
        class="home_building"
        stroke-dasharray="5,1"
        onMouseOver={() =>
          _this.onMouseEnter({
            positionX: 450,
            positionY: 80,
            title: "A Block",
            subtitle1: "16 Floors | 93 Apartments",
            subtitle2: "Typology : 3BHK",
            subtitle3: "Area: 1523 - 1626 Sq. ft",
          })
        }
        onMouseLeave={_this.onMouseLeave}
      ></path>
      <path
        d="M997.897 242.203L988.497 234.185L962.507 241.373V249.668L955.042 252.156L941.771 241.097L917.993 247.179V261.004L901.681 265.98L893.386 259.068L867.12 265.98L876.797 274.551V280.91L884.539 287.269L875.415 475.555L887.857 473.066L891.728 477.767L899.193 476.108V485.232L924.629 507.903L923.8 525.598L941.771 543.846L1040.2 512.604L1059 311.6L1045.45 299.711H1044.07L1043.79 303.306L1041.86 303.858L1038.82 301.094L1025.55 305.241L1021.95 301.647V296.946L1004.53 283.399L1006.47 255.474L1003.98 253.538V250.497H1000.94V248.285H997.897V242.203Z"
        id="tower-path-3"
        class="home_building"
        stroke-dasharray="5,1"
        onMouseOver={() =>
          _this.onMouseEnter({
            positionX: 600,
            positionY: 50,
            title: "A Block",
            subtitle1: "16 Floors | 93 Apartments",
            subtitle2: "Typology : 3BHK",
            subtitle3: "Area: 1523 - 1626 Sq. ft",
          })
        }
        onMouseLeave={_this.onMouseLeave}
      ></path>
    </g>
  );
};

export default Buildings;