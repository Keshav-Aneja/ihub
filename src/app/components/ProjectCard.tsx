import Image from "next/image";
interface Props {
  img: string;
  name: string;
}
export default function ProjectCard({ img, name }: Props) {
  return (
    <div className="w-full">
      <section className="w-full aspect-[500/333] bg-dark_bg rounded-[22px] overflow-hidden ">
        <Image
          src={`/${img}`}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full"
        />
      </section>
      <h1 className="font-medium text-sm w-full mx-auto text-center mt-4">
        {name}
      </h1>
    </div>
  );
}
