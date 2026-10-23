/** Публичные файлы из public/ с учётом base (/partners/ на проде). */
export function assetUrl(relativePath) {
  const clean = relativePath.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}
