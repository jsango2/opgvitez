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
function Profile() {
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}

function Index() {
  const { locale, locales, asPath } = useRouter();

  // console.log(blogPosts);
  return (
    <Layout>
      <SimpleReactLightbox>
        <form name="contact" method="POST" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="message" />
          <input type="email" name="email" />
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
