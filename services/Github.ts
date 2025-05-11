import { Repo, User } from "@/types/github";

const BASE_URL = "https://api.github.com";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users`);

  if (!res.ok) {
    throw new Error("No se pudo traer los usuarios");
  }

  return res.json();
}

export async function searchUsers(query: string): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/search/users?q=${query}`);

  if (!res.ok) {
    throw new Error("No se pudo buscar a los usuarios");
  }

  const data = await res.json();

  return data.items;
}

export async function getUser(username: string): Promise<User[]> {
  const res = await fetch(`${BASE_URL}/users/${username}`);

  if (!res.ok) {
    throw new Error("No se pudo traer el usuario");
  }

  return res.json();
}

export async function getUserRepos(username: string): Promise<Repo[]> {
  const res = await fetch(`${BASE_URL}/users/${username}/repos`);

  if (!res.ok) {
    throw new Error("No se pudieron traer los repositorios del usuario");
  }

  return res.json();
}
