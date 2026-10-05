import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/img/**/*.{jpg,jpeg,png}', { eager: true });

/** Devuelve la imagen a partir de su ruta relativa a src/assets/img (p. ej. "cabanas/elite-1.jpg"). */
export function img(path: string): ImageMetadata {
  const mod = files[`/src/assets/img/${path}`];
  if (!mod) throw new Error(`Imagen no encontrada: ${path}`);
  return mod.default;
}

export const NATURE = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `naturaleza/n${n}.jpg`);
export const HERO = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `hero/hero-${n}.jpg`);
