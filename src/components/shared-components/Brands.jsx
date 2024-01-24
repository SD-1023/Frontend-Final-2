export default function Brands({ img }) {
  return (
    <div className="flex items-center justify-center bg-color-accent rounded-lg p-8">
      <img
        className="w-[6.2rem] md:w-[10rem] max-h-[6.2rem] md:max-h-[10rem]"
        src={`${img}`}
        alt=""
      />
    </div>
  );
}
