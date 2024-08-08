import z from 'zod'

export const recoveryPasswordSchema = z.object({
    Username: z.string({
        invalid_type_error : "Username must be a string",
        required_error : "Username is required"
    })
        .min(3, { message: 'Username must be at least 3 characters long' })
        .max(150, { message: 'Username must be at most 150 characters long' }),
    NewPassword: z.string({
        invalid_type_error : "NewPassword must be a string",
        required_error : "NewPassword is required"
    })
    .min(8, { message: 'NewPassword must be at least 8 characters long' })
    .max(32, "Password cannot be more than 32 characters")
    .regex(/[A-Z]/, "Password must have at least one uppercase letter")
    .regex(/[a-z]/, "Password must have at least one lowercase letter")
    .regex(/[0-9]/, "Password must have at least one number")
    .regex(
      /[@$!%*?&]/,
      "Password must have at least one special character(@, $, !, %, *, ?, &)"
    ),
    phoneNumber: z.string({ message: "Phone number is required" })
    .min(11, "Phone number must have minimum 11 characters")
    .max(16, "Phone number must have maximum 16 characters")
});