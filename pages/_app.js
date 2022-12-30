import '../styles/globals.css';
import Layout from 'components/layout/Layout';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout>
    <Component {...pageProps} />
  </Layout>
    ;
}

export default MyApp;
