export default function LinearRatingBar({ value, className }) {
  return (
    <div className={`relative h-2 ml-2 overflow-hidden rounded-[1.6875rem]`}>
      <div
        style={{ width: `${(value / 5) * 100}%` }}
        className={`absolute rounded-r-xl inset-0 bg-color-primary`}
      ></div>
    </div>
  );
}
