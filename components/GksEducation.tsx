import React from "react";
import GksSectionTitle from "./GksSectionTitle";
import AsuLogo from "../assets/img/asu.png";
import classNames from "classnames";

// Degrees
interface IDegree {
  title: string;
  from: string;
  description: string;
  image: string;
}

/**
 * Education section
 */
const GksEducation: React.FC = () => {
  // Degrees
  const degrees: IDegree[] = [
    {
      title: `M.A. Mathematics`,
      from: `Arizona State University`,
      description: `4.0 GPA. Focus on theoretical mathematics, math instruction.`,
      image: AsuLogo,
    },
    {
      title: `B.S. Mathematics`,
      from: `Arizona State University`,
      description: `4.0 GPA. Focus on theoretical and computational mathematics.`,
      image: AsuLogo,
    },
  ];

  /**
   * Component markup
   */
  return (
    <div className="p-5">
      <GksSectionTitle
        title="Education"
        subtitle="My educational background."
        id="education"
      />
      {degrees.map((degree, i) => (
        <div
          key={degree.title}
          className={classNames("flex -mx-2", {
            "mb-6": i !== degrees.length - 1,
          })}
        >
          <div className="px-2 flex-none hidden sm:block">
            <div className="shadow rounded-lg p-2 w-12 h-12">
              <img src={degree.image} alt="Degree logo" className="w-full" />
            </div>
          </div>
          <div className="flex-grow px-2">
            <div className="font-bold text-primary-900 leading-tight">
              {degree.title}
            </div>
            <div className="text-primary-800 leading-tight mb-2">
              {degree.from}
            </div>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: degree.description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GksEducation;
