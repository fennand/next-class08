import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-24 text-white relative"
      /* style={{ backgroundColor: "#020015" }} */
    >
      <div className="wrapper maintext mb-8 w-full md:w-2/3">
        <div className="type">
          <h1 className="typing">Andrew Fennell&apos;s Portfolio</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-2/3 bg-white p-8 pt-36 rounded-lg relative z-10">
        <Image
          src="/profile-pic (1).png"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mb-4 absolute -top-1/4"
        />
        <h2 className="text-center text-dark-green text-4xl md:text-4xl lg:text-5xl">
          Welcome to my portfolio
        </h2>
        <br></br>
        <p className="text-center text-dark-green text-xl">
          I have only recently started on a career in the tech industry (I was
          late to the party), after working in the Criminal Justice system for
          most of my working life. I have now made the leap to become a
          full-stack web developer, having undertaken an apprenticeship (Level 4
          Web Development) and a coding bootcamp (with Tech Educators).
        </p>
        <br></br>
        <p className="text-center text-dark-green text-xl">
          So please take a look at the projects I have been involved in so far.
        </p>
      </div>
      <div className="mt-8 flex items-center space-x-4">
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
          <div className="bg-white text-dark-green text-xl px-4 py-2 mx-5 rounded-md cursor-pointer">
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
