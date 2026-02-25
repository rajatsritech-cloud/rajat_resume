'use client';

interface VideoBackgroundProps {
    src: string;
    onLoadedData?: () => void;
}

export default function VideoBackground({ src, onLoadedData }: VideoBackgroundProps) {
    return (
        <video
            className="absolute inset-0 w-full h-full object-cover"
            src={src}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={onLoadedData}
        />
    );
}
