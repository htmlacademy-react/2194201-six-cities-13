import cn from 'classnames';
import { useState, useEffect } from 'react';
import { SORT_ITEMS } from '../../constants';

function SortOffers(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDocumentClick = (evt: Event) => {
    const isSortList = !(evt.target as HTMLElement).closest('.places__options');

    if (isSortList) {
      setIsOpen(false);
    }
  };

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleDocumentClick, true);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortClick}
      >
        {SORT_ITEMS[0]}
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
            className="places__option places__option--active"
            tabIndex={0}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOffers;
