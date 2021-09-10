export const Work: React.FC<{
  href: string;
  img: string;
  role: string;
  title: string;
  description: string;
}> = ({ href, img, role, title, description }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="work">
      <img src={`/projects/${img}.png`} alt={title} />
      <div>
        <h1>{title}</h1>
        <p className="role">{role}</p>
        <p className="description">{description}</p>
      </div>
    </a>
  );
};
