export default function Brands({ img }) {
  const IMG_PATH = "/Frontend-Final-2/assets/images/";

  return <img className="w-full" src={`${IMG_PATH}${img}`} alt="" />;
}
