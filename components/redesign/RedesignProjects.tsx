import * as React from "react";

type Project = {
  title: string;
  description: string;
  link?: {
    href: string;
    title: string;
  };
};

const projects: Project[] = [
  {
    title: "ArtisanHD Configurator",
    description: `A thing`,
    link: {
      href: "https://secure.artisanhd.com",
      title: "View the live site",
    },
  },
  {
    title: "Personal PokeDex",
    description: `Details...`,
    link: {
      href: "https://github.com/gksander/gks-pokedex-gridsome",
      title: "View the source and live site",
    },
  },
  {
    title: "React Native Animation Samples",
    description: `Playground...`,
    link: {
      href: "https://github.com/gksander/react-native-animation-samples",
      title: "View the source",
    },
  },
  {
    title: "COSma Learning",
    description: `No longer in service...`,
  },
  {
    title: `LearnJS Playground`,
    description: `Pet project I never finished...`,
    link: {
      href: "https://learnjs.gksander.com/",
      title: "View the live site",
    },
  },
];

export const RedesignProjects: React.FC = () => {
  return (
    <div>
      <div className="container px-2 py-4">
        <div className="text-5xl font-thin font-fancy">Projects</div>
        <div>
          Here are some projects I've worked on either professionally or
          casually.
        </div>
        <div className="mb-4" />
        <div className="grid grid-cols-1 gap-4">
          {projects.map(proj => (
            <div key={proj.title}>
              <div className="font-bold text-lg">{proj.title}</div>
              <div className="text-gray-700">{proj.description}</div>
              {proj.link && (
                <div>
                  <a href={proj.link.href} target="_blank">
                    {proj.link.title}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
