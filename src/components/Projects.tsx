import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface ProjectItemProps {
  name: string;
  description: string;
  image: string;
  url: string;
  technologies: {
    name: string;
    icon: string;
  }[];
}

export type ProjectListProps = ProjectItemProps[];

const Projects = () => {
  const list: ProjectListProps = [
    {
      name: "Samp Hosted",
      description:
        "Sitio web de reventa de espacios en la lista maestra de servidores de SA-MP (San Andreas Multiplayer).",
      image: "/projects/samphosted.png",
      url: "https://samphosted.com",
      technologies: [
        {
          name: "Next.js",
          icon: "/technologies/nextjs.svg",
        },
        {
          name: "Laravel",
          icon: "/technologies/laravel.svg",
        },
      ],
    },
    {
      name: "Mercado de Vivienda",
      description:
        "Sitio web para la publicación de ofertas de inmuebles, así como la búsqueda de los mismos. Incluye geolocalización y filtros precisos para una fácil navegación. Incluye tambien un panel de control y sistema de facturación CFDI.",
      image: "/projects/mercadodevivienda.png",
      url: "https://mercadodevivienda.com",
      technologies: [
        {
          name: "Angular",
          icon: "/technologies/angular.svg",
        },
        {
          name: "Laravel",
          icon: "/technologies/laravel.svg",
        },
      ],
    },
    {
      name: "EnvSoft",
      description:
        "Landing page para la empresa de desarrollo de software EnvSoft. Incluye un formulario de contacto y un chat en vivo.",
      image: "/projects/envsoft.png",
      url: "https://envsoft.mx",
      technologies: [
        {
          name: "Next.js",
          icon: "/technologies/nextjs.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "/technologies/tailwindcss.svg",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto mt-5 max-w-4xl flex flex-col gap-4">
      {list.map((item, index) => (
        <div key={index}>
          <ProjectItem {...item} />
        </div>
      ))}
    </div>
  );
};

export function ProjectItem(project: ProjectItemProps) {
  return (
    <>
      <div className="grid md:grid-cols-2 border rounded-xl shadow-lg px-2 py-4 items-center gap-2">
        <div className="">
          <Image
            src={project.image}
            alt={project.name}
            width={500}
            height={500}
            className="rounded-md shadow-sm"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{project.name}</h1>
          <p className="text-md">{project.description}</p>
          <div className="flex flex-wrap justify-center mt-5 gap-12 items-center select-none">
            {project.technologies.map((tech, i) => (
              <div key={i} className="flex flex-col items-center">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={38}
                  height={38}
                  className=""
                  priority
                  title={tech.name}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-3">
            <Link
              href={project.url}
              target="_blank"
              className="flex flex-row items-center text-sm gap-2 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-50 shadow-sm"
            >
              <FiExternalLink className="text-2xl cursor-pointer" />
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
