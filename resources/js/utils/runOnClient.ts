export function runOnClient(callback: () => void) {
  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    callback();
  }
}

