export default function LayoutComponents({children}: {children: React.ReactNode}) {
  return (
    <div className="cursor-pointer flex items-center h-full p-1.5 border-[1.8px] border-githubGray-200 rounded-md	w-fit">
      {children}
    </div>
  );
}
