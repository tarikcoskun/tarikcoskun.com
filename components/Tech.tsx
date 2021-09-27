interface IFavouriteTech {
  icon: JSX.Element;
  name: string;
  since: number;
}

export const Tech: React.FC<IFavouriteTech> = ({ icon, name, since }) => {
  return (
    <div className="tech">
      {icon}
      <h1>{name}</h1>
      <p>Since {since}</p>
    </div>
  );
};
