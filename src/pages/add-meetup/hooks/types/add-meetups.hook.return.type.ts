// Vendors
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
// Types
import { MeetupSchemaType } from "../../schemas/add-meetup.schema";

type AddMeetupsHookReturnType = {
  errors: FieldErrors<MeetupSchemaType>;
  handleSubmit: UseFormHandleSubmit<MeetupSchemaType>;
  handleSubmitEvent: (data: MeetupSchemaType) => Promise<void>;
  loading: boolean;
  register: UseFormRegister<MeetupSchemaType>;
};

export type { AddMeetupsHookReturnType };
