export default function Icon({ className, name }) {
  const PATH = "/Frontend-Final-2/assets/icons/";
  return <img className={className} src={`${PATH}${name}.svg`} alt={name} />;
}
