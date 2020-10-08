import * as React from "react";
import cssImg from "../../assets/img/css.png";
import tsImg from "../../assets/img/ts.png";
import reactImg from "../../assets/img/react.png";
import vueImg from "../../assets/img/vue.png";
import nodeImg from "../../assets/img/node.png";
import rubyImg from "../../assets/img/rails.png";

type Tool = {
  title: string;
  image: string;
  alt: string;
};

const tools: Tool[] = [
  {
    title: "Ruby on Rails",
    image: rubyImg,
    alt: "Ruby logo",
  },
  {
    title: "Node.js",
    image: nodeImg,
    alt: "Node logo",
  },
  {
    title: "TypeScript",
    image: tsImg,
    alt: "TypeScript logo",
  },
  {
    title: "React",
    image: reactImg,
    alt: "React logo",
  },
  {
    title: "Vue.js",
    image: vueImg,
    alt: "Vue.js logo",
  },
];

export const RedesignTools: React.FC = () => {
  return (
    <div>
      <div className="container p-2">
        <div className="text-4xl font-fancy">Tools</div>
        <div className="text-gray-600 leading-snug">
          My expertise is in full-stack web and mobile development, primarily
          using <span className="text-primary-700">TypeScript and React</span>.
          I have experience using both Ruby on Rails and various{" "}
          <span className="text-primary-700">Node.js</span>
          frameworks for building backends, and have frontend experience with
          both React.js and Vue.js. My mobile experience is with{" "}
          <span className="text-primary-700">React Native</span>.
        </div>
        <div className="mb-4" />
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 w-1/2 sm:w-full">
            {tools.map((tool, i) => {
              const scale = {
                0: 0.7,
                1: 0.85,
                2: 1,
                3: 0.85,
                4: 0.7,
              }[i];

              return (
                <div key={tool.title} style={{ transform: `scale(${scale})` }}>
                  <div className="relative" style={{ paddingBottom: "100%" }}>
                    <div className="absolute inset-0">
                      <img
                        src={tool.image}
                        alt={tool.alt}
                        className="w-full h-full shadow-lg rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="mb-2" />
                  <div className="font-bold text-gray-700 text-center">
                    {tool.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
