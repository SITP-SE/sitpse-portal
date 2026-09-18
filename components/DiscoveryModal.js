"use client";

import { useEffect } from "react";
import DiscoveryForm from "./DiscoveryForm";
import { useDiscoveryModal } from "./DiscoveryModalContext";

export default function DiscoveryModal() {
  const { isOpen, close } = useDiscoveryModal();

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e) {
      if (e.key === "Escape") close();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onMouseDown={close}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="discovery-modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={close} aria-label="Close">
          &times;
        </button>
        <h2 id="discovery-modal-title">Book a Discovery Session</h2>
        <p className="modal-sub">
          Tell us the problem. We'll help you determine what can be done, what technology makes
          sense, and how SITP can get it implemented.
        </p>
        <DiscoveryForm />
      </div>
    </div>
  );
}
