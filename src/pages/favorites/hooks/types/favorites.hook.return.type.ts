// Types
import { Meetup } from "types/meetup.type";

type FavoritesHookReturnType = {
  getFavorites: () => Meetup[];
  handleAddToFavorites: (id: string) => void;
  handleRemoveFromFavorites: (id: string) => void;
  loading: boolean;
};

export type { FavoritesHookReturnType };
