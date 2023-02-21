import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";

const Image = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <div className="basic-image">
      {prismicH.isFilled.image(image) && (
        <PrismicNextImage field={image} sizes="100vw" />
      )}
    </div>
  );
};

export default Image;
