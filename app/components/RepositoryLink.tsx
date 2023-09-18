import Image from "next/image";
import Link from "next/link";
import Avatar from "assets/avatar.jpg";

export default function RepositoryLink({text, link}: {text: string; link: string}) {
  return (
    <Link className="flex gap-x-2 items-center" href={link}>
      <Image alt="avatar" className="rounded-full" height={16} src={Avatar} width={16} />
      <Link className="hover:underline text-sm text-githubGray-50" href={link}>
        {text}
      </Link>
    </Link>
  );
}
