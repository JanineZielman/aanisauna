import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";


export const Header = ({ navigation}) => {
  return (
    <div className="menu">
      {navigation.data.links.map((item, i) => {
        return(
          <Link href={`#${item.label[0].text.toLowerCase()}`} key={`link${i}`}>
            <PrismicText field={item.label} />
          </Link>
        )
      })}
    </div>
  );
};
