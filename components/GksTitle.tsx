import React from "react";
import Headshot from "../assets/img/headshot.jpg";
import { motion } from "framer-motion";

// Interface
interface ILink {
  title: string;
  to: string;
}

/**
 * Title component
 */
const GksTitle: React.FC = () => {
  // Links
  const links: ILink[] = [
    { title: "Experience", to: "#experience" },
    { title: "Tools", to: "#tools" },
    { title: "Projects", to: "#projects" },
    { title: "Education", to: "#education" },
    { title: "Contact", to: "#contact" },
  ];

  // On link click
  const onLinkClick = (link: ILink) => {
    document.querySelector(link.to)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="bg-primary-800 pb-12">
        <div className="flex flex-row flex-wrap p-5 -mx-3 items-center">
          <div className="px-3 w-full sm:w-auto flex justify-center">
            <img
              src={Headshot}
              alt="Grant's headshot"
              className="rounded-full shadow-xl"
              width="175"
              height="175"
            />
          </div>
          <div className="px-3 flex-grow text-white">
            <h1 className="text-5xl font-thin mb-1 text-center sm:text-left">
              Grant Sander
            </h1>
            <h2 className="text-3xl font-thin leading-none text-gray-300 text-center sm:text-left">
              Fullstack Developer
            </h2>
            <h3 className="text-2xl font-thin leading-tight text-gray-300 text-center sm:text-left">
              Web and Mobile
            </h3>
          </div>
        </div>
      </div>
      {/* Nave */}
      <div className="px-6 -mt-8">
        <div className="flex flex-row flex-wrap justify-around px-3 py-2 overflow-x-auto -mx-1 shadow-lg border rounded-lg bg-white">
          {links.map(link => (
            <div key={link.to} className="p-1 w-1/2 sm:w-1/5">
              <motion.button
                className="px-3 py-1 cursor-pointer text-center w-full border rounded text-primary-900 border-primary-900 overflow-hidden hover:bg-primary-800 hover:text-white hover:shadow-md select-none focus:shadow-none"
                style={{ textOverflow: "ellipsis" }}
                onClick={() => onLinkClick(link)}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 1,
                  borderRadius: "50%",
                }}
              >
                {link.title}
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GksTitle;
