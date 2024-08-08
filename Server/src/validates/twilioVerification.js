import z from "zod";

export const validationPhone = z.object({
  phoneNumber: z
    .string({ message: "Phone number is required" })
    .min(13, "Phone number must have minimum 11 characters")
    .max(16, "Phone number must have maximum 16 characters"),
});

// export const validationOTP = z.object({
//   phoneNumber: z
//     .string({ message: "Phone number is required" })
//     .min(11, "Phone number must have minimum 11 characters")
//     .max(16, "Phone number must have maximum 16 characters"),
//   OTP: z
//     .number({ message: "The OTP must be a number" })
//     .gte(100000, { message: "The OTP must have 6 digits" })
//     .lte(999999, { message: "The OTP must have 6 digits" }),
// });

export const validatePhone = (data) => {
  try {
    validationPhone.parse(data);
    return { data, error: null };
  } catch (error) {
    const errors = error.errors.map((e) => ({ message: e.message }));
    return { data: null, error: errors };
  }
};

export const validateOTP = (userData) => {
  console.log("Data validacion:", userData);
  let error = [];

  let vphone = validatePhone({ phoneNumber: userData.phoneNumber });

  if (userData.OTP.length !== 6) {
    error.push("OTP length must be 6 digits");
  } else {
    const splittedOTP = userData.OTP.split("").map(Number);
    const areNumbers = splittedOTP.every(
      (elemento) => typeof elemento === "number"
    );

    if (!areNumbers) {
      error.push("OTP must be a number");
    } 
  }

  console.log("validation phone", vphone);
  console.log("error:", error)
  if (vphone.data === null) {
    if (error.length > 0) {
      return {data:null, error:[...vphone.error,...error]}
    } else {
      return { data: null, error: vphone.error };
    }
  } else {
    if (error.length > 0) {
      return { data: null, error: error };
    } else {
      return { data: {phoneNumber:userData.phoneNumber, OTP:userData.OTP}, error: null };
    }
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
