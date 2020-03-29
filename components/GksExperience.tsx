import React from "react";
import GksSectionTitle from "./GksSectionTitle";
import classNames from "classnames";

// Experience shape
interface IExperience {
  title: string;
  description: string;
  time: string;
}

/**
 * Experience section
 */
const GksExperience: React.FC = () => {
  // Experiences
  const experiences: IExperience[] = [
    {
      title: "Senior Software Engineer @ Synapse Studios",
      description: `Full-stack web and mobile development using React, React Native, and Node.js.`,
      time: `Jan. 2020 &ndash; Current`
    },
    {
      title: "Senior Software Engineer @ Henri Home",
      description: `Full-stack web and mobile development using React Native, Vue.JS, and Ruby on Rails.`,
      time: `Sept. 2019 &ndash; Jan. 2020`,
    },
    {
      title: `Software Engineer @ Artisan Colour`,
      description: `Full-stack web development using Vue.js, NodeJS, MongoDB, and Nginx. Development and deployment of custom eCommerce sites. Building custom tools to streamline internal functions.`,
      time: `Aug. 2018 &ndash; Sept. 2019`,
    },
    {
      title: `Software Engineer @ COSma Learning`,
      description: `Site development and deployment of cosmalearning.com. Development, coding, and maintenance of online math curriculum. Used PHP, MySQL, and JavaScript to build custom online courseware.`,
      time: `Jan. 2016 &ndash; Aug. 2018`,
    },
    {
      title: `Math Instructor @ Arizona State University`,
      description: `Taught precalculus and courses for future math teachers, lead many professional development workshops for university instructors. Research and development of math curriculum.`,
      time: `May 2014 &ndash; Jan. 2016`,
    },
  ];

  /**
   * Component markup
   */
  return (
    <div className="p-5">
      {/* Title */}
      <GksSectionTitle
        title="Experience"
        subtitle="Where I've been."
        id="experience"
      />
      <div>
        {experiences.map((exp, i) => (
          <div
            key={exp.title}
            className={classNames({
              "mb-5": i !== experiences.length - 1,
            })}
          >
            <div className="flex flex-wrap mb-1">
              <div className="flex-grow font-bold text-primary-900">
                {exp.title}
              </div>
              <div
                className="w-full sm:w-auto sm:pl-4 text-primary-800"
                dangerouslySetInnerHTML={{ __html: exp.time }}
              />
            </div>
            <div className="text-gray-700">{exp.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GksExperience;
