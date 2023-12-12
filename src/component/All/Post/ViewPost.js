import React, { useState } from "react";
import man from "../../images/man.png";
import { Link } from "react-router-dom";

const ViewPost = ({ post }) => {
  const { id, heading, author, date, content } = post;
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const truncatedContent =
    content.length > 140 ? `${content.slice(0, 140)}...` : content;

  return (
    <section className="bg-[#f7f2f2] rounded-3xl mx-8 my-8 text-left">
      <div className="lg:order-first">
        <div className="flex flex-col">
          <div className="p-8 rounded-3xl bg-[#e8e6e6] ring-1 ring-white/10 shadow-sm">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img src={man} alt="hello" className="h-6 w-6" />
                <p className="text-neutral-800 font-semibold">{author}</p>
              </div>
              <p>
                <span className="text-lg font-medium text-neutral-800 uppercase lg:text-xl">
                  {date}
                </span>
              </p>
            </div>
            <h1 className="mt-8 mb-4 text-lg font-medium text-neutral-800 text-left">
              {heading}
            </h1>
            <p className="text-sm font-medium text-neutral-800">
              {expanded ? content : truncatedContent}
            </p>
            {content.length > 140 && (
              <div className="flex mt-6">
                <button
                  className="items-center justify-between inline-flex w-full font-medium py-2.5 text-center text-emerald-400 duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"
                  onClick={toggleExpansion}
                >
                  {expanded ? (
                    "See less ←"
                  ) : (
                    <Link to={`view/post/${id}`}>See more →</Link>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewPost;
