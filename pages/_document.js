import { Html, Head, Main, NextScript } from 'next/document';
import { Component } from 'react';

class MyDocument extends Component {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add meta tags, styles, or fonts here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
