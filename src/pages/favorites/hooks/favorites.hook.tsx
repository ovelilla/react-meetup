// Vendors
import { useEffect, useState } from "react";
// Handlers
import { FavoritesHandlers } from "../handlers/favorites.handlers";
// Stores
import { useMeetupsStore } from "@/core/stores/meetups.store";
// Types
import { FavoritesHookReturnType } from "./types/favorites.hook.return.type";

const FavoritesHook = (): FavoritesHookReturnType => {
  const [loading, setLoading] = useState<boolean>(false);

  const { addFavorite, getFavorites, meetups, removeFavorite, setMeetups } =
    useMeetupsStore();

  const {
    handleAddToFavorites,
    handleFetchMeetups,
    handleRemoveFromFavorites,
  } = FavoritesHandlers({
    addFavorite,
    meetups,
    removeFavorite,
    setLoading,
    setMeetups,
  });

  useEffect(() => {
    handleFetchMeetups();
  }, []);

  return {
    getFavorites,
    handleAddToFavorites,
    handleRemoveFromFavorites,
    loading,
  };
};

export { FavoritesHook };
