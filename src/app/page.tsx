import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <div className="flex flex-col items-center justify-center w-2/3 bg-white p-8 rounded-lg">
        <Image
          src="/profile-pic.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mb-4"
        />
        <p className="text-center text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="mt-8">
        <Link href="/projects">
          <div className="bg-white text-black px-4 py-2 rounded-md">
            Go to Projects
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
