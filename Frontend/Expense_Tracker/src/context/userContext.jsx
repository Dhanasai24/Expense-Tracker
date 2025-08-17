"use client"

import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Function to update user data
  const updateUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
  }

  // Function to clear user data (eg: on logout)
  const clearUser = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUser(null)
  }

  return <UserContext.Provider value={{ user, updateUser, clearUser }}>{children}</UserContext.Provider>
}

export default UserProvider;
