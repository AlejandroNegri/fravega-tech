import Link from "next/link";
import { Repo, User } from "@/types/github";
import { getUser, getUserRepos } from "@/services/Github";
import { UserDetailsCard } from "@/components/UserDetailsCard";
import { UserDetailRepos } from "@/components/UserDetailRepos";
import { useFavoritesContext } from "@/context/FavoritesContext";

type UserPageProps = {
  user: User;
  repos: Repo[];
};

export default function UserPage({ user, repos }: UserPageProps) {
  const { favorites, toggleFavorite } = useFavoritesContext();

  return (
    <div className="max-w-5xl mx-auto">
      <Link href="/" className="text-blue-500 hover:text-blue-600">
        ← Volver a la página principal
      </Link>

      <UserDetailsCard
        user={user}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <UserDetailRepos repos={repos} />
    </div>
  );
}

export const getServerSideProps = async ({
  params,
}: {
  params: { username: string };
}) => {
  try {
    const username = params?.username;
    const user = await getUser(username);
    const repos = await getUserRepos(username);
    return {
      props: {
        user,
        repos: repos.slice(0, 9),
      },
    };
  } catch (error) {
    console.log("Error al traer el usuario", error);
  }
};
