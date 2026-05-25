import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { clearAuthState, loginRequest } from "../modules/features/auth/authAction";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, message, error } = useSelector((state) => state.auth.login);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (message) {
            navigate("/dashboard");
            dispatch(clearAuthState());
        }
        if (error) {
            alert(error);
            dispatch(clearAuthState());
        }
    }, [message, error, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginRequest(loginData));
    }
    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10 w-fit">
                <input onChange={handleChange} name="email" value={loginData.email} className="border border-gray-500 w-fit" type="email" required />
                <input onChange={handleChange} name="password" value={loginData.password} className="border border-gray-500 w-fit" type="password" required />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Login