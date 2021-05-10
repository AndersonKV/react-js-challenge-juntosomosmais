import React from 'react';
import logo from '../assets/logo.svg';
import { Header } from '../page/styles';
import api from '../services/api';

interface Props {
  handleSearch: (value: string) => void;
}
function ComponentHeader({ handleSearch }: Props) {
  return (
    <Header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="group-input">
        <div>
          <i className="fas fa-search"></i>
        </div>
        <input
          placeholder="Buscar aqui"
          type="text"
          onChange={event => handleSearch(event.target.value)}
        />
      </div>
    </Header>
  );
}

export default ComponentHeader;
