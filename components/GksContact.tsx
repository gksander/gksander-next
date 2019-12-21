import React from "react";
import classNames from "classnames";
import GksSectionTitle from "./GksSectionTitle";
import emailImg from "../assets/img/gmail.png";
import linkedinImg from "../assets/img/linkedin.png";
import githubImg from "../assets/img/github.png";
import twitterImg from "../assets/img/twitter.png";
import devtoImg from "../assets/img/devto.png";

// Link interface
interface ILink {
  title: string;
  subtitle: string;
  href: string;
  image: string;
}

/**
 * Contact info
 */
const GksContact: React.FC = () => {
  // Links
  const links: ILink[] = [
    {
      title: "gksander93@gmail.com",
      subtitle: "By email",
      href: "mailto:gksander93@gmail.com",
      image: emailImg,
    },
    {
      title: "linkedin.com/in/gksander",
      subtitle: "On LinkedIn",
      href: "https://www.linkedin.com/in/gksander/",
      image: linkedinImg,
    },
    {
      title: "github.com/gksander",
      subtitle: "On GitHub",
      href: "https://github.com/gksander",
      image: githubImg,
    },
    {
      title: "twitter.com/gksander93",
      subtitle: "On Twitter",
      href: "https://twitter.com/gksander93",
      image: twitterImg,
    },
    {
      title: "dev.to/gksander",
      subtitle: "On Dev.to",
      href: "https://dev.to/gksander",
      image: devtoImg,
    },
  ];

  /**
   * Component markup
   */
  return (
    <div className="p-5">
      <GksSectionTitle
        title="Projects"
        subtitle="Some projects I've worked on."
        id="projects"
      />
      {links.map((link, i) => (
        <div
          key={link.title}
          className={classNames("flex -mx-2 items-center", {
            "mb-4": i !== links.length - 1,
          })}
        >
          <div className="px-2 flex-none hidden sm:block">
            <div className="shadow rounded-lg p-2 w-12 h-12">
              <img src={link.image} alt="Social logo" className="w-full" />
            </div>
          </div>
          <div className="flex-grow px-2">
            <a
              className="font-bold text-primary-900 leading-tight cursor-pointer hover:underline"
              href={link.href}
              target="_blank"
              rel="noopener"
            >
              {link.title}
            </a>
            <div className="text-primary-800 leading-tight">
              {link.subtitle}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GksContact;
