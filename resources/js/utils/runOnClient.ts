export function runOnClient(callback: () => void) {
  if (typeof document !== 'undefined') {
    callback();
  }
}

