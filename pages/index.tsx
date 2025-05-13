import { SearchBar } from "@/components/SearchBar";
import { UserCard } from "@/components/UserCard";
import { UserCardSkeleton } from "@/components/UserCardSkeleton";
import { getUsers, searchUsers } from "@/services/Github";
import { User } from "@/types/github";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchText.trim()) {
      fetchUsers();
      return;
    }

    try {
      setIsLoading(true);
      const userData = await searchUsers(searchText);
      setUsers(userData);
    } catch (error) {
      console.log("Error al buscar usuarios", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl mb-8 text-gray-700">
        Usuarios de Github
      </h1>
      <SearchBar
        value={searchText}
        onChange={setSearchText}
        onSubmit={handleSearch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto justify-items-center">
        {isLoading
          ? Array.from({ length: 4 }, (_, i) => <UserCardSkeleton key={i} />)
          : users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}
