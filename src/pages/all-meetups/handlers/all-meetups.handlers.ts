// Vendors
import axios from "axios";
// Types
import { AllMeetupsHandlersPropsType } from "./types/all-meetups.handlers.props.type";
import { AllMeetupsHandlersReturnType } from "./types/all-meetups.handlers.return.type";
import { Meetup } from "types/meetup.type";
// Utils
import { sleep } from "@/utils/sleep";

const addToFavoritesEventHandler = ({
  id,
  addFavorite,
}: Pick<AllMeetupsHandlersPropsType, "addFavorite"> & {
  id: string;
}): void => {
  addFavorite(id);
};

const fetchMeetupsHandler = async ({
  meetups,
  setLoading,
  setMeetups,
}: Pick<
  AllMeetupsHandlersPropsType,
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
}: Pick<AllMeetupsHandlersPropsType, "removeFavorite"> & {
  id: string;
}): void => {
  removeFavorite(id);
};

const AllMeetupsHandlers = ({
  addFavorite,
  meetups,
  removeFavorite,
  setLoading,
  setMeetups,
}: AllMeetupsHandlersPropsType): AllMeetupsHandlersReturnType => {
  return {
    handleAddToFavorites: (id: string) =>
      addToFavoritesEventHandler({ id, addFavorite }),
    handleFetchMeetups: () =>
      fetchMeetupsHandler({ meetups, setLoading, setMeetups }),
    handleRemoveFromFavorites: (id: string) =>
      removeFromFavoritesEventHandler({ id, removeFavorite }),
  };
};

export { AllMeetupsHandlers };
