import { useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (userId: number) => {
    setFavorites((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );

    console.log("favorites", favorites);
  };

  return {
    favorites,
    toggleFavorite,
  };
}
