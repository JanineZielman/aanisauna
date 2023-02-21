import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

const Text = ({ slice }) => {
  return (
    <div className="basic-text">
      {prismicH.isFilled.richText(slice.primary.text) && (
        <PrismicRichText field={slice.primary.text} />
      )}
    </div>
  );
};

export default Text;
