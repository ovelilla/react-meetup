// Vendors
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import { AddMeetupsHandlers } from "../handlers/add-meetups.handlers";
// Schemas
import { MeetupSchema } from "../schemas/add-meetup.schema";
// Stores
import { useMeetupsStore } from "@/core/stores/meetups.store";
// Types
import { AddMeetupsHookReturnType } from "./types/add-meetups.hook.return.type";
import { MeetupSchemaType } from "../schemas/add-meetup.schema";

const AddMeetupsHook = (): AddMeetupsHookReturnType => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<MeetupSchemaType>({
    resolver: zodResolver(MeetupSchema),
  });

  const { addMeetup } = useMeetupsStore();

  const { handleSubmitEvent } = AddMeetupsHandlers({
    addMeetup,
    reset,
    setLoading,
  });

  return { errors, handleSubmit, handleSubmitEvent, loading, register };
};

export { AddMeetupsHook };
