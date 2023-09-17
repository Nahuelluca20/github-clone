import Link from "next/link";
import Image from "next/image";

function LinkGreenButton({
  link,
  text,
  image,
  imgAlt,
}: {
  link: string;
  text: string;
  image?: string;
  imgAlt?: string;
}) {
  return (
    <Link
      className="gap-1 font-medium rounded-md text-xs px-2 flex items-center py-1.5 bg-githubGreen-100 hover:bg-githubGreen-200 text-white"
      href={link}
    >
      {image && <Image alt={imgAlt ?? ""} height={18} src={image} width={18} />}
      {text}
    </Link>
  );
}

export default LinkGreenButton;
