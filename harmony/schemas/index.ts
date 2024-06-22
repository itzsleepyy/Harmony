import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(1, {
        message: "Please enter a password",
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
        message: "Minimum password length is 6 characters",
    }),
    username: z.string().min(1, {
        message: "Please enter a username",
    }),
    birthDay: z.string().refine(value => {
        const num = parseInt(value, 10);
        return !isNaN(num) && num >= 1 && num <= 31;
    }, { message: "Please select a valid day" }),
    birthMonth: z.string().refine(value => {
        const num = parseInt(value, 10);
        return !isNaN(num) && num >= 1 && num <= 12;
    }, { message: "Please select a valid month" }),
    birthYear: z.string().refine(value => {
        const num = parseInt(value, 10);
        return !isNaN(num) && num >= 1900 && num <= new Date().getFullYear();
    }, { message: `Please select a valid year` }),
    dateOfBirth: z.date(),
});
