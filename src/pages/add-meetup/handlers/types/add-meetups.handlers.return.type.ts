// Types
import { MeetupSchemaType } from "../../schemas/add-meetup.schema";

type AddMeetupsHandlersReturnType = {
  handleSubmitEvent: (data: MeetupSchemaType) => Promise<void>;
};

export type { AddMeetupsHandlersReturnType };
