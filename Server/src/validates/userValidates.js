import z from "zod";

export const userSchema = z.object({
  username: z
    .string({ message: "Username is required." })
    .min(3, "Username must be at least 3 characters")
    .max(150, "Username cannot be more than 150 characters"),
  surname: z
    .string()
    .min(3, "Last name must be at least 3 characters")
    .max(20, "The last name cannot be more than 20 characters")
    .optional(),
  email: z
    .string({ message: "Emails is required." })
    .email({ message: "Invalid Emails." }),
  password: z
    .string({ message: "Password is required." })
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot be more than 32 characters")
    .regex(/[A-Z]/, "Password must have at least one uppercase letter")
    .regex(/[a-z]/, "Password must have at least one lowercase letter")
    .regex(/[0-9]/, "Password must have at least one number")
    .regex(
      /[@$!%*?&]/,
      "Password must have at least one special character(@, $, !, %, *, ?, &)"
    ),
  birthdate: z.string({ message: "Date of birth is required." }).date(),
  phoneNumber: z
    .string({ message: "Phone number is required" })
    .min(10, "Phone number must have minimum 11 characters")
    .max(16, "Phone number must have maximum 16 characters"),
});

export const validateLogin = z.object({
  username: z
    .string({ message: "Username is required." })
    .min(3, "Username must be at least 3 characters")
    .max(150, "Username cannot be more than 150 characters"),
  password: z
    .string({ message: "Password is required." })
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot be more than 32 characters")
    .regex(/[A-Z]/, "Password must have at least one uppercase letter")
    .regex(/[a-z]/, "Password must have at least one lowercase letter")
    .regex(/[0-9]/, "Password must have at least one number")
    .regex(
      /[@$!%*?&]/,
      "Password must have at least one special character(@, $, !, %, *, ?, &)"
    ),
});

export const parseUserData = (data) => {
  try {
    userSchema.parse(data);
    return { data, error: null };
  } catch (e) {
    console.log("Errorrs", e);
    const errors = e.errors.map((error) => ({
      message: error.message,
    }));
    return { data: null, error: errors };
  }
};

export const parseLoginData = (data) => {
  try {
    validateLogin.parse(data);
    return { data, error: null };
  } catch (e) {
    const errors = e.errors.map((error) => ({
      message: error.message,
    }));
    return { data: null, error: errors };
  }
};
