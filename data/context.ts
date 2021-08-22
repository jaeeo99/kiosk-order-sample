import {createContext} from 'react';

const menu = {
  items: [],
  setItems: () => {}
}

export const MenuContext = createContext(menu);
