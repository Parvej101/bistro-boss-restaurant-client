import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const Auth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default Auth;