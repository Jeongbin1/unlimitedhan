import Image from 'next/image';

interface ItemCardProps {
  id: string;
  thumbnail: string;
  title: string;
  info: string;
  description: string;
  github?: string;
  demo?: string;
}

export default function ItemCard({
  thumbnail,
  title,
  info,
  description,
  github,
  demo,
}: ItemCardProps) {
  return (
    <article className="relative flex flex-col rounded-lg border shadow-sm overflow-hidden aspect-[4/5] md:aspect-[3/4]">
      <div className="relative h-1/2 w-full">
        <Image src={thumbnail} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-1 p-4 h-1/2">
        <h2 className="font-semibold text-base">{title}</h2>
        <p className="text-xs text-muted-foreground">{info}</p>
        <p className="flex-1 text-[13px] text-gray-800 whitespace-pre-line">
          {description}
        </p>
        <div className="mt-auto flex gap-2 text-xs underline text-muted-foreground">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className=" hover:text-primary"
            >
              GitHub
            </a>
          )}{' '}
          {/* {github && demo && <p>|</p>} */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className=" hover:text-primary"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
