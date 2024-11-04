// Vendors
import axios from "axios";
// Types
import { FavoritesHandlersPropsType } from "./types/favorites.handlers.props.type";
import { FavoritesHandlersReturnType } from "./types/favorites.handlers.return.type";
import { Meetup } from "types/meetup.type";
// Utils
import { sleep } from "@/utils/sleep";

const addToFavoritesEventHandler = ({
  id,
  addFavorite,
}: Pick<FavoritesHandlersPropsType, "addFavorite"> & {
  id: string;
}): void => {
  addFavorite(id);
};

const fetchMeetupsHandler = async ({
  meetups,
  setLoading,
  setMeetups,
}: Pick<
  FavoritesHandlersPropsType,
  "meetups" | "setLoading" | "setMeetups"
>): Promise<void> => {
  setLoading(true);

  await sleep(1000);

  if (meetups.length > 0) {
    setLoading(false);
    return;
  }

  try {
    const { data } = await axios.get<Meetup[]>("/data.json");
    setMeetups(data);
  } catch (error) {
    console.error(error);
    setLoading(false);
  } finally {
    setLoading(false);
  }
};

const removeFromFavoritesEventHandler = ({
  id,
  removeFavorite,
}: Pick<FavoritesHandlersPropsType, "removeFavorite"> & {
  id: string;
}): void => {
  removeFavorite(id);
};

const FavoritesHandlers = ({
  addFavorite,
  meetups,
  removeFavorite,
  setLoading,
  setMeetups,
}: FavoritesHandlersPropsType): FavoritesHandlersReturnType => {
  return {
    handleAddToFavorites: (id: string) =>
      addToFavoritesEventHandler({ id, addFavorite }),
    handleFetchMeetups: () =>
      fetchMeetupsHandler({ meetups, setLoading, setMeetups }),
    handleRemoveFromFavorites: (id: string) =>
      removeFromFavoritesEventHandler({ id, removeFavorite }),
  };
};

export { FavoritesHandlers };
