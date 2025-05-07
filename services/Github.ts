import { User } from "@/types/github";

const BASE_URL = "https://api.github.com";

export async function getUsers(): Promise<User[]> {
    const res = await fetch(`${BASE_URL}/users`)

    if(!res.ok){
        throw new Error("No se pudo traer los usuarios");

    }

    return res.json();
}