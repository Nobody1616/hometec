import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: string;
  label?: string;
}

const ImagePlaceholder = ({ className = "", aspectRatio = "aspect-video", label }: ImagePlaceholderProps) => {
  return (
    <div className={`image-placeholder ${aspectRatio} ${className}`}>
      <div className="relative z-10 flex flex-col items-center gap-2 text-muted-foreground/60">
        <Camera className="h-8 w-8" />
        {label && <span className="text-xs font-medium">{label}</span>}
      </div>
    </div>
  );
};

export default ImagePlaceholder;
