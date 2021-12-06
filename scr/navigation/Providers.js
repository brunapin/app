import React from "react";

import { AuthUserProvider } from "../contexts/ContextProvider";
import Routes from './Routes'

export default function Providers() {
    return(
        <AuthUserProvider>
            <Routes />
        </AuthUserProvider>

    )
}