function FindProxyForURL(url, host) {
  // Se o URL for HTTP ou HTTPS, use o proxy especificado
  if (url.substring(0, 4) == "http" || url.substring(0, 5) == "https") {
    return "PROXY 91.188.242.174:9861; cpq6Nv:a7jNm6";
  }
  // Caso contrário, conecte-se diretamente
  return "DIRECT";
}