import Link from "next/link";
import useSWR from "swr";
import Layout from "../components/layout";
import { useRouter } from "next/router";

import AllWeeks from "../components/booking/Namirnice";

import Head from "next/head";
// function Profile() {
//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }

function Index() {
  const { locale, locales, asPath } = useRouter();

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
          content="An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline. Online Catamaran boat charter booking in Croatia."
          key="desc"
        />
        <meta
          property="og:description"
          content="An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline. Online Catamaran boat charter booking in Croatia."
        />
        <meta
          property="twitter:description"
          content="An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline. Online Catamaran boat charter booking in Croatia."
        />
      </Head>
      <form name="contact" method="POST" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="message" />
        <input type="email" name="email" />
        <input type="text" name="cijena" />
        <input type="text" name="datum" />
      </form>
      {/* <Grid /> */}

      <AllWeeks />

      {/* <Footer /> */}
    </Layout>
  );
}

export default Index;
