export default function Heading({ heading }: { heading: string }) {
  return (
    <div className="w-full flex items-center justify-center gap-4 my-6">
      <div className="--line bg-primary h-[2px] w-32"></div>
      <h1 className="text-4xl font-bold">{heading}</h1>
      <div className="--line bg-primary h-[2px] w-32"></div>
    </div>
  );
}
