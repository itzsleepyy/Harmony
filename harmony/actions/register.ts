"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import {db} from "@/lib/db";
import { getUserByEmail, getUserByUsername } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success){
        return {error: "Invalid fields!"};
    }

    const {email, password, username, dateOfBirth} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 16);

    const existingEmail = await getUserByEmail(email);
    
    if (existingEmail){
        return {error: "Email already exists!"};
    }

    const existingUsername = await getUserByUsername(username);

    if (existingUsername){
        return {error: "Username already exists!"};
    }

    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            username,
            dateOfBirth
        }
    });

    //ToDO: Send confirmation email


    return {success: "User registered successfully!"};
};