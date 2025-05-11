import { User } from "@/types/github";
import clsx from "clsx";
import Image from "next/image";
import router from "next/router";

type UserCardProps = {
  user: User;
  isFavorite: boolean;
  onToggleFavorite: (userId: number) => void;
};

export function UserCard({
  user,
  isFavorite,
  onToggleFavorite,
}: UserCardProps) {
  return (
    <div
      className="relative w-full max-w-xs flex flex-col items-center border border-gray-200 rounded-lg p-2 bg-white shadow hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg "
      onClick={() => router.push(`/user/${user.login}`)}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(user.id);
        }}
        className={clsx(
          "absolute top-3 right-3 border rounded-full cursor-pointer text-xl w-9 h-9 flex items-center justify-center z-10 shadow-md",
          isFavorite
            ? "bg-amber-300 border-amber-300 text-gray-700"
            : "bg-white/95 border-gray-200"
        )}
      >
        {isFavorite ? "★" : "☆"}
      </button>
      <div className="relative w-full aspect-square mb-4">
        <Image
          src={user.avatar_url}
          alt={user.login}
          className="rounded-lg"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          unoptimized // quitar al final
        />
      </div>
      <h2 className="text-xl mb-4 text-gray-700 text-center">{user.login}</h2>
    </div>
  );
}
