import cn from 'classnames';
import { useState, useEffect } from 'react';
import { SortName } from '../../constants';
import { SortNames } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectActiveSort } from '../../store/app-process/selectors';
import { changeActiveSort } from '../../store/app-process/app-process';

function SortOffers(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const activeSort = useAppSelector(selectActiveSort);

  const handleDocumentClick = (evt: Event) => {
    const isSortList = !(evt.target as HTMLElement).closest('.places__options');

    if (isSortList) {
      setIsOpen(false);
    }
  };

  const handleDocumentKeydown = (evt: KeyboardEvent) => {
    if (evt.code === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSortButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSortItemClick = (item: SortNames) => {
    dispatch(changeActiveSort(item));
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleDocumentClick, true);
      document.addEventListener('keydown', handleDocumentKeydown);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
      document.removeEventListener('keydown', handleDocumentKeydown);
    };
  }, [isOpen]);

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
        {Object.values(SortName).map((item) => (
          <li
            className={cn('places__option', {
              'places__option--active': activeSort === item,
            })}
            tabIndex={0}
            key={item}
            onClick={() => handleSortItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOffers;
