import React from "react";
import Layout from "./components/Layout";
import Link from "next/link";

import style from "./EventDetails.module.css";

export async function getStaticProps() {
  /**
   * TODO: make URL query dynamic based on a state, or user clicks
   * Include Year + Continent keys in the server data route?
   */
  const res = await fetch(
    "https://chronologue.netlify.app/api/year/1957/location/europe"
  );
  const data = await res.json();
  // console.log(data)

  return {
    props: {
      data,
    },
  };
}

export default function EventDetails({ data }) {
  console.log(data);
  return (
    <Layout>
      <section className={style.eventContainer}>
        <Link href="/ApiCall">
          <p>Search Results</p>
        </Link>
        <input type="text" placeholder="Search" />
        <div className={style.eventContainer_flex}>
          <div>
            <img src={data[0].image} alt="" />
            <h2>{data[0].event ? data[0].event : "Event name here"}</h2>
            <p>Date published {data[0].date ? data[0].date : "Unknown"}</p>
            <h3>Continent</h3>
            <p>{}</p>
          </div>
          <div>
            <h3>Related Events</h3>
            <div>
              <img src={data[0].image} alt="" />
              <div></div>
            </div>
            <div>
              <img src={data[0].image} alt="" />
              <div></div>
            </div>
            <div>
              <img src={data[0].image} alt="" />
              <div></div>
            </div>
            <div>
              <img src={data[0].image} alt="" />
              <div></div>
            </div>
            <div>
              <img src={data[0].image} alt="" />
              <div></div>
            </div>
            <div>
              <img src={data[0].image} alt="" />
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}