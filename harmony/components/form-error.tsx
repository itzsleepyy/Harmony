import { BsExclamationTriangleFill } from "react-icons/bs";

interface FormErrorProps {
    message?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message }) => {
    if (!message) {
        return null;
    }

    return (
        <div className="flex items-center space-x-2 text-red-500 bg-destructive/15 p-3 rounded-md">
            <BsExclamationTriangleFill className="h-4 w-4" />
            <span>{message}</span>
        </div>
    );
};