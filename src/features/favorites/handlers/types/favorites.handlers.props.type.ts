// Vendors
import { Dispatch, SetStateAction } from "react";
// Types
import { Meetup } from "@/core/types/meetup.type";

type FavoritesHandlersPropsType = {
  addFavorite: (id: string) => void;
  meetups: Meetup[];
  removeFavorite: (id: string) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setMeetups: (meetups: Meetup[]) => void;
};

export type { FavoritesHandlersPropsType };