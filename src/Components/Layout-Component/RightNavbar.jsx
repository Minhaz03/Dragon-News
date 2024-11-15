import React from "react";
import SocialLogin from "../SocialLogin";
import FindUs from "../FindUs";
import QZone from "../QZone";

const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RightNavbar;
