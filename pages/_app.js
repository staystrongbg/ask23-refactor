import '../styles/globals.scss';
import { Layout } from '../components';
import { ProductContextProvider } from '../context/productContext';
import { SearchContextProvider } from '../context/searchContext';
import { CartContextProvider } from '../context/cartContext';
function MyApp({ Component, pageProps }) {
  return (
    <ProductContextProvider>
      <SearchContextProvider>
        <CartContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </SearchContextProvider>
    </ProductContextProvider>
  );
}

export default MyApp;
