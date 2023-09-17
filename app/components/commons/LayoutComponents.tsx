export default function LayoutComponents({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseClasses =
    "cursor-pointer flex items-center h-full p-1.5 border-[1.8px] border-githubGray-200 rounded-md w-fit";

  const containerClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return <div className={containerClasses}>{children}</div>;
}
