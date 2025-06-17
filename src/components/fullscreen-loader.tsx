import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
    lable?: string;
}

export const FullscreenLoader = ({lable} : FullscreenLoaderProps) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-2">
            <LoaderIcon className="size-6 text-muted-foreground animate-spin" />
            {lable && <p className="text-sm text-muted-foreground">{lable}</p>}
        </div>
    )
}