"use client";

import { useState } from "react";

type CopyToClipboardButtonProps = {
  value: string;
  label: string;
  className?: string;
};

export default function CopyToClipboardButton({ value, label, className }: CopyToClipboardButtonProps) {
  const [status, setStatus] = useState("");

  const copy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        setStatus(`${label} copiado.`);
        return;
      }

      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "true");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const copied = document.execCommand("copy");
      document.body.removeChild(textarea);

      if (!copied) {
        throw new Error("Copy command unavailable");
      }

      setStatus(`${label} copiado.`);
    } catch {
      const friendlyLabel = label.toLocaleLowerCase("es");
      setStatus(`No se pudo copiar ${friendlyLabel}. Puedes seleccionarlo y copiarlo manualmente.`);
    }
  };

  return (
    <>
      <button className={className} type="button" onClick={() => void copy()}>
        Copiar {label}
      </button>
      <span className="text-sm text-carbon-black/65" role="status" aria-live="polite">{status}</span>
    </>
  );
}
