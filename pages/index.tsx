import { UserCard } from "@/components/UserCard";
import { getUsers } from "@/services/Github";
import { User } from "@/types/github";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const userData = await getUsers();
      setUsers(userData);
    } catch (error) {
      console.log("Error al traer los usuarios", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFavorite = (userId: number) => {
    setFavorites((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-center text-4xl mb-8 text-gray-700">
        Usuarios de Github
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto justify-items-center">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
}
