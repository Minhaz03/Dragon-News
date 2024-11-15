import React from "react";
import swim from "../assets/swimming.png";
import clas from "../assets/class.png";
import play from "../assets/playground.png";
import bg from "../assets/bg.png"

const QZone = () => {
  return (
    <section>
      <div className="bg-[#F3F3F3] p-5">
        <h2 className="font-bold mb-5">Q-Zone</h2>
        <div className="space-y-5">
          <img src={swim} alt="" />
          <img src={clas} alt="" />
          <img src={play} alt="" />
        </div>
      </div>
      <img className="my-5" src={bg} alt="" />
    </section>
  );
};

export default QZone;
