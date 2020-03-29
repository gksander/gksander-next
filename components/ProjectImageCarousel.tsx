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
const ProjectImageCarousel: React.FC<{
  images: string[];
}> = ({ images }) => {
  // Local state
  const [direction, setDirection] = useState<0 | -1 | 1>(0);
  const [currIndex, setCurrIndex] = useState<number>(0);

  // Sizing/index
  const arrowSize = 18;
  const n = images.length;
  const imgIndex = ((currIndex % n) + n) % n;

  // Pagination
  const paginate = (dir: -1 | 1) => {
    setDirection(dir);
    setCurrIndex(oldIndex => oldIndex + dir);
  };

  const onThumbnailClick = (i: number) => {
    setDirection(i < imgIndex ? -1 : 1);
    setCurrIndex(i);
  };

  return (
    <div className="flex flex-wrap -mx-2">
      {/* Thumbnail */}
      <div
        className={classNames([
          "p-2",
          "w-full",
          "sm:w-1/6",
          "order-1",
          "sm:order-0",
          "flex",
          // Small screens
          "-mx-1",
          // Larger screens
          "sm:-my-1",
          "sm:flex-col",
        ])}
      >
        {images.map((img, i) => (
          <div key={img} className="w-1/4 sm:w-full px-1 sm:py-1">
            <motion.div
              className={classNames("w-full rounded cursor-pointer", {
                border: i !== imgIndex,
                "border-2": i === imgIndex,
                "border-primary-800": i === imgIndex,
              })}
              style={{
                paddingBottom: "100%",
                backgroundImage: `url(${img})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 1,
                borderRadius: "50%",
                rotate: 4,
              }}
              onClick={() => onThumbnailClick(i)}
            />
          </div>
        ))}
      </div>
      <div className="p-2 w-full sm:w-5/6 order-0 sm:order-1">
        <motion.div>
          <div
            className="flex justify-center mb-3 relative border rounded-lg w-full"
            style={{ paddingBottom: "66%" }}
          >
            <div className="absolute inset-0 overflow-hidden">
              {/* Image */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currIndex}
                  className="absolute inset-0"
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
                  // drag="x"
                  // dragConstraints={{ left: 0, right: 0 }}
                  // dragElastic={1}
                  // onDragEnd={(e, { offset, velocity }) => {
                  //   const swipe = swipePower(offset.x, velocity.x);
                  //
                  //   if (swipe < -swipeConfidenceThreshold) {
                  //     paginate(1);
                  //   } else if (swipe > swipeConfidenceThreshold) {
                  //     paginate(-1);
                  //   }
                  // }}
                />
              </AnimatePresence>
            </div>

            {/* Left button */}
            <div className="absolute inset-y-0 left-0 flex justify-center items-center px-1">
              <motion.button
                className="flex justify-center items-center border bg-white rounded-full hover:shadow-lg text-primary-900 z-10 w-10 h-10"
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{
                  x: 5,
                }}
                onClick={() => paginate(-1)}
                aria-label="Previous"
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
            </div>

            {/*  Right icon */}
            <div className="absolute inset-y-0 right-0 flex justify-center items-center px-1">
              <motion.button
                className="flex justify-center items-center border bg-white rounded-full hover:shadow-lg text-primary-900 z-10 w-10 h-10"
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{
                  x: -5,
                }}
                onClick={() => paginate(1)}
                aria-label="Next"
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectImageCarousel;

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
