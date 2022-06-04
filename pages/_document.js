import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html lang="hr">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Buenard:wght@700&family=Montserrat:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        {/* <title>Your site title</title> */}
        {this.props.styleTags}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
