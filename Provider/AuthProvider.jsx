import React, { createContext, useState } from "react";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user = "Arman", setUser] = useState(null);

  const userInfo = {
    user,
  };

  return <AuthContex.Provider value={userInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
