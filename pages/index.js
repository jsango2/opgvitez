import Link from "next/link";
import useSWR from "swr";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import { useRouter } from "next/router";
import blogPosts from "../assets/posts.json";
import Grid from "../components/gridSection/grid";
import About from "../components/aboutTheBoat/about";
import BoatData from "../components/BoatData/boatData";
import AllWeeks from "../components/booking/AllWeeks";
import FeesSection from "../components/FeesSection/Fees";
import FAQsection from "../components/FAQSection/FAQ";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import SimpleReactLightbox from "simple-react-lightbox";
import Marina from "../components/MarinaSection/Marina";
import Sights from "../components/Sights/Sights";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
// function Profile() {
//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }

function Index() {
  const { locale, locales, asPath } = useRouter();
  // console.log(asPath);
  return (
    <Layout>
      <Head>
        {/* <title>Škola trčanja Zadar</title>
          <meta property="og:title" content="Škola trčanja Zadar" key="title" />
          <link
            rel="canonical"
            href="https://www.runzadar.com"
            key="canonical"
          />

          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:url" content="https://www.runzadar.com" />

          <meta
            property="og:image"
            content="https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg"
          />
          <meta
            name="description"
            content="Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača. "
            key="desc"
          />
          <meta
            property="og:description"
            content="Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača. "
          />
          <meta
            property="twitter:description"
            content="Prvi rekreativni trkački klub u Zadru. Od početnika do naprednih trkača. "
          /> */}
      </Head>
      <SimpleReactLightbox>
        <form name="contact" method="POST" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="message" />
          <input type="email" name="email" />
          <input type="text" name="cijena" />
          <input type="text" name="datum" />
        </form>
        <Hero />
        {/* <Grid /> */}
        <About />
        <BoatData />
        <AllWeeks />
        <FeesSection />
        <FAQsection />
        <PhotoGallery />
        <Marina />
        <Sights />
        <Footer />
      </SimpleReactLightbox>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();

//   return {
//     props: {
//       stars: json.stargazers_count,
//     },
//   };
// }

export default Index;
