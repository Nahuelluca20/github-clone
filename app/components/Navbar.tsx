import Avatar from "assets/avatar.jpg";
import Image from "next/image";
import PlusSVG from "assets/plus.svg";
import SearchSVG from "assets/search.svg";
import PromptSvg from "assets/prompt.svg";
import DropDownSvg from "assets/drop-down.svg";
import InboxSvg from "assets/inbox.svg";
import GithubSvg from "assets/github-logo.svg";
import MenuSvg from "assets/menu.svg";

import LayoutComponents from "./commons/LayoutComponents";
import Tooltip from "./Tooltip";

export default function Navbar() {
  return (
    <header>
      <nav className="px-3 py-3 shadow-inner border-b border-githubGray-150 bg-githubDark-200 w-full flex items-center justify-between">
        <ul className="flex gap-3 items-center">
          <LayoutComponents className="hover:border-githubGray-200">
            <Image alt={"github"} height={20} src={MenuSvg} width={20} />
          </LayoutComponents>
          <Image
            alt={"github"}
            className="rounded-full p-1"
            height={42}
            src={GithubSvg}
            width={42}
          />
          <span className="text-sm text-githubGray-50 font-bold">Dashboard</span>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <LayoutComponents>
              <Image alt={"search"} height={16} src={SearchSVG} width={16} />
              <span className="text-xs flex items-center gap-2 w-52 text-githubGray-100">
                Type
                <kbd className="border rounded py-[0.5px] px-1 border-githubGray-200 text-xs">
                  /
                </kbd>
                to search
              </span>
              <div className="h-[19px] w-[1px] mx-2 bg-githubGray-200" />
              <Tooltip text="Command palette">
                <Image alt={"search"} height={20} src={PromptSvg} width={20} />
              </Tooltip>
            </LayoutComponents>
          </li>
          <li>
            <div className="h-[19px] w-[1px] bg-githubGray-200" />
          </li>
          <li>
            <Tooltip text="Create new...">
              <LayoutComponents className="gap-1">
                <Image alt={"plus"} height={16} src={PlusSVG} width={16} />
                <Image alt={"DropDownSvg"} height={16} src={DropDownSvg} width={16} />
              </LayoutComponents>
            </Tooltip>
          </li>
          <li>
            <Tooltip text="You have no unread notifications">
              <LayoutComponents className="gap-1">
                <Image alt={"Inbox"} height={18} src={InboxSvg} width={18} />
              </LayoutComponents>
            </Tooltip>
          </li>
          <li>
            <Image
              alt="Rounded avatar"
              className="rounded-full"
              height={32}
              src={Avatar}
              width={32}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
