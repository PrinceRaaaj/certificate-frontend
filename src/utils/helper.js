import { toast } from "react-toastify";

export const handleCopy = (mes) => {
    navigator.clipboard.writeText(mes);
    toast.success('Text Copied', { position: "top-right", autoClose: 2000, });
}