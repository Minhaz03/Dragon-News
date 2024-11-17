import React from "react";
import { AiOutlineShareAlt, AiFillStar, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      {/* Author Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={news.author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{news.author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(news.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <AiOutlineShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-2">{news.title}</h2>

      {/* Image */}
      <div className="mb-4">
        <img src={news.image_url} alt="news" className="w-full rounded-lg" />
      </div>

      {/* Details */}
      <p className="text-sm text-gray-700 mb-3">
        {news.details.slice(0, 100)}...{" "}
        <Link to={`/news/${news._id}`} className="text-blue-500 cursor-pointer">Read More</Link>
      </p>

      {/* Rating and Views */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-yellow-500">
          <AiFillStar />
          <p className="ml-1 text-sm font-semibold">{news.rating.number}</p>
          <p className="ml-2 text-sm text-gray-500">{news.rating.badge}</p>
        </div>
        <div className="flex items-center text-gray-500">
          <AiOutlineEye />
          <p className="ml-1 text-sm">{news.total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
