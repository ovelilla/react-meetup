// Types
import { Meetup } from "types/meetup.type";

type MeetupListComponentPropsType = {
  meetups: Meetup[];
  onAddToFavorites: (id: string) => void;
  onRemoveFromFavorites: (id: string) => void;
};

export type { MeetupListComponentPropsType };
