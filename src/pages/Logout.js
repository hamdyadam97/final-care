import React from "react";

function Logout() {

    localStorage.removeItem('user')
    window.location.href="/login";
    localStorage.removeItem('doc')

        return(
            <>
            </>
        );
}

export default Logout;