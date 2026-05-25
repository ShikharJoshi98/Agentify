import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    return (
        <main>
            <button onClick={() => navigate("/login")}>go to Login</button>
            <button onClick={() => navigate("/dashboard")}>go to Dashboard</button>
        </main>
    )
}

export default Home