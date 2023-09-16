import Image from "next/image";
import PlusSVG from "assets/plus.svg";
import SearchSVG from "assets/search.svg";
import PromptSvg from "assets/prompt.svg";

import LayoutComponents from "./commons/LayoutComponents";
import Tooltip from "./Tooltip";

export default function Navbar() {
  return (
    <header>
      <nav className="p-4 bg-githubDark-200 w-full flex items-center">
        <span>Dashboard</span>
        <LayoutComponents>
          <Image alt={"search"} height={16} src={SearchSVG} width={16} />
          <span className="text-xs flex items-center gap-2 w-52 text-githubGray-100">
            Type
            <kbd className="border rounded py-[0.5px] px-1 border-githubGray-200 text-xs">/</kbd>
            to search
          </span>
          <div className="h-[19px] w-[1px] mx-2 bg-githubGray-200" />
          <Tooltip text="Command palette">
            <Image alt={"search"} height={20} src={PromptSvg} width={20} />
          </Tooltip>
        </LayoutComponents>
        <div className="h-[19px] w-[1px] mx-2 bg-githubGray-200" />
        <LayoutComponents>
          <Tooltip text="Create new...">
            <Image alt={"plus"} height={16} src={PlusSVG} width={16} />
          </Tooltip>
        </LayoutComponents>
      </nav>
    </header>
  );
}
