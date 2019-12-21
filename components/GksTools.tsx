import React from "react";
import GksSectionTitle from "./GksSectionTitle";
import HtmlImg from "../assets/img/html.png";
import cssImg from "../assets/img/css.png";
import tsImg from "../assets/img/ts.png";
import reactImg from "../assets/img/react.png";
import vueImg from "../assets/img/vue.png";
import nodeImg from "../assets/img/node.png";
import rubyImg from "../assets/img/rails.png";
import graphqlImg from "../assets/img/graphql.png";
import classNames from "classnames";

// Tool interface
interface ITool {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

/**
 * Tools section
 * @constructor
 */
const GksTools: React.FC = () => {
  // Tools
  const tools: ITool[] = [
    {
      title: "HTML",
      subtitle: "HTML and various templating languages.",
      image: HtmlImg,
      alt: "HTML Logo",
    },
    {
      title: "CSS",
      subtitle: `CSS, SASS, TailwindCSS, and Bootstrap.`,
      image: cssImg,
      alt: "CSS Logo",
    },
    {
      title: "JavaScript & TypeScript",
      subtitle: `JavaScript and TypeScript.`,
      image: tsImg,
      alt: "TypeScript Logo",
    },
    {
      title: "React.js",
      subtitle: `React, React Native, Redux, React Router, Next.js.`,
      image: reactImg,
      alt: "React Logo",
    },
    {
      title: "Vue.js",
      subtitle: `Vue, Vuex, Vue Router, Nuxt.js, Gridsome, Vuetify.`,
      image: vueImg,
      alt: "Vue Logo",
    },
    {
      title: "Node.js",
      subtitle: `Node.js, MongoDB & Mongoose, Express, Strapi.`,
      image: nodeImg,
      alt: "Node Logo",
    },
    {
      title: "Ruby on Rails",
      subtitle: `Ruby on Rails, PostgreSQL, Devise, and CanCan.`,
      image: rubyImg,
      alt: "Rails Logo",
    },
    {
      title: "GraphQL",
      subtitle: `GraphQL-Ruby, Apollo Client, and Vue Apollo.`,
      image: graphqlImg,
      alt: "GraphQL Logo",
    },
  ];

  return (
    <div className="p-5">
      <GksSectionTitle
        title="Preferred Tools"
        subtitle="Tools I like and regularly use."
        id="tools"
      />
      {tools.map((tool, i) => (
        <div
          key={tool.title}
          className={classNames("flex -mx-2 items-center", {
            "mb-4": i !== tools.length - 1,
          })}
        >
          <div className="px-2 flex-none hidden sm:block">
            <div className="shadow rounded-lg p-2 w-12 h-12">
              <img src={tool.image} alt={tool.alt} className="w-full" />
            </div>
          </div>
          <div className="flex-grow px-2">
            <div className="font-bold text-primary-900 leading-tight">
              {tool.title}
            </div>
            <div className="text-primary-800 leading-tight">
              {tool.subtitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GksTools;
