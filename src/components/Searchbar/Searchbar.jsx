import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { BtnSearch, FormSearch, Header, InputSearch } from './SearchbarStyled';

export const Searchbar = ({ onSubmit, userInput }) => {
  return (
    <Header className="searchbar">
      <FormSearch onSubmit={onSubmit}>
        <BtnSearch type="submit">
          <FaSearch
            size={40}
            onMouseOver={({ target }) => (target.style.color = 'white')}
            onMouseOut={({ target }) => (target.style.color = 'black')}
          />
        </BtnSearch>

        <InputSearch
          type="text"
          placeholder="Search images and photos"
          name="userInput"
        />
      </FormSearch>
    </Header>
  );
};
