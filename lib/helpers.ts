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

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters."),
  profileImg: z.union([z.instanceof(File), z.null()]).optional(),
  region: z.string().min(3, "Region must be at least 3 characters.").optional(),
});

export const loginSchema = z.object({
  email: z.string().nonempty({ message: "Email is required." }).email({
    message: "Invalid email.",
  }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters." }),
});
