import React from "react";
import GksSectionTitle from "./GksSectionTitle";

/**
 * Background section
 */
const GksBackground: React.FC = () => (
  <div className="p-5 mt-5">
    {/* Title */}
    <GksSectionTitle
      title="Background"
      subtitle="A little about me."
      id="background"
    />
    <div className="text-gray-700">
      <p className="mb-3">
        I'm "formally" trained as a mathematician - however, I quickly fell in
        love with the utility of software engineering. Being able to turn an
        idea into reality is a great feeling! I now spend my professional time,
        and fair bit of my personal time, using a computer to create useful
        things.
      </p>
      <p>
        My forte is in full-stack web development (and mobile development using
        React Native), but I'm not afraid of learning new things. I focus on
        using JavaScript tooling to create data-driven applications.
      </p>
    </div>
  </div>
);

export default GksBackground;
