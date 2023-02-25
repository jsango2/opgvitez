import Meta from "../components/meta";
import Navbar from "./Navigation/navbar";

export default function Layout({ preview, children }) {
  return (
    <>
      {/* <Navbar /> */}
      <Meta />
      <main>{children}</main>
    </>
  );
}
