import Image from "next/image";
interface Props {
  category: string;
  details: string[];
  img: string;
}
export default function ProjectCardBlock({ category, details, img }: Props) {
  return (
    <div className="w-full p-6 pt-12 rounded-xl relative bg-[#fbfbfb]  min-h-fit  border-[1px] border-[#aeaeae]">
      <div className="w-16 aspect-square rounded-full bg-white overflow-hidden p-3 absolute -top-8 left-4 border-[1px] border-[#aeaeae] shadow-md">
        <Image
          src={`/${img}`}
          alt={category}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <h1 className="text-xl text-primary font-medium">{category}</h1>
      <ul className="list-disc px-2">
        {details.map((detail, index) => (
          <li className="text-sm mt-4" key={index}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}
