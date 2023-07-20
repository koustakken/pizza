import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

function Categories() {
  const categories = ['Все', 'Мясная', 'Вегатерианская', 'Гриль', 'Острая', 'Закрытые'];

  const category = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => dispatch(setCategoryId(i))}
            className={category === i ? 'active' : ''}
            key={i}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
