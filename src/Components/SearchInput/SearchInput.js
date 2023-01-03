import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SearchInput = ({ setSearchText, placeholder }) => {
  const [search, setSearch] = useState('');
  const [searchedData, setSearchedData] = useState(null);

  //Function  Handle To Search
  const handleSearch = (e) => {
    if (search !== '') {
      setSearchText(search.toLowerCase());
    } else {
      toast.error('Please enter name');
    }
  };
  const clearSearch = () => {
    setSearch('');
    setSearchText('');
  };
  return (
    <div className='flex px-4 mb-2'>
      <div className='search-input-box flex justify-between items-center px-3 md:px-5 '>
        <input
          placeholder={placeholder}
          className='font-g-medium outline-none w-full'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => handleSearch()}
        >
          <path
            d='M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z'
            stroke='#12C4E0'
            stroke-width='3'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M16.4437 16.4438L21 21'
            stroke='#12C4E0'
            stroke-width='3'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
      </div>

      <button
        className='px-4 ml-3  rounded-[5px] text-[#ED785E]  bg-warning font-g-regular  text-[18px]  text-center'
        onClick={() => clearSearch()}
        disabled={search === ''}
        type='submit'
      >
        Clear
      </button>
    </div>
  );
};

export default SearchInput;
