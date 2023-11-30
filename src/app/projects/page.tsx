import Link from "next/link";
import { getProjects } from "../lib/projects";

export default function Page() {
  const projects = getProjects();
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex flex-col items-center w-3/4 bg-white p-8 rounded-lg">
        <div className="wrapper project-text mb-8">
          <div className="type">
            <h1 className="typing">Projects</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project) => (
            <div key={project.slug} className="p-4 border rounded-md">
              <Link href={`/projects/${project.slug}`}>
                <div style={{ cursor: "pointer" }}>
                  <img
                    src={project.card_image}
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h2 className="text-xl font-bold text-dark-green">
                    {project.title}
                  </h2>
                  <p className="text-gray-600">{project.tagline}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/">
            <div className="bg-dark-green text-white text-xl px-4 py-2 rounded-md cursor-pointer">
              Go Home
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
