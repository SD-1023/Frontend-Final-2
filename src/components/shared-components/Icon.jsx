export default function Icon({ className, name }) {
  const PATH = "/assets/icons/";
  return <img className={className} src={`${PATH}${name}.svg`} alt="" />;
}
