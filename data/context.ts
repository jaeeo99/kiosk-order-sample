import {createContext} from 'react';

const menu = {
  item: {},
  items: [],
  setItem: (item: {}) => {},
  setItems: (items: []) => {}
}

const page = {
  page: 'home',
  setPage: (page: string) => {}
}

const step = {
  step: 0,
  setStep: (step: number) => {}
}

export const MenuContext = createContext(menu);

export const PageContext = createContext(page);

export const StepContext = createContext(step);