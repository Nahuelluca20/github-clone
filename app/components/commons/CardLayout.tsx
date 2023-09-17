export default function CardLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseClasses = "bg-githubDark-100 border border-githubGray-50 rounded-md p-1.5";

  const containerClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return <section className={containerClasses}>{children}</section>;
}
