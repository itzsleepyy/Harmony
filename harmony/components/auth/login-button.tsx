"use client";

import { useRouter } from "next/navigation";



interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChile?: boolean,
};

export const LoginButton = ({children, mode, asChile}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login");
}
    if (mode === "modal") {
        return (
            <span>
                ToDO: Implement Modal
            </span>
        );
    }
    return(
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};