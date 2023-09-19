"use client";
import BookSvg from "assets/book.svg";
import {useState, useEffect} from "react";

import Loading from "@/app/Loading";

import LinkGreenButton from "./commons/buttons/LinkGreenButton";
import SearchRepository from "./commons/inputs/SearchRepository";
import RepositoryLink from "./RepositoryLink";

export default function TopRepositories() {
  const [loading, setLoading] = useState(true);
  const repositories = [
    {
      text: "Nahuelluca20/events-calendar",
      link: "https://github.com/Nahuelluca20/events-calendar",
    },
    {
      text: "Nahuelluca20/google-keep-clone",
      link: "https://github.com/Nahuelluca20/google-keep-clone",
    },
    {
      text: "Nahuelluca20/comments-app",
      link: "https://github.com/Nahuelluca20/comments-app",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="min-h-screen min-w-[335px] border-r border-githubGray-150 px-6 bg-githubDark-100">
      {loading ? (
        <div className="h-96 w-64">
          <Loading />
        </div>
      ) : (
        <div className="sticky top-0 bottom-0 py-6">
          <h2 className="text-sm mb-2 text-githubGray-50 items-center font-semibold flex justify-between mt-4">
            Top Repositories
            <LinkGreenButton image={BookSvg} imgAlt="new repository" link={"/"} text={"New"} />
          </h2>
          <SearchRepository />
          <ul className="grid gap-y-3">
            {repositories.map((repository) => (
              <li key={repository.link}>
                <RepositoryLink link={repository.link} text={repository.text} />
              </li>
            ))}
          </ul>
          <button className="mt-6 hover:text-githubBlue-50 text-githubGray-200 text-xs">
            Show more
          </button>
          <h2 className="text-sm mb-2 text-githubGray-50 font-semibold mt-10">Recent activity</h2>
          <div className="w-[271px] mt-2 mb-4 border border-dashed border-githubGray-150 rounded-md p-4">
            <p className="mt-0 text-xs  text-githubGray-100">
              When you take actions across GitHub, we’ll provide links to that activity here.
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
