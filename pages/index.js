import Head from "next/head";
import { PrismicLink, PrismicText, PrismicRichText, SliceZone } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import Moment from 'moment';

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { components } from "../slices";
import { useEffect } from "react";

const Index = ({ events, navigation, settings }) => {
  console.log(settings.data)
  function toggleClass(e) {
    e.target.parentElement.classList.toggle("show-hidden");
  }
  return (
    <Layout
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <h1 className="marquee">
        <span>{settings.data.scroll_text}</span>
      </h1>
      <div className="events">
        {events.map((item, i) => {
          return(
            <div className={`event`} key={`event${i}`} style={{'--color': item.data.color }}>
              <div className="click-function" onClick={toggleClass}></div>
              <div className="preview">
                <div className="flex item">
                  <div className="date">{Moment(item.data.date).format("DD/MM/Y")}</div>
                  <div className="time">{item.data.time}</div>
                </div>
                <div className="item">
                  <div className="title">{item.data.title}</div>
                  <div className="subtitle">{item.data.subtitle}</div>
                </div>
                <div className="location item">
                  <PrismicRichText field={item.data.location}/>
                </div>
              </div>
              <div className="hidden-content">
                <PrismicNextImage field={item.data.mainimage} sizes="50vw" className="main-image" />
                <SliceZone slices={item.data.slices} components={components} />
              </div>
            </div>
          )
        })}
      </div>
      <div id="about">
        <p>About</p>
        <div className="about">
          <PrismicNextImage field={settings.data.socialImage} sizes="50vw" className="about-image" />
          <PrismicRichText field={settings.data.about}/>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const events = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      events,
      navigation,
      settings,
    },
  };
}
