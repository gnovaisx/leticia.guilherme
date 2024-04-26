import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

export default function PixClipboard() {
  const pixClipboard =
    "00020126540014BR.GOV.BCB.PIX0132guilherme.novais.leite@gmail.com5204000053039865802BR5922Guilherme Leite Novais6009SAO PAULO62140510VRjlfi3wRL63045510";

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixClipboard);
    setIsCopied(true);
  };

  useEffect(() => {
    const runEffect = () => {
      setIsCopied(false);
    };

    runEffect();
    const interval = setInterval(runEffect, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div onClick={copyPixCode} className="w-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" className="w-full">
              {!isCopied ? "Copiar código do QR Code" : "Copiado!"}
              <ClipboardIcon className="ml-2 h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Clique para copiar a chave PIX</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function ClipboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}
