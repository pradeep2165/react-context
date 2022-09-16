import React from "react";

const UserContext = React.createContext("programmer");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserConsumer, UserProvider };
