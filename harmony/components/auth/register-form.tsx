"use client";

import { CardWrapper } from "./card-wrapper";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";
import { useState, useTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useEffect } from "react";

export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();
    

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            username: "",
            birthDay: "",
            birthMonth: "",
            birthYear: "",
            dateOfBirth: new Date()
        },
    });

    

    

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        const birthDay = parseInt(values.birthDay, 10);
        const birthMonth = parseInt(values.birthMonth, 10) - 1; // Months are 0-indexed in JavaScript Date
        const birthYear = parseInt(values.birthYear, 10);
        const dateOfBirth = new Date(birthYear, birthMonth, birthDay);
        setError(undefined);
        setSuccess(undefined);
        values.dateOfBirth = dateOfBirth;
        console.log(values);
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })

        });
       
    ;}

    return (
        <CardWrapper headerLabel="Create an account" backButtonLabel="Already have an account?" backButtonHref="/auth/login" showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name="email" render={({field }) => (
                            <FormItem>
                                <FormLabel>Email:</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        {...field}
                                        placeholder="example@example.com"
                                        type="email"
                                    />
                                </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                            </FormItem>
                                
                        )}></FormField>
                        <FormField control={form.control} name="password" render={({field }) => (
                            <FormItem>
                                <FormLabel>Password:</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        {...field}
                                        placeholder="******"
                                        type="password"
                                    />
                                </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                            </FormItem>
                                
                        )}></FormField>
                        <FormField control={form.control} name="username" render={({field }) => (
                            <FormItem>
                                <FormLabel>Username:</FormLabel>
                                <FormControl>
                                    <Input
                                        disabled={isPending}
                                        {...field}
                                        placeholder="MyUsername"
                                        type="text"
                                    />
                                </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                            </FormItem>
                                
                        )}></FormField>
                        
                        <div className="flex items-center gap-x-4 w-full justify-center">
                            <FormField  control={form.control} name="birthDay" render={({field }) => (
                                <FormItem>
                                    <FormLabel>Date of Birth:</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                                        <FormControl style={{width: "103px"}}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Day" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[...Array(31)].map((_, i) => (
                                                <SelectItem key={i} value={(i+1).toString()}>
                                                    {i+1}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage>{form.formState.errors.birthDay?.message}</FormMessage>
                                </FormItem>
                            )}></FormField>

                            <FormField control={form.control} name="birthMonth" render={({field }) => (
                                <FormItem>
                                    <FormLabel>&nbsp;</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                                        <FormControl style={{width: "103px"}}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Month" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[...Array(12)].map((_, i) => (
                                                <SelectItem key={i} value={(i+1).toString()}>
                                                    {i+1}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage>{form.formState.errors.birthMonth?.message}</FormMessage>
                                </FormItem>
                            )}></FormField>

                            <FormField control={form.control} name="birthYear" render={({field }) => (
                                <FormItem>
                                    <FormLabel>&nbsp;</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                                        <FormControl style={{width: "103px"}}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Year" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[...Array(new Date().getFullYear() - 1900)].map((_, i) => (
                                                <SelectItem key={i} value={(i+1901).toString()}>
                                                    {i+1901}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage>{form.formState.errors.birthYear?.message}</FormMessage>
                                </FormItem>
                            )}></FormField>
                        </div>
                        
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button type="submit" className="w-full" disabled={isPending}>
                        Register
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )

};