import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-4">Login with</h2>
      <div className="flex flex-col gap-3">
        <button className="btn">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn">
          <FaGithub />
          Login with Git-Hub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
