import { useRouter } from 'next/router';
import { createContext, useEffect, useState, useContext } from 'react';
import products from '../products.json';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const router = useRouter();
  const [proizvodiKorpa, setProizvodiKorpa] = useState([]);
  const [cart, setCart] = useState(false);
  const removeItemFromCart = (id) => {
    setProizvodiKorpa(proizvodiKorpa.filter((item) => item._id.$oid !== id));
    // localStorage.removeItem('korpa');
  };

  //shake cart animation
  const [shake, setShake] = useState(false);

  const shakeThatCart = () => {
    setShake(true);
    setTimeout(() => setShake(false), 1000);
  };
  // input number of items to add to cart
  const [kolicinaInput, setKolicinaInput] = useState(1);

  const dodajProizvodUKorpu = (product) => {
    const tempProduct = { ...product, kolicina: kolicinaInput };
    add(proizvodiKorpa, tempProduct);
    setKolicinaInput(1);
    shakeThatCart();
    // localStorage.setItem('korpa', JSON.stringify(tempProduct));
    //mora da bude push u arr ovako ako samo setujes on gazi prethodni unos i cuva samo posslednji
    // setProizvodiKorpa(proizvodiKorpa.map((p) => p));
  };

  function add(arr, tempP) {
    // function (return index if match / -1 if no match
    let indexFound = arr.findIndex(
      (element) => element._id.$oid === tempP._id.$oid
    );
    if (indexFound < 0) setProizvodiKorpa([...arr, tempP]);
    if (indexFound >= 0) {
      proizvodiKorpa[indexFound].kolicina =
        +proizvodiKorpa[indexFound].kolicina + +kolicinaInput;
    }

    return arr;
  }
  return (
    <CartContext.Provider
      value={{
        proizvodiKorpa,
        setProizvodiKorpa,
        cart,
        setCart,
        removeItemFromCart,
        shake,
        setShake,
        shakeThatCart,
        kolicinaInput,
        setKolicinaInput,
        dodajProizvodUKorpu,
        add,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
