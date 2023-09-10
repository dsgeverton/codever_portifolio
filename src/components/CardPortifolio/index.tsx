import Image from "next/image";

interface CardProps {
    imageUrl: string
    description: string
    redirectUrl: string
}

export default function CardPortifolio({imageUrl, description, redirectUrl}: CardProps) {
    return (
        <a href={redirectUrl} target="_blank" className="flex max-w-[330px] flex-col gap-2 items-center cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-300 group">
            <Image className="bg-green-300 rounded-xl group-hover:shadow-lg" src={imageUrl} alt="description"/>
            <span className="text-center text-sm leading-snug">{description}</span>
        </a>
    )
}