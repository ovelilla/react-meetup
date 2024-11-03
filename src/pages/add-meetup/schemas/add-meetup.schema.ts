// Vendors
import { z } from "zod";

const MeetupSchema = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.string().url("Invalid URL for image"),
  address: z.string().min(1, "Address is required"),
  description: z.string().min(1, "Description is required"),
});

type MeetupSchemaType = z.infer<typeof MeetupSchema>;

export { MeetupSchema };
export type { MeetupSchemaType };
