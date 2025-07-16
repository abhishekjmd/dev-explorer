export function debounceFunction(
  callback: (...args: string[]) => void | Promise<void>,
  delay: number
): (...args: string[]) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: string[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      Promise.resolve(callback(...args)).catch((error) => {
        console.error("Debounced function error:", error);
      });
    }, delay);
  };
}
