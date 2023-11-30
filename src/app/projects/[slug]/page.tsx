import { getProjectsBySlug, getProjects } from "@/app/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

type projectProjectParams = {
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

export default function Page({ params }: projectProjectParams) {
  const projects = getProjects();
  const currentIndex = projects.findIndex(
    (project) => project.slug === params.slug
  );

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const renderPreviousButton = previousProject && (
    <Link href={`/projects/${previousProject.slug}`}>
      <div className="bg-white text-dark-green text-xl px-4 py-2 rounded-md cursor-pointer mr-4">
        Previous Project
      </div>
    </Link>
  );

  const renderNextButton = nextProject && (
    <Link href={`/projects/${nextProject.slug}`}>
      <div className="bg-white text-dark-green text-xl px-4 py-2 rounded-md cursor-pointer">
        Next Project
      </div>
    </Link>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full">
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg my-8 max-w-7xl w-full">
            <h1 className="text-3xl font-bold mb-4 text-dark-green">
              {project.title}
            </h1>
            <p className="text-lg mb-4 text-dark-green">{project.tagline}</p>
            <img
              src={project.main_image}
              alt={project.title}
              className="w-full h-100 object-cover mb-4 rounded-md"
            />
            <p className="text-lg mb-4 text-dark-green whitespace-pre-line">
              {project.description}
            </p>
            {project.site_URL && (
              <p className="text-lg mb-4 text-dark-green">
                Site:{" "}
                <ExternalLink href={project.site_URL}>
                  {project.site_URL}
                </ExternalLink>
              </p>
            )}
            {project.repo_URL && (
              <p className="text-lg mb-4 text-dark-green">
                Repo:{" "}
                <ExternalLink href={project.repo_URL}>
                  {project.repo_URL}
                </ExternalLink>
              </p>
            )}
            <p className="text-lg text-dark-green">
              Category: {project.category}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center my-8">
          {renderPreviousButton}
          <Link href="/projects">
            <div className="bg-white text-dark-green text-xl px-4 py-2 rounded-md cursor-pointer">
              Go Back to Projects
            </div>
          </Link>
          {renderNextButton && <div className="ml-4"></div>}
          {renderNextButton}
        </div>
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
