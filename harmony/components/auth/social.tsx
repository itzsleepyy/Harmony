"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";



export const Social = () => {
    return(
        <div className="flex items-center w-full gap-x-2">
            <Button className="w-full gap-x-2" variant="outline" onClick={() => {}}>
                <FcGoogle className="h-5 w-5" />
                <span>Google</span>
            </Button>
            <Button className="w-full gap-x-2" variant="outline" onClick={() => {}}>
                <FaGithub className="h-5 w-5"/>
                <span>GitHub</span>
            </Button>
        </div>
    )
}