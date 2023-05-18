import Link from "next/link";
import useSWR from "swr";
import Layout from "../components/layout";
import { useRouter } from "next/router";

import Head from "next/head";
import Trgovina from "../components/opg/Namirnice/trgovina";
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
        <title>OPG Vitez</title>
        <meta property="og:title" content="OPG Vitez" key="title" />
        <link rel="canonical" href="https://www.opg-vitez.hr" key="canonical" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:url" content="https://www.opg-vitez.hr" />

        <meta property="og:image" content="/salad.jpeg" />
        <meta
          name="description"
          content="Dostavljamo svježe voće i povrće vlastite proizvodnje i proizvodnje provjerenih proizvođača do vašeg doma u Zagrebu i okolici."
          key="desc"
        />
        <meta
          property="og:description"
          content="Dostavljamo svježe voće i povrće vlastite proizvodnje i proizvodnje provjerenih proizvođača do vašeg doma u Zagrebu i okolici."
        />
        <meta
          property="twitter:description"
          content="Dostavljamo svježe voće i povrće vlastite proizvodnje i proizvodnje provjerenih proizvođača do vašeg doma u Zagrebu i okolici."
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

      <Trgovina />

      {/* <Footer /> */}
    </Layout>
  );
}

export default Index;
