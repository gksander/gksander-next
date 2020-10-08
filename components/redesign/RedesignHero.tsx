import * as React from "react";

export const RedesignHero: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="container p-2 flex justify-between">
        <div className="text-2xl font-bold">Grant Sander</div>
        <div>Contact</div>
      </div>
      {/* Hero container */}
      <div className="container grid grid-cols-1 sm:grid-cols-3 gap-2 px-2 pt-4 pb-8">
        <div className="col-span-1 sm:col-span-2">
          <div className="text-3xl leading-8 font-fancy">
            Dedicated to using computers and problem solving to build things
            that make lives better.
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
        <div className="grid-cols-1">Photo...</div>
      </div>
    </div>
  );
};
