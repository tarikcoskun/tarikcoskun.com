import { IFavouriteTech } from "web.config";

export const Tech: React.FC<IFavouriteTech> = ({ icon, name, since }) => {
  return (
    <div className="tech">
      {icon}
      <h1 className="title">{name}</h1>
      <p className="description">Since {since}</p>
    </div>
  );
};
