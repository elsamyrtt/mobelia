"use client";

import { useState } from "react";

type CopyToClipboardButtonProps = {
  value: string;
  label: string;
};

export default function CopyToClipboardButton({ value, label }: CopyToClipboardButtonProps) {
  const [status, setStatus] = useState("");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus(`${label} copiado.`);
    } catch {
      setStatus(`No se pudo copiar ${label.toLocaleLowerCase("es")}. Puedes seleccionarlo y copiarlo manualmente.`);
    }
  };

  return (
    <>
      <button type="button" onClick={() => void copy()}>
        Copiar {label}
      </button>
      <span role="status" aria-live="polite">{status}</span>
    </>
  );
}
