import * as z from "zod";

export const CourseFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }).max(50, {
    message: "Title must be less than 50 characters.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }).max(50, {
    message: "Description must be less than 50 characters.",
  }),
  imageUrl: z.string(),
  duration: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  datePosted: z.date(),
});

