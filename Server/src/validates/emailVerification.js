import z from "zod";

export const validationEmail = z.object({
  email: z
    .string({ message: "Email is required" })
    .email("Email must be in a valid format")
  // username: z
  //   .string({ message: "Username is required." })
  //   .min(3, "Username must be at least 3 characters")
  //   .max(150, "Username cannot be more than 150 characters"),
  // redirectUrl: z
  //   .string({ message: "Redirect URL is required" })
  //   .url("Redirect URL must be in a valid format"),
});

export const validateEmailData = (data) => {
  try {
    validationEmail.parse(data);
    return { data, error: null };
  } catch (error) {
    const errors = error.errors.map((e) => ({ message: e.message }));
    return { data: null, error: errors };
  }
};