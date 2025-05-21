import { useEffect } from "react";

export default function VLibrasWidget() {
  useEffect(() => {
    // Se já tiver o script carregado, não adiciona de novo
    if (document.getElementById("vlibras-script")) return;

    const script = document.createElement("script");
    script.id = "vlibras-script"; // pra evitar múltiplos scripts
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;

    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    };

    document.body.appendChild(script);

    // No cleanup, não removemos o script para evitar problemas com múltiplas renderizações
    // return () => {
    //   document.body.removeChild(script);
    // };
  }, []);

  return null;
}
