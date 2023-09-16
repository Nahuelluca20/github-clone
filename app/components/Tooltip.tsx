export default function Tooltip({children, text}: {children: React.ReactNode; text: string}) {
  return (
    <div className="group relative flex justify-center w-content">
      <div className="">{children}</div>
      <span className="absolute w-28 text-center top-8 scale-0 min-w-fit transition-all rounded bg-githubGray-200 p-1 text-[10px] text-white group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}
