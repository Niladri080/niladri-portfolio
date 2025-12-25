import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Detect whether the current environment supports WebGL rendering.
 * Returns true only when a WebGL context can be created and queried safely.
 */
export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return false;
    // Some environments can create a context but are blocked/invalid; try a safe query
    try {
      // Accessing this parameter should throw if the context is invalid
      gl.getParameter(gl.VERSION);
    } catch {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
