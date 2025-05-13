import { createContext, useContext } from "react";
import { useFavorites } from "@/hooks/useFavorites";

interface FavoritesContextType {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(
      "useFavoritesContext se debe usar dentro de un FavoritesProvider"
    );
  }
  return context;
}
