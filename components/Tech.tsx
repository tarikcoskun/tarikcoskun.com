import { ReactElement } from "react";
import { motion } from "framer-motion";

export const Tech: React.FC<{
  icon: ReactElement;
  title: string;
  since: string;
}> = ({ icon, title, since }) => {
  return (
    <motion.div
      className="tech"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {icon}
      <h1>{title}</h1>
      <p>Since {since}</p>
    </motion.div>
  );
};
