// Types
import { Meetup } from "types/meetup.type";

type MeetupItemComponentPropsType = Meetup & {
  onAddToFavorites: (id: string) => void;
  onRemoveFromFavorites: (id: string) => void;
};

export type { MeetupItemComponentPropsType };
