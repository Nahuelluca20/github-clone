"use client";
import BookSvg from "assets/book.svg";
import {useState, useEffect} from "react";

import Loading from "@/app/Loading";

import LinkGreenButton from "../commons/buttons/LinkGreenButton";
import SearchRepository from "../commons/inputs/SearchRepository";

function TopRepositories() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="border-r border-githubGray-150 py-4 px-6 bg-githubDark-100">
      {loading ? (
        <div className="h-96 w-64">
          <Loading />
        </div>
      ) : (
        <>
          <h2 className="text-sm mb-2 text-githubGray-50  items-center font-semibold flex gap-24 mt-4">
            Top Repositories
            <LinkGreenButton image={BookSvg} imgAlt="new repository" link={"/"} text={"New"} />
          </h2>
          <SearchRepository />
          hola
        </>
      )}
    </aside>
  );
}

export default TopRepositories;
