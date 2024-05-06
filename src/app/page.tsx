import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 text-white relative">
      <h1 className="text-center text-dark-green text-4xl md:text-4xl lg:text-7xl mb-8">
        Andrew Fennell
      </h1>
      <div className="w-full md:w-2/3 lg:w-2/3 bg-white p-8 rounded-lg relative z-10 border-2 border-dark-green">
        <h2 className="text-center text-dark-green text-4xl md:text-4xl lg:text-4xl mb-8">
          Welcome to my portfolio
        </h2>
        <div className="max-w-screen mx-auto">
          {" "}
          {/* Added div for responsive width */}
          <div className="flex justify-center mb-8 w-18 h-18 md:w-12 md:h-12 lg:w-72 lg:h-72 mx-auto">
            <Image
              src="/pfp3.png"
              alt="Profile Picture"
              width={400}
              height={400}
            />
          </div>
          <p className="text-center text-dark-green text-xl">
            Over the past few years I started on a career in the tech industry
            (I was late to the party), after working in the Criminal Justice
            system for most of my working life. I have now made the leap to
            become a full-stack web developer, having undertaken an
            apprenticeship (Level 4 Web Development, including 18 month work
            placement with an IT outsourcing company) and a coding bootcamp
            (with Tech Educators).
          </p>
          <br />
          <p className="text-center text-dark-green text-xl">
            So please take a look at the projects I have been involved in so
            far, and also check out my{" "}
            <a
              href="/Andrew Fennell - CV Full Stack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              CV
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/andrew-fennell-a2a081283/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/LI-In-Bug1.png"
            alt="LinkedIn Icon"
            title="LinkedIn"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </a>

        <Link href="/projects">
          <div className="bg-dark-green text-white text-xl px-4 py-2 rounded-md cursor-pointer">
            Go to Projects
          </div>
        </Link>

        <a
          href="https://github.com/fennand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github-mark.png"
            alt="GitHub Icon"
            title="GitHub"
            width={45}
            height={45}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </a>
      </div>
    </main>
  );
};

export default Home;
