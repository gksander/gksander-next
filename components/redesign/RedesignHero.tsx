import * as React from "react";
import "./RedesignHero.module.css";
import { HeartIcon } from "./HeartIcon";

export const RedesignHero: React.FC = () => {
  return (
    <div className="hero">
      {/* Header */}
      <div className="container max-w-5xl p-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Grant Sander</div>
        <a
          className="block flex text-gray-700 rounded px-2 py-10 cursor-pointer hover:bg-gray-300 hover:text-primary-700 transition-colors duration-200"
          href="#getintouch"
        >
          <HeartIcon width={12} />
          <span className="ml-2">Follow me</span>
        </a>
      </div>
      {/* Hero container */}
      <div className="container max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-2 px-2 pt-4 items-end">
        <div className="col-span-1 sm:col-span-2 pb-10">
          <div className="text-3xl leading-8 font-fancy">
            I like using computers and problem solving to build things that make
            lives better.
          </div>
          <div className="mb-4" />
          <div className="text-gray-600 leading-5">
            <p className="mb-3">
              My formal background is in mathematics, but I quickly fell in love
              with the utility of software engineering. Being able to turn an
              idea into reality is a great feeling, and I'm infatuated with
              using computers to create useful things. I'm also a sucker for
              nice design.
            </p>
            <p>
              My forte is in full-stack web development (and mobile development
              using React Native), but I'm not afraid of learning new things. My
              focus is on using JavaScript tooling to create data-driven
              applications.
            </p>
          </div>
        </div>
        <div className="grid-cols-1 flex justify-center">
          <img
            src={require("../../assets/img/headshot-transparent.png")}
            alt="Headshot of Grant"
            className="w-1/2 sm:w-full headshot transition-all duration-300 h-auto"
          />
        </div>
      </div>
    </div>
  );
};
