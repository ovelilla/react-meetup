// Types
import { Meetup } from "types/meetup.type";

type AllMeetupsHookReturnType = {
  handleAddToFavorites: (id: string) => void;
  handleRemoveFromFavorites: (id: string) => void;
  loading: boolean;
  meetups: Meetup[];
};

export type { AllMeetupsHookReturnType };
