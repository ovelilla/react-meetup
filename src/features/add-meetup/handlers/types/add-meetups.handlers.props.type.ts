// Vendors
import { Dispatch, SetStateAction } from "react";
// Types
import { MeetupSchemaType } from "@/features/add-meetup/schemas/add-meetup.schema";

type AddMeetupsHandlersPropsType = {
  addMeetup: (meetup: MeetupSchemaType) => void;
  reset: () => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export type { AddMeetupsHandlersPropsType };
