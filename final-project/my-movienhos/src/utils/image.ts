// Utilitário para garantir compatibilidade de imagens (string ou require) no React Native
export function getImageSource(image: any) {
  if (typeof image === 'string') {
    return { uri: image };
  }
  return image;
}
