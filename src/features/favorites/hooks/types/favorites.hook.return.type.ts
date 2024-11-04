// Types
import { Meetup } from "@/core/types/meetup.type";

type FavoritesHookReturnType = {
  getFavorites: () => Meetup[];
  handleAddToFavorites: (id: string) => void;
  handleRemoveFromFavorites: (id: string) => void;
  loading: boolean;
};

export type { FavoritesHookReturnType };
