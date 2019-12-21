import React, { useState } from "react";
import { IProject } from "./GksProjects";
import classNames from "classnames";
import ProjectImageCarousel from "./ProjectImageCarousel";

/**
 * Project row
 */
const GksProjectRow: React.FC<{ project: IProject; isLast?: boolean }> = ({
  project,
  isLast = false,
}) => {
  /**
   * Component markup
   */
  return (
    <div
      key={project.title}
      className={classNames({
        "mb-6": !isLast,
      })}
    >
      <div className="mb-3">
        <a
          className="font-bold text-primary-900 leading-tight cursor-pointer hover:underline"
          href={project.href}
          target="_blank"
          rel="noopener"
        >
          {project.title}
        </a>
        <div className="text-primary-800 leading-tight mb-2">
          {project.subtitle}
        </div>
        <div
          className="text-gray-700 mb-2"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </div>
      <ProjectImageCarousel images={project.images.map(img => img.image)} />
    </div>
  );
};

export default GksProjectRow;
