import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 text-xl px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={80} className="space-x-10">
        <Link to="/news">
          News websites are sites devoted to delivering the news in a different
          format than television, print or radio1. They provide timely news
          coverage, expert opinion, and other information about recent and
          important events.
        </Link>
        <Link to="/news">
          News websites are sites devoted to delivering the news in a different
          format than television, print or radio1. They provide timely news
          coverage, expert opinion, and other information about recent and
          important events.
        </Link>
        <Link to="/news">
          News websites are sites devoted to delivering the news in a different
          format than television, print or radio1. They provide timely news
          coverage, expert opinion, and other information about recent and
          important events.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
