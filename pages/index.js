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
        <title>Meet Summer Breeze</title>
        <meta property="og:title" content="Meet Summer Breeze" key="title" />
        <link
          rel="canonical"
          href="https://www.44adriatic.com"
          key="canonical"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:url" content="https://www.44adriatic.com" />

        <meta property="og:image" content="/ogimage.png" />
        <meta
          name="description"
          content=" An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline."
          key="desc"
        />
        <meta
          property="og:description"
          content=" An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline. "
        />
        <meta
          property="twitter:description"
          content=" An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline. "
        />
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
