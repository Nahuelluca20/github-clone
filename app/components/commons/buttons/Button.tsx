export default function Button({children}: {children: React.ReactNode}) {
  return (
    <button className="border py-1 px-3 border-githubGray-150 bg-githubGray-250 hover:border-githubGray-200">
      {children}
    </button>
  );
}
