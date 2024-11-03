// Vendors
import { useEffect, useState } from "react";
// Handlers
import { AllMeetupsHandlers } from "../handlers/all-meetups.handlers";
// Stores
import { useMeetupsStore } from "core/stores/meetups.store";
// Types
import { AllMeetupsHookReturnType } from "./types/all-meetups.hook.return.type";

const AllMeetupsHook = (): AllMeetupsHookReturnType => {
  const [loading, setLoading] = useState<boolean>(false);

  const { addFavorite, meetups, removeFavorite, setMeetups } =
    useMeetupsStore();

  const {
    handleAddToFavorites,
    handleFetchMeetups,
    handleRemoveFromFavorites,
  } = AllMeetupsHandlers({
    addFavorite,
    meetups,
    removeFavorite,
    setLoading,
    setMeetups,
  });

  useEffect(() => {
    handleFetchMeetups();
  }, []);

  return { handleAddToFavorites, handleRemoveFromFavorites, loading, meetups };
};

export { AllMeetupsHook };
