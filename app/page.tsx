import TopRepositories from "./components/TopRepositories/TopRepositories";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-between bg-githubDark-200">
      <TopRepositories />
    </main>
  );
}
