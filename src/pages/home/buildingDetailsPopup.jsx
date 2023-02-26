import { useState } from "react";

const BuildingDetailsPopup = ({ show, data }) => {
  return (
    <div
      className={`absolute w-52 h-52 home_popup_bg rounded-md p-3 z-50 ${
        show ? "home_fadeIn" : "home_fadeOut"
      }`}
      style={{ top: data.positionY, left: data.positionX }}
    >
      <h1 className="text-2xl text-slate-800">{data.title}</h1>
      <h3 className="text-md text-slate-800">{data.subtitle1}</h3>
      <h3 className="text-md text-slate-800">{data.subtitle2}</h3>
      <h3 className="text-md text-slate-800">{data.subtitle3}</h3>
    </div>
  );
};

export default BuildingDetailsPopup;
