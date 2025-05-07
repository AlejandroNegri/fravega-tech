import { UserCard } from "@/components/UserCard";
import { getUsers } from "@/services/Github";
import { User } from "@/types/github";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1>Usuarios de Github</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </div>
  );
}
