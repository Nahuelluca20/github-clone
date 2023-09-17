import BookSvg from "assets/book.svg";

import LinkGreenButton from "./components/commons/buttons/LinkGreenButton";
import SearchRepository from "./components/commons/inputs/SearchRepository";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between bg-githubDark-200">
      <aside className="border-r border-githubGray-150 py-4 px-6 bg-githubDark-100">
        <h2 className="text-sm mb-2 text-githubGray-50  items-center font-bold flex gap-24 mt-4">
          Top repositories
          <LinkGreenButton image={BookSvg} imgAlt="new repository" link={"/"} text={"New"} />
        </h2>
        <SearchRepository />
        hola
      </aside>
    </main>
  );
}
