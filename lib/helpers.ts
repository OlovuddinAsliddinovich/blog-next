import { z } from "zod";

export const formSchema = z.object({
  image: z.union([
    z
      .instanceof(File)
      .refine(
        (file) => file.size <= 5 * 1024 * 1024,
        "Image size must be less than 5MB."
      )
      .optional(),
    z.null(),
  ]),
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
  content: z.string().min(10, {
    message: "Content must be at least 50 characters.",
  }),
});
