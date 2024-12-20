import { KonamiCode } from "@/functions/konami-code";

export function activateEasterEgg() {
  KonamiCode(() => {
    const audio = new Audio("/ec5347_m02.wav");
    audio.volume = 0.25;
    document.body.style.backgroundImage = 'url("/background2.webp")';
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
  });
}
