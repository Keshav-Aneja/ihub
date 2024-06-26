import { motion } from "framer-motion";
export default function Heading({ heading }: { heading: string }) {
  return (
    <motion.div
      className="w-full flex items-center justify-center gap-4 my-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="--line bg-primary h-[2px] w-32"></div>
      <h1 className="text-4xl font-bold">{heading}</h1>
      <div className="--line bg-primary h-[2px] w-32"></div>
    </motion.div>
  );
}
