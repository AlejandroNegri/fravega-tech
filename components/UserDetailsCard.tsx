import Image from "next/image";
import clsx from "clsx";
import { GetStat } from "./GetStat";
import { User } from "@/types/github";

type UserDetailsCardProps = {
  user: User;
  favorites: number[];
  toggleFavorite: (id: number) => void;
};

export function UserDetailsCard({
  user,
  favorites,
  toggleFavorite,
}: UserDetailsCardProps) {
  const isFavorite = favorites.includes(user.id);

  return (
    <div className="flex gap-8 mt-8 mb-12 p-8 bg-white rounded-lg shadow-md flex-col items-center text-center md:flex-row md:items-start md:text-left">
      <div className="relative w-36 h-36 rounded-full overflow-hidden md:w-52 md:h-52 mx-8">
        <Image
          src={user.avatar_url}
          alt="Avatar"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <h1 className="text-3xl mb-4 text-gray-700">{user.name}</h1>
        <p className="text-gray-500 mb-6">{user.bio || "No hay bio"}</p>
        <div className="flex gap-8 mb-6">
          <GetStat title="Repositorios" value={user.public_repos || 0} />
          <GetStat title="Seguidores" value={user.followers || 0} />
          <GetStat title="Seguidos" value={user.following || 0} />
        </div>
        <div className="flex gap-4">
          <a
            className="flex items-center justify-center px-4 py-2 bg-blue-500 rounded text-white cursor-pointer hover:bg-blue-600"
            href={user.html_url}
            target="_blank"
          >
            Ver en GitHub
          </a>
          <button
            className={clsx(
              "px-4 py-2 border rounded text-xl cursor-pointer text-gray-700",
              isFavorite
                ? "bg-amber-300 border-amber-400 hover:bg-amber-400 "
                : "bg-gray-200  border-gray-300 hover:bg-gray-300"
            )}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(user.id);
            }}
          >
            ★
          </button>
        </div>
      </div>
    </div>
  );
}
