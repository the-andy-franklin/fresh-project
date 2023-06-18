import { useEffect, useRef, useState } from "preact/hooks";
import { tw } from "twind";

type BeforeInstallPromptEvent = Event & {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const InstallPWAButton = () => {
  const [isInstalled, setIsInstalled] = useState(true);

  if (typeof window.matchMedia === "function") {
    const isPwa = window.matchMedia("(display-mode: standalone)").matches ||
      ("standalone" in navigator && navigator.standalone === true) ||
      ("appType" in navigator && navigator.appType === "pwa");

    setIsInstalled(isPwa);
  }

  if (isInstalled) return null;

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
      id="install-button"
      className={tw`border rounded px-4 py-2 text-rainbow`}
    >
      Install
    </button>
  );
};

export default InstallPWAButton;
