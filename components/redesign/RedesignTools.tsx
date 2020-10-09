import * as React from "react";
import { NodeLogo, ReactLogo, RubyLogo, TsLogo, VueLogo } from "./Logos";

type Tool = {
  title: string;
  Component: typeof TsLogo;
  alt: string;
};

const tools: Tool[] = [
  {
    title: "Ruby & Rails",
    Component: RubyLogo,
    alt: "Ruby logo",
  },
  {
    title: "Node.js",
    Component: NodeLogo,
    alt: "Node logo",
  },
  {
    title: "TypeScript",
    Component: TsLogo,
    alt: "TypeScript logo",
  },
  {
    title: "React",
    Component: ReactLogo,
    alt: "React logo",
  },
  {
    title: "Vue.js",
    Component: VueLogo,
    alt: "Vue.js logo",
  },
];

export const RedesignTools: React.FC = () => {
  return (
    <div>
      <div className="container max-w-5xl px-2 py-10">
        <div className="text-5xl font-thin font-fancy">Tools</div>
        <div className="text-gray-600 leading-snug max-w-2xl">
          My expertise is in full-stack web and mobile development, primarily
          using <span className="text-primary-700">TypeScript and React</span>.
          I have experience using both Ruby on Rails and various{" "}
          <span className="text-primary-700">Node.js</span> frameworks for
          building backends, and have frontend experience with both React.js and
          Vue.js. My mobile experience is with{" "}
          <span className="text-primary-700">React Native</span>.
        </div>
        <div className="mb-6" />
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-5 gap-3 w-full max-w-3xl">
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
                    <div className="absolute inset-0 rounded-lg shadow-lg overflow-hidden floating">
                      <tool.Component />
                    </div>
                  </div>
                  <div className="mb-2" />
                  <div className="font-bold text-gray-700 text-center hidden sm:block">
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
