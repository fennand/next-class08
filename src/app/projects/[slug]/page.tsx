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
  const project = getProjectsBySlug(params.slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 text-white">
      <div className="w-full md:w-2/3 lg:w-2/3">
        <div className="flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg my-8 w-full mt-48">
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
          <Link href="/projects">
            <div className="bg-white text-dark-green text-xl px-4 py-2 rounded-md cursor-pointer">
              Go Back to Projects
            </div>
          </Link>
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
