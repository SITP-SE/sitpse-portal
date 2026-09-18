"use client";

import { useDiscoveryModal } from "./DiscoveryModalContext";

export default function BookTrigger({ className, children }) {
  const { open } = useDiscoveryModal();

  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
