import Link from "next/link";
import Layout from "../components/layout";

function PreactStars({ stars }) {
  return (
    <Layout>
      <p>Preact has {stars} ⭐</p>
      <Link href="/">
        <a>I bet Next.js has more stars (?)</a>
      </Link>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/preactjs/preact");
  const json = await res.json();

  return {
    props: {
      stars: json.forks_count,
    },
  };
}

export default PreactStars;
