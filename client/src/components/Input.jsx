import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Input({ ...props }) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = props.type === "password";

    return (
        <span className="relative w-full block">
            <input
                {...props}
                type={isPassword ? (showPassword ? "text" : "password") : props.type || "text"}
                placeholder={props.placeholder}
                className="w-full bg-gray-200 border border-gray-300 rounded-lg px-4 py-2 text-sm text-neutral-700 outline-none"
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            )}
        </span>
    )
}