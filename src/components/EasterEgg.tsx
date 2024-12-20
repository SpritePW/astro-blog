import { KonamiCode } from "@/functions/konami-code";
import { createSignal } from "solid-js";

export function activateEasterEgg() {
  const [activated, setActivated] = createSignal(false);

  KonamiCode(() => {
    if (activated() === false) {
      const audio = new Audio("/ec5347_m02.wav");
      audio.volume = 0.25;
      document.body.style.backgroundImage = 'url("/background2.webp")';
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setActivated(true);
    }
  });
}
