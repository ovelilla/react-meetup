// Types
import { AddMeetupsHandlersPropsType } from "./types/add-meetups.handlers.props.type";
import { AddMeetupsHandlersReturnType } from "./types/add-meetups.handlers.return.type";
// Types
import { MeetupSchemaType } from "../schemas/add-meetup.schema";
// Utils
import { sleep } from "@/utils/sleep";

const submitEventHandler = async ({
  addMeetup,
  data,
  reset,
  setLoading,
}: Pick<AddMeetupsHandlersPropsType, "addMeetup" | "reset" | "setLoading"> & {
  data: MeetupSchemaType;
}): Promise<void> => {
  console.log(data);
  setLoading(true);
  await sleep(2000);
  addMeetup(data);
  reset();
  setLoading(false);
};

const AddMeetupsHandlers = ({
  addMeetup,
  reset,
  setLoading,
}: AddMeetupsHandlersPropsType): AddMeetupsHandlersReturnType => {
  return {
    handleSubmitEvent: (data: MeetupSchemaType) =>
      submitEventHandler({ addMeetup, data, reset, setLoading }),
  };
};

export { AddMeetupsHandlers };
