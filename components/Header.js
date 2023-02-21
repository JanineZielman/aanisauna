import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";


export const Header = ({ navigation}) => {
  return (
    <div className="menu">
      {navigation.data.links.map((item, i) => {
        return(
          <PrismicLink document={item.link} key={`link${i}`}>
            <PrismicText field={item.label} />
          </PrismicLink>
        )
      })}
    </div>
  );
};
