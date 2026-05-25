import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LuLoaderCircle } from "react-icons/lu";

function ProtectedRoute({ children }) {

    const { isAuthenticated, authChecked } = useSelector((state) => state.auth);

    if (!authChecked) {
        return <div className="flex items-center justify-center h-screen w-screen">
            <LuLoaderCircle className="size-16 animate-spin" />
        </div>;
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/"
                replace
            />
        );
    }

    return children;
}

export default ProtectedRoute;