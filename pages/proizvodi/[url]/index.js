import products from "../../../products.json";
import { FilterSort, FilterTip } from "../../../components";
import { Meta, Button2, NonSwiperProizvod } from "../../../components";
import { useProductContext } from "@/context/productContext";
import { useEffect, useState } from "react";
import {
  GridContainer,
  H1,
  P,
  ProductsListWrapper,
} from "../../../components/utils";
import { useRouter } from "next/router";
import Link from "next/link";

const Kategorija = () => {
  const router = useRouter();
  const {
    setItems,
    items,
    setVrstaZivotinje,
    vrstaZivotinje,
    pagination,
    setPagination,
  } = useProductContext();

  const [page, setPage] = useState(null);

  useEffect(() => {
    if (router.isReady)
      setPage(products.filter((prod) => prod.link === router.query.url));
  }, [router.query.url]);

  useEffect(() => {
    setItems(vrstaZivotinje);
  }, [vrstaZivotinje]);

  useEffect(() => {
    setVrstaZivotinje(page);
  }, [page]);

  return (
    <>
      {page && vrstaZivotinje && items && page[0] ? (
        <>
          <Meta title={`Производи за категорију ${page[0].title}`} />
          <div className={`wrapper w-full `}>
            <section className="sm:px-5 px-1  ">
              <div className="flex flex-col  w-full m-auto mt-12 mb-12">
                <H1 className="text-center">{page[0].title}</H1>
                <ProductsListWrapper>
                  <div className="sm:w-1/6 w-4/5 flex flex-col px-2">
                    <FilterSort />
                    <FilterTip numberOfProductsByType={page} />
                  </div>
                  <GridContainer>
                    {items &&
                      items
                        .slice(0, pagination.page * pagination.perPage)
                        .map((p, idx) => (
                          <NonSwiperProizvod key={idx} {...p} />
                        ))}
                  </GridContainer>
                </ProductsListWrapper>
                {items.length > pagination.perPage * pagination.page && (
                  <Button2
                    className="w-72 m-auto"
                    title="учитај још"
                    onClick={() =>
                      setPagination({
                        ...pagination,
                        page: pagination.page + 1,
                      })
                    }
                  />
                )}
              </div>
            </section>
          </div>
        </>
      ) : (
        <h3 style={{ textAlign: "center" }}>
          nothing here... <Link href="/">Go home</Link>{" "}
        </h3>
      )}
    </>
  );
};

export default Kategorija;
