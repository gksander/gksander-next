import React, { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

/**
 * Carousel for project images
 */
const ProjectImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  // Local state
  const [enlarged, setEnlarged] = useState<boolean>(false);
  const [direction, setDirection] = useState<0 | -1 | 1>(0);
  const [currIndex, setCurrIndex] = useState<number>(0);

  // Sizing/index
  const arrowSize = enlarged ? 24 : 18;
  const buttonSize = enlarged ? 48 : 36;
  const n = images.length;
  const imgIndex = ((currIndex % n) + n) % n;

  // Pagination
  const paginate = (dir: -1 | 1) => {
    setDirection(dir);
    setCurrIndex(oldIndex => oldIndex + dir);
  };

  return (
    <motion.div
      className={classNames(
        enlarged
          ? [
              "fixed",
              "inset-0",
              "flex",
              "flex-col",
              "bg-owhite",
              "items-center",
              "justify-center",
              "z-10",
              "px-8",
            ]
          : ["px-2"]
      )}
      onClick={() => setEnlarged(false)}
    >
      <div
        className="flex justify-center mb-3 relative"
        style={{ paddingBottom: "100%" }}
      >
        {/* Image */}
        <div
          className="absolute inset-0 cursor-pointer border rounded-lg w-full"
          style={{
            backgroundImage: `url(${images[imgIndex]})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={e => {
            e.stopPropagation();
            setEnlarged(true);
          }}
        />
        {/* Left button */}
        <motion.button
          className="absolute flex justify-center items-center border bg-white rounded-full hover:shadow-lg hover:bg-primary-100 text-primary-900"
          style={{
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
            left: `${-buttonSize / 2}px`,
            top: "50%",
            marginTop: `${-buttonSize / 2}px`,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            x: -5,
          }}
          onClick={() => paginate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={arrowSize}
            height={arrowSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </motion.button>

        {/*  Right icon */}
        <motion.button
          className="absolute flex justify-center items-center border bg-white rounded-full hover:shadow-lg hover:bg-primary-100 text-primary-900"
          style={{
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
            right: `${-buttonSize / 2}px`,
            top: "50%",
            marginTop: `${-buttonSize / 2}px`,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            x: 5,
          }}
          onClick={() => paginate(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={arrowSize}
            height={arrowSize}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectImageCarousel;
