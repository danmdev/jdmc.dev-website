import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  const techStack = [
    {
      name: "HTML5",
      icon: "/technologies/html.svg",
    },
    {
      name: "CSS3",
      icon: "/technologies/css3.svg",
    },
    {
      name: "JavaScript",
      icon: "/technologies/js.svg",
    },
    {
      name: "TypeScript",
      icon: "/technologies/typescript.svg",
    },
    {
      name: "React",
      icon: "/technologies/react.svg",
    },
    {
      name: "Next.js",
      icon: "/technologies/nextjs.svg",
    },
    {
      name: "Node.js",
      icon: "/technologies/nodejs.svg",
    },
    {
      name: "Angular",
      icon: "/technologies/angular.svg",
    },
    {
      name: "Laravel",
      icon: "/technologies/laravel.png",
    },
    {
      name: "Tailwind CSS",
      icon: "/technologies/tailwindcss.svg",
    },
    {
      name: "MySQL",
      icon: "/technologies/mysql.svg",
    },
  ];

  return (
    <>
      <Navbar />
      <section id="home">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div className="flex flex-col items-center justify-center md:w-full flex-1 md:px-20 px-4 text-center">
            <Image
              src="/developer.png"
              alt="developer"
              width={200}
              height={200}
            />
            <h1 className="text-6xl font-bold">
              Hi, Im <span className="text-blue-600">Daniel Moo</span>
            </h1>
            <p className="mt-3 text-2xl">
              Im a Full Stack Developer from Mexico. I am passionate about
              building web applications and learning new technologies.
              <br />
            </p>
            <p className="text-gray-500 mt-2 text-2xl">
              I am available to collaborate on your project.{" "}
              <a href="mailto:contact@jdmc.dev" className="text-blue-600">
                contact@jdmc.dev
              </a>
            </p>
          </div>
          <div>
            <Link href="https://github.com/srdaniiel">
              <AiFillGithub className="text-6xl cursor-pointer hover:text-gray-900" />
            </Link>
          </div>
        </div>
      </section>
      {/* Tech stack */}
      <section className="bg-gray-50" id="about">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div className="flex flex-col items-center justify-center md:w-full flex-1 md:px-20 px-4 text-center">
            <h1 className="text-6xl font-bold">Tech Stack</h1>
            <p className="mt-3 text-2xl">
              I have experience working with the following technologies
            </p>
            <p className="text mt-2 max-w-6xl">
              As a Junior Full Stack Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and more. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
            <div className="flex flex-wrap justify-center mt-5 gap-12 items-center select-none">
              {techStack.map((tech, i) => (
                <div className="m-2" key={i}>
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className=""
                    draggable={false}
                  />
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </section>
      {/* My projects list */}
      <section >
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div className="flex flex-col items-center justify-center md:w-full flex-1 md:px-20 px-4 text-center">
            <h1 className="text-6xl font-bold text-center" id="projects">Portafolio</h1>
            <p className="mt-3 text-2xl">
              Here are some of my recent projects:
            </p>
            <Projects />
          </div>
        </div>
      </section>
    </>
  );
}
