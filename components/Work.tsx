import { IWork } from "@/web.config";

export const Work: React.FC<IWork> = ({
  img,
  href,
  name,
  role,
  description,
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="work">
      <img className="icon" src={img} alt={name} />
      <div>
        <h1 className="title">{name}</h1>
        <p className="role">{role}</p>
        <p className="description">{description}</p>
      </div>
    </a>
  );
};
