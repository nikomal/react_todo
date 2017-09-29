import React from 'react';
import * as FilterTypes from '../filterTypes';
import Link from './Link.js';

export const Filter = () => {
  return (
      <p className='filter'>
          <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
          <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
          <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
      </p>
  )
};