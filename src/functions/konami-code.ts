export function KonamiCode(callback: () => void): void {
  if (typeof window !== "undefined") {
    const codes: string[] = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];
    let position: number = 0;

    document.addEventListener("keydown", function (event: KeyboardEvent): void {
      if (event.code === codes[position]) {
        position++;
        if (position === codes.length) {
          position = 0;
          callback();
        }
      } else {
        position = 0;
      }
    });
  }
}
