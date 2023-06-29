import { useEffect, useRef, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";

type BeforeInstallPromptEvent = Event & {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const InstallPWAButton = () => {
  const isPwa = useSignal(true);

  if (typeof window.matchMedia === "function") {
    isPwa.value = window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in navigator && navigator.standalone === true) ||
      ("appType" in navigator && navigator.appType === "pwa");
  }

  if (isPwa.value) return null;

  const [deferredPrompt, setDeferredPrompt] = useState<
    BeforeInstallPromptEvent | null
  >(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    addEventListener("beforeinstallprompt", (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    });

    return () => {
      removeEventListener("beforeinstallprompt", (e) => {});
    };
  }, []);

  const onClick = () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      setDeferredPrompt(null);
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className="border rounded px-4 py-2"
    >
      Install
    </button>
  );
};

export default InstallPWAButton;
