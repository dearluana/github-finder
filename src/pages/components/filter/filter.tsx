import React from "react";
import {
  CardBox,
  FilterContainer,
  IconContainer,
  SearchInput,
} from "./filter.styled";
import { BsSearch } from "react-icons/bs";
import { useHomeContext } from "pages/home";

const Filter: React.FC = () => {
  const { search, handleSearch } = useHomeContext();

  return (
    <FilterContainer>
      <CardBox>
        <IconContainer>
          <BsSearch />
        </IconContainer>
        <SearchInput
          placeholder="Pesquise o usuário"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </CardBox>
    </FilterContainer>
  );
};

export default Filter;
