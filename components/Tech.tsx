import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  title: string;
  since: string;
}

export const Tech: React.FC<Props> = ({ icon, title, since }) => {
  return (
    <div className="tech">
      {icon}
      <h1>{title}</h1>
      <p>Since {since}</p>
    </div>
  );
};
