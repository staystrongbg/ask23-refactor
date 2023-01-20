import { useContext, createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import products from '../products.json';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const router = useRouter();

  const [offset, setOffset] = useState(null);

  const [showTitles, setShowTitles] = useState(false);
  const [showfilters, setShowFilters] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [tip, setTip] = useState(products.map((tip) => tip.tip));
  const [titles] = useState([...new Set(products.map((v) => v.title)), 'све']);
  const [vrstaZivotinje, setVrstaZivotinje] = useState([]);
  const [vrsteProizvoda, setVrsteProizvoda] = useState([]);
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState(null);
  const [similarProduct, setSimilarProduct] = useState(false);

  //trenutno na akciji Index
  const [trenutnaAkcija] = useState({
    tekst: `ПОПУСТ НА КОЛИЧИНУ! 10% попуста за сваки џак хране.`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath, router.pathname]);

  const [pagination, setPagination] = useState({ page: 1, perPage: 16 });

  //reset state on page load
  useEffect(() => {
    setShowFilters(false);
    setShowTitles(false);
    setVrsteProizvoda([]);
    setShowTip(false);
    setPagination({ page: 1, perPage: 16 });
    setSimilarProduct(false);
  }, [router.pathname, router.asPath]);

  return (
    <ProductContext.Provider
      value={{
        offset,
        setOffset,
        showTitles,
        setShowTitles,
        titles,
        setShowFilters,
        showfilters,
        items,
        showTip,
        setShowTip,
        tip,
        setTip,
        vrstaZivotinje,
        setVrstaZivotinje,
        vrsteProizvoda,
        setVrsteProizvoda,
        trenutnaAkcija,
        setItems,
        pagination,
        setPagination,
        setProduct,
        product,
        setSimilarProduct,
        similarProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
