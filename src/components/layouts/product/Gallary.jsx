import ImageGallery from "react-image-gallery";

export default function DesktopGallary({ imagesData }) {
  const images = imagesData.map((image) => {
    return {
      original: image.image_url,
      thumbnail: image.thumbnail_url,
    };
  });

  return (
    <div className="w-full sm:max-w-[25rem] lg:max-w-[30rem] m-auto">
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        showNav={false}
        infinite={true}
        lazyLoad={true}
      />
    </div>
  );
}
