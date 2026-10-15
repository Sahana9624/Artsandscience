import { createContext, useContext, useState } from "react";

const ApplyContext = createContext();

export function ApplyProvider({ children }) {
  const [applyOpen, setApplyOpen] = useState(false);
  return (
    <ApplyContext.Provider value={{ applyOpen, setApplyOpen }}>
      {children}
    </ApplyContext.Provider>
  );
}

export function useApply() {
  return useContext(ApplyContext);
}