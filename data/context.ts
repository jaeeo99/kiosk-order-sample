import {createContext} from 'react';

const menu = {
  items: [],
  setItems: () => {}
}

const page = {
  page: 'home',
  setPage: () => {}
}

const step = {
  step: 0,
  setStep: () => {}
}

export const MenuContext = createContext(menu);

export const PageContext = createContext(page);

export const StepContext = createContext(step);