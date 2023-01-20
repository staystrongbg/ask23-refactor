import products from "../products.json";
import {
  Meta,
  Kategorije,
  Noviteti,
  Brendovi,
  GoogleMap,
  Paw,
} from "../components";

import { H2 } from "../components/utils";

export default function Home() {
  return (
    <>
      <Meta title="ДОБРОДОШЛИ! - Почетна страна" />

      <div
        className={`wrapper w-full h-[600px] naslovna-bg flex items-center justify-center relative `}
      >
        <main
          className={` flex xl:w-5/6 flex-col items-center justify-between m-auto py-20  `}
        >
          <Paw style="absolute lg:w-28 sm:w-12 top-2 left-1/2 rotate-45 mix-blend-color-burn w-8" />
          <Paw style="absolute lg:w-28 sm:w-12 top-10 left-2/3 rotate-45 mix-blend-color-burn w-8" />
          <Paw style="absolute lg:w-28 sm:w-12 top-2 left-1/4 rotate-45 mix-blend-color-burn w-8" />
          <Paw style="absolute lg:w-28 sm:w-12 top-10 left-1/3 rotate-45 mix-blend-color-burn w-8" />
          <Paw style="absolute lg:w-28 sm:w-12 bottom-20 left-1 mix-blend-color-burn w-8" />
          <Paw style="absolute lg:w-28 sm:w-12 bottom-10 left-20 mix-blend-color-burn w-8" />{" "}
          <Paw style="absolute lg:w-28 sm:w-12 top-16 left-20 mix-blend-color-burn w-8" />{" "}
          <Paw style="absolute lg:w-28 sm:w-12 top-15 left-1 mix-blend-color-burn w-8" />
          <Kategorije />
        </main>
      </div>

      <Noviteti products={products} />
      <Brendovi />
      <div className="h-fit w-full pt-2 text-gray-100 bg-gray-800">
        <H2 className="mb-2 text-center ">Посетите нас</H2>
        <p className="text-center w-full pb-2">
          (Од семафора код Мол пумпе на миријевском булевару узбрдо, трећи
          паркинг с десне стране)
        </p>
        <GoogleMap />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: { products },
    revalidate: 100,
  };
};
