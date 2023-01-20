import { useRouter } from 'next/router';
import { createContext, useEffect, useState, useContext } from 'react';
import products from '../products.json';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [searchProducts, setSearchProducts] = useState([]); // state for searchInput only
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target[0].value);
    e.target[0].value = '';
    router.replace('/');
  };

  const kbEvents = () => {
    window.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setSearchTerm('');
    });
  };
  useEffect(() => {
    kbEvents();

    return () => window.removeEventListener('keydown', kbEvents);
  }, []);

  useEffect(() => {
    setSearchProducts(
      products.filter(
        (o) =>
          o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          o.tip.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  //reset state on page load
  useEffect(() => {
    setIsSearching(false);
  }, [router.pathname, router.asPath]);
  return (
    <SearchContext.Provider
      value={{
        searchProducts,
        setSearchProducts,
        isSearching,
        setIsSearching,
        searchTerm,
        setSearchTerm,
        handleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
