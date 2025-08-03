import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"byDefault",
});

export default UserContext;