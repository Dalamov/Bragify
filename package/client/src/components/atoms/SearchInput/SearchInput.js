import React from 'react';

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import { GoSearch } from "react-icons/go"

function SearchInput(){
  return(
    <InputGroup className="search align-items-center rounded">
      <GoSearch className="search__icon" />
      <FormControl placeholder="search" className="search__input" />
    </InputGroup>
  )
}

export default SearchInput
