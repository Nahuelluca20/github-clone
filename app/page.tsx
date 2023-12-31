import Link from "next/link";

import TopRepositories from "./components/TopRepositories";
import DetailsButton from "./components/commons/buttons/DetailsButton";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-githubDark-200">
      <TopRepositories />
      <section className="w-full ml-16 mt-4 max-w-[872px]">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xl text-githubGray-50 font-semibold">Home</h3>
          <div className="flex gap-8 items-center">
            <Link className="hover:underline text-sm text-githubBlue-50" href={"/"}>
              Send Feedback
            </Link>
            <DetailsButton />
          </div>
        </div>
      </section>
    </main>
  );
}
