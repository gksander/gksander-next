import React from "react";
import GksSectionTitle from "./GksSectionTitle";
// Images
import HDImage1 from "../assets/img/projects/artisanhd-1.jpg";
import HDImage2 from "../assets/img/projects/artisanhd-2.jpg";
import HDImage3 from "../assets/img/projects/artisanhd-3.jpg";
import HDImage4 from "../assets/img/projects/artisanhd-4.jpg";
// Pokedex
import PokedexImg1 from "../assets/img/projects/pokedex-1.jpg";
import PokedexImg2 from "../assets/img/projects/pokedex-2.jpg";
import PokedexImg3 from "../assets/img/projects/pokedex-3.jpg";
import PokedexImg4 from "../assets/img/projects/pokedex-4.jpg";
// Eulogybooks
import EbImg1 from "../assets/img/projects/eulogybooks-1.jpg";
import EbImg2 from "../assets/img/projects/eulogybooks-2.jpg";
import EbImg3 from "../assets/img/projects/eulogybooks-3.jpg";
// Cosma
import CosmaImg1 from "../assets/img/projects/cosma-1.jpg";
import CosmaImg2 from "../assets/img/projects/cosma-2.jpg";
import CosmaImg3 from "../assets/img/projects/cosma-3.jpg";
// MathCode
import MathCodeImg1 from "../assets/img/projects/mathcode-1.jpg";
import MathCodeImg2 from "../assets/img/projects/mathcode-2.jpg";
import ProjectImageCarousel from "./ProjectImageCarousel";
import GksProjectRow from "./GksProjectRow";

// Projects interface
export interface IProject {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  images: {
    image: string;
    alt: string;
  }[];
}

/**
 * Project info
 */
const GksProjects: React.FC = () => {
  // Projects
  const projects: IProject[] = [
    // Artisan HD
    {
      title: "ArtisanHD Configurator",
      subtitle: `eCommerce site for custom prints.`,
      description: `Custom eCommerce site built on Vue, Nuxt, Vuetify, Node, and MongoDB. Features live preview and 3D rendering of custom products.`,
      href: `https://secure.artisanhd.com`,
      images: [
        {
          image: HDImage1,
          alt: "HD Image 1",
        },
        {
          image: HDImage2,
          alt: "HD Image 2",
        },
        {
          image: HDImage3,
          alt: "HD Image 3",
        },
        {
          image: HDImage4,
          alt: "HD Image 4",
        },
      ],
    },
    // Pokedex
    {
      title: "Personal PokeDex",
      subtitle: `Static site with over 700 optimized pages.`,
      description: `Side project using Gridsome.js to generate a static site full of Pokemon information. Parses Pokemon data from CSV into a GraphQL data layer and generates highly-optimized pages for each. Pulls colors from each monster to generate gradient backgrounds.`,
      href: `https://pokedex.gksander.com`,
      images: [
        {
          image: PokedexImg1,
          alt: "Pokedex homepage",
        },
        {
          image: PokedexImg2,
          alt: "Pokemon homepage, light version",
        },
        {
          image: PokedexImg3,
          alt: "Pokemon detail",
        },
        {
          image: PokedexImg4,
          alt: "Pokemon Type details"
        }
      ],
    },
    // Eulogybooks
    {
      title: "EulogyBooks",
      subtitle: `eCommerce site for "Eulogy Books`,
      description: `Collaborative site where users upload photos to a shared "book" that is programmatically generated. Built on Vue, Nuxt, Vuetify, Node, and MongoDB.`,
      href: `https://make.eulogybooks.com`,
      images: [
        {
          image: EbImg1,
          alt: "Alt 1..",
        },
        {
          image: EbImg2,
          alt: "Alt 2..",
        },
        {
          image: EbImg3,
          alt: "Alt 3..",
        },
      ],
    },
    // COSma
    {
      title: "COSma Learning",
      subtitle: `Online math courseware.`,
      description: `Custom online math courseware. Built on top of IMathAS, using Vue, PHP, and MySQL. Features interactive lessons, homework, and assessments.`,
      href: `https://cosmalearning.com`,
      images: [
        {
          image: CosmaImg1,
          alt: "Alt 1...",
        },
        {
          image: CosmaImg2,
          alt: "Alt 2...",
        },
        {
          image: CosmaImg3,
          alt: "Alt 3...",
        },
      ],
    },
    // MathCode
    {
      title: "MathCode",
      subtitle: `Online math/JavaScript Tutorials`,
      description: `Interactive tutorials for math and JavaScript. Built with Vue, Nuxt, and Bulma. Features live coding samples.`,
      href: `https://mathcode.cosmalearning.com`,
      images: [
        {
          image: MathCodeImg1,
          alt: "Alt 1...",
        },
        {
          image: MathCodeImg2,
          alt: "Alt 2...",
        },
      ],
    },
  ];

  /**
   * Component
   */
  return (
    <div className="p-5">
      <GksSectionTitle
        title="Projects"
        subtitle="Some projects I've worked on."
        id="projects"
      />
      {projects.map((project, i) => (
        <GksProjectRow
          project={project}
          isLast={i === projects.length - 1}
          key={project.title}
        />
      ))}
    </div>
  );
};

export default GksProjects;
