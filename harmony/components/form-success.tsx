import { TiTick } from "react-icons/ti";

interface FormSuccessProps {
    message?: string;
}

export const FormSuccess: React.FC<FormSuccessProps> = ({ message }) => {
    if (!message) {
        return null;
    }

    return (
        <div className="flex items-center space-x-2 text-emerald-500 bg-emerald-500/15 p-3 rounded-md">
            <TiTick className="h-5 w-5" />
            <span>{message}</span>
        </div>
    );
};