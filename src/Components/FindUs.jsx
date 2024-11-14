import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-4 mt-5">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
            <FaFacebook className="text-blue-400 text-xl" /> 
            FaceBook
        </button>
        <button className="btn join-item justify-start">
            <FaTwitter className="text-blue-400 text-xl" />
            Twitter
        </button>
        <button className="btn join-item justify-start">
            <FaInstagram className="text-pink-400 text-xl" />
            Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
