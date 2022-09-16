import React from "react";

export const UserContext = React.createContext("programmer");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };
