import { SignIn } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            <SignIn fallbackRedirectUrl={"/dashboard"} />
        </div>
    );
};

export default Login;
