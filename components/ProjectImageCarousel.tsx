import React, { useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

// Motion variants
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

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
        className="flex justify-center mb-3 relative border rounded-lg w-full"
        style={{ paddingBottom: "100%" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Image */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currIndex}
              className="absolute inset-0 cursor-pointer"
              style={{
                backgroundImage: `url(${images[imgIndex]})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 200 },
                opacity: { duration: 0.2 },
              }}
            />
          </AnimatePresence>
        </div>

        {/* Left button */}
        <motion.button
          className="absolute flex justify-center items-center border bg-white rounded-full hover:shadow-lg hover:bg-primary-100 text-primary-900 z-10"
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
            x: 5,
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
          className="absolute flex justify-center items-center border bg-white rounded-full hover:shadow-lg hover:bg-primary-100 text-primary-900 z-10"
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
            x: -5,
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
