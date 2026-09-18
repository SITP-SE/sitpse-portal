"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

const DiscoveryModalContext = createContext(null);

export function DiscoveryModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return <DiscoveryModalContext.Provider value={value}>{children}</DiscoveryModalContext.Provider>;
}

export function useDiscoveryModal() {
  const ctx = useContext(DiscoveryModalContext);
  if (!ctx) {
    throw new Error("useDiscoveryModal must be used within a DiscoveryModalProvider");
  }
  return ctx;
}
