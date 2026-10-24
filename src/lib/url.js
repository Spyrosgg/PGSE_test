// Prefixes a site path with Astro's `base`, so links work both at the
// domain root (pgse.co.uk) and in a sub-folder (username.github.io/repo).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path) {
  return BASE + path;
}
