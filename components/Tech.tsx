import { ReactElement } from "react";

export const Tech: React.FC<{
  icon: ReactElement;
  title: string;
  since: string;
}> = ({ icon, title, since }) => {
  return (
    <div className="tech">
      {icon}
      <h1>{title}</h1>
      <p>Since {since}</p>
    </div>
  );
};
