import cn from 'classnames';
import { useState, useEffect } from 'react';
import { SORT_ITEMS } from '../../constants';
import { SortNames } from '../../types';

type SortOffersProps = {
  activeSort: SortNames;
  handleSortItemClick?: (
    item: SortNames,
    setIsOpen: (isOpen: boolean) => void
  ) => void;
};

function SortOffers({
  activeSort,
  handleSortItemClick,
}: SortOffersProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleDocumentClick = (evt: Event) => {
      const isSortList = !(evt.target as HTMLElement).closest(
        '.places__options'
      );

      if (isSortList) {
        setIsOpen(false);
      }
    };

    const handleDocumentKeydown = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleDocumentClick, true);
      document.addEventListener('keydown', handleDocumentKeydown);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
      document.removeEventListener('keydown', handleDocumentKeydown);
    };
  });

  const handleSortButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortButtonClick}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cn('places__options', 'places__options--custom', {
          'places__options--opened': isOpen,
        })}
      >
        {SORT_ITEMS.map((item) => (
          <li
            className={cn('places__option', {
              'places__option--active': activeSort === item,
            })}
            tabIndex={0}
            key={item}
            onClick={() => handleSortItemClick?.(item, setIsOpen)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOffers;
