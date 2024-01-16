export default function SpringCard({ IMG_PATH }) {
  return (
    <div className="mx-4 my-2 relative">
      <div className="flex h-[7.5rem] sm:h-[13rem] md:h-[19rem] lg:h-[25rem] overflow-hidden rounded-lg sm:rounded-2xl md:rounded-3xl">
        <img className="w-full" src={`${IMG_PATH}idk.png`} alt="" />
      </div>
      <div className="absolute inset-0 p-4 pt-5 sm:p-6 sm:pt-7 md:p-10 md:pt-12 lg:p-16">
        <h1 className="text-[#9C1C00] font-extrabold text-base sm:text-2xl md:text-4xl lg:text-5xl leading-5 sm:leading-8 md:leading-[2.6rem] lg:leading-[3.5rem] mb-2">
          Spring Summer <br className="" /> Collection
        </h1>
        <span className="bg-[#FFDD9D] text-[#9C1C00] font-medium text-sm sm:text-lg md:text-xl lg:text-2xl leading-5 sm:leading-8 md:leading-10 lg:leading-[3rem] px-2 py-[.19rem] rounded-md lg:rounded-lg">
          UPTO 20% OFF
        </span>
      </div>
    </div>
  );
}
