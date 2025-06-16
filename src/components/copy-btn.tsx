"use client"
import { Clipboard } from "lucide-react"
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"


const CopyBtn = ({ text }: {
    text: string
}) => {
    const [copied, isCopied] = useState(false);
    const coptyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            isCopied(true);
        });
    };


    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button onClick={() => coptyToClipboard(text)} className="text-slate-50 absolute p-2 right-0 top-0"><Clipboard /></button>
                </TooltipTrigger>
                <TooltipContent>
                    {copied ? <p>Copy code</p> : <p>Copied</p>}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
};

export default CopyBtn;