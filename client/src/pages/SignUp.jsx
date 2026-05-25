import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthState, signUpRequest } from "../modules/features/auth/authAction";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const dispatch = useDispatch();
    const { loading, message, error } = useSelector((state) => state.auth.signup);
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        if (message) {
            alert(message);
            dispatch(clearAuthState());
        }
        if (error) {
            alert(error);
            dispatch(clearAuthState());
        }
    }, [dispatch, message, error]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUpRequest(registerData));
    }
    return (
        <section>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10 w-fit">
                <input onChange={handleChange} name="name" value={registerData.name} className="border border-gray-500 w-fit" required />
                <input onChange={handleChange} name="email" value={registerData.email} className="border border-gray-500 w-fit" type="email" required />
                <input onChange={handleChange} name="password" value={registerData.password} className="border border-gray-500 w-fit" type="password" required />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default SignUp