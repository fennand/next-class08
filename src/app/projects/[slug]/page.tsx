import { getProjectsBySlug, getProjects } from "@/app/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

type ProjectParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => {
    return { slug: project.slug };
  });
}

export default function ProjectPage({ params }: ProjectParams) {
  const projects = getProjects();
  const projectIndex = projects.findIndex(
    (project) => project.slug === params.slug
  );

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const { skills } = project;

  // Logic to determine the next project
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 text-white">
      <div className="w-full md:w-2/3 lg:w-2/3">
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg my-8 w-full mt-2 border-2 border-dark-green">
            <h1 className="text-3xl font-bold mb-4 text-dark-green">
              {project.title}
            </h1>
            <p className="text-lg mb-4 text-dark-green">{project.tagline}</p>
            <img
              src={project.main_image}
              alt={project.title}
              className="w-full h-100 object-cover mb-4 rounded-md"
            />
            <div className="text-lg mb-4 text-dark-green">
              <strong>Skills:</strong>{" "}
              {skills &&
                skills.split(",").map((skill, index) => {
                  // Map each skill to its corresponding color
                  const skillColorMap: { [key: string]: string } = {
                    Javascript: "text-yellow-500 bg-yellow-100",
                    Figma: "text-purple-500 bg-purple-100",
                    HTML: "text-orange-500 bg-orange-100",
                    CSS: "text-blue-500 bg-blue-100",
                    APIs: "text-black-500 bg-gray-300",
                    MongoDB: "text-green-500 bg-green-100",
                    React: "text-cyan-500 bg-cyan-100",
                    Express: "text-gray-300 bg-black",
                    Eleventy: "text-gray-300 bg-black",
                  };

                  // Get the color for the current skill
                  const colors = skillColorMap[skill.trim()];

                  return (
                    <span
                      key={index}
                      className={`inline-block px-2 py-1 rounded-md mr-2 mb-2 ${colors}`}
                    >
                      {skill.trim()}
                    </span>
                  );
                })}
            </div>

            <p className="text-lg mb-4 text-dark-green whitespace-pre-line">
              {project.description.split("\n").map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph.startsWith("Overview") ||
                  paragraph.startsWith("Aims") ? (
                    <strong>{paragraph}</strong>
                  ) : (
                    <>{paragraph}</>
                  )}
                  <br />
                </React.Fragment>
              ))}
            </p>
            {project.site_URL && (
              <p className="text-lg mb-4 text-dark-green">
                <strong>Site:</strong>{" "}
                <ExternalLink href={project.site_URL}>
                  {project.site_URL}
                </ExternalLink>
              </p>
            )}
            {project.repo_URL && (
              <p className="text-lg mb-4 text-dark-green">
                <strong>Repo:</strong>{" "}
                <ExternalLink href={project.repo_URL}>
                  {project.repo_URL}
                </ExternalLink>
              </p>
            )}
            <p className="text-lg text-dark-green">
              <strong>Category:</strong> {project.category}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-8">
        {/* Go Back to Projects button */}
        <Link href="/projects">
          <div className="bg-dark-green text-white text-xl px-4 py-2 rounded-md cursor-pointer mr-4">
            Go Back to Projects
          </div>
        </Link>
        {/* Next Project button */}
        {nextProject && (
          <Link href={`/projects/${nextProject.slug}`}>
            <div className="bg-dark-green text-white text-xl px-4 py-2 rounded-md cursor-pointer">
              Next Project
            </div>
          </Link>
        )}
      </div>
    </main>
  );
}

// Custom component to handle external links
interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
