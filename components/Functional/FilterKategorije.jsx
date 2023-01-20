import { useEffect } from 'react';
import { useProductContext } from '@/context/productContext';
import products from '../../products.json';

import { FaChevronRight } from 'react-icons/fa';
import { CHEVRON_ROTATING_STYLE, LI_LIST_STYLE, UL_LIST_STYLE } from '../utils';

export const FilterKategorije = ({ numberOfProductsByType }) => {
  const {
    showTitles,
    setShowTitles,
    titles,
    setItems,
    setShowTip,
    setVrstaZivotinje,
    pagination,
    setPagination,
  } = useProductContext();

  return (
    <div className='bg-white p-2 shadow-md rounded-sm mb-4'>
      <ul>
        <span
          className={UL_LIST_STYLE}
          onClick={() => setShowTitles(!showTitles)}
        >
          животиња
          <FaChevronRight
            className={` ${showTitles && CHEVRON_ROTATING_STYLE}`}
          />
        </span>
        {showTitles &&
          titles.map((title, idx) => (
            <li
              onClick={(e) => {
                setPagination({ ...pagination, page: 1 });
                setShowTip(true);
                setVrstaZivotinje(
                  products.filter((k) => e.target.textContent.includes(k.title))
                );
                setItems(
                  e.target.textContent.includes('све')
                    ? products
                    : products.filter((k) =>
                        e.target.textContent.includes(k.title)
                      )
                );
              }}
              tabIndex='0'
              key={idx}
              className={LI_LIST_STYLE}
            >
              <span>{title}</span>
              <span className='pointer-events-none'>
                (
                {title === 'све'
                  ? numberOfProductsByType.length
                  : numberOfProductsByType.filter((u) => u.title === title)
                      .length}
                )
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export const FilterTip = ({ numberOfProductsByType }) => {
  const {
    setItems,
    showTip,
    setShowTip,
    vrstaZivotinje,
    vrsteProizvoda,
    setVrsteProizvoda,
    pagination,
    setPagination,
  } = useProductContext();

  useEffect(() => {
    setVrsteProizvoda(
      vrstaZivotinje.length
        ? [...new Set(vrstaZivotinje.map((v) => v.tip)), 'све']
        : []
    );
  }, [vrstaZivotinje]);

  return (
    <div className='bg-white p-2 shadow-md rounded-sm mb-4'>
      <ul>
        <span className={UL_LIST_STYLE} onClick={() => setShowTip(!showTip)}>
          тип производа
          <FaChevronRight className={` ${showTip && CHEVRON_ROTATING_STYLE}`} />
        </span>
        {/* za proizvodi ne bi isla vrsta zivotinja i tip vec treba da se gadjaju products i title */}
        {showTip &&
          vrsteProizvoda.map((tip, idx) => (
            <li
              onClick={(e) => {
                setPagination({ ...pagination, page: 1 });
                setItems(
                  e.target.textContent.includes('све')
                    ? vrstaZivotinje
                    : vrstaZivotinje.filter((z) =>
                        e.target.textContent.includes(z.tip)
                      )
                );
              }}
              tabIndex='0'
              key={idx}
              className={LI_LIST_STYLE}
            >
              <span>{tip}</span>
              <span className=' pointer-events-none '>
                (
                {tip === 'све'
                  ? numberOfProductsByType.length
                  : numberOfProductsByType.filter((u) => tip.includes(u.tip))
                      .length}
                )
              </span>
            </li>
          ))}
        {/* {showTip && !vrsteProizvoda.length && (
        <p className='text-base font-normal lowercase'>изабери животињу</p>
      )} */}
      </ul>
    </div>
  );
};

export const FilterSort = () => {
  const { setItems, items, showfilters, setShowFilters } = useProductContext();
  return (
    <div className='bg-white p-2 shadow-md mb-4 rounded-sm '>
      <ul>
        <span
          className={UL_LIST_STYLE}
          onClick={() => setShowFilters(!showfilters)}
        >
          филтери
          <FaChevronRight
            className={` ${showfilters && CHEVRON_ROTATING_STYLE}`}
          />
        </span>
        {showfilters && (
          <>
            <li
              className={LI_LIST_STYLE}
              onClick={() =>
                setItems(items.sort((a, b) => a.price - b.price).map((r) => r))
              }
            >
              цена растуће
            </li>
            <li
              className={LI_LIST_STYLE}
              onClick={() =>
                setItems(items.sort((a, b) => b.price - a.price).map((g) => g))
              }
            >
              цена опадајуће
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
