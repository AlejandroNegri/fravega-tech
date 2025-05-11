import { Repo } from "@/types/github";

export function UserDetailRepos({ repos }: { repos: Repo[] }) {
  return (
    <div className="p-4">
      <h2 className="text-3xl text-gray-700 mb-6">
        Repositorios más recientes
      </h2>
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="flex flex-col justify-between h-full p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl text-gray-700 mb-2">{repo.name}</h3>
            <p className="text-gray-500 mb-4 text-sm">
              {repo.description || "No hay descripción disponible"}
            </p>
            <div className="flex justify-between">
              <span className="text-gray-500 text-sm">
                ★ {repo.stargazers_count}
              </span>
              <a
                className="text-blue-500 hover:text-blue-600 text-sm"
                href={repo.html_url}
              >
                Ver en Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
