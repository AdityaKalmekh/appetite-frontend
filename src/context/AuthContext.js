import { createContext, useContext, useMemo, useState } from "react";

const MyContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [supplier, setSupplier] = useState("");
  console.log(supplier);
  const value = useMemo(
    () => ({
      supplier,
      setSupplier,
    }),
    [supplier]
  );

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};
