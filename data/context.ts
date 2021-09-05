import {createContext} from 'react';

export interface IItem {
  type: string;
  menuName: string;
  menuInfo?: string;
  price: string;
  img?: string;
}
export interface IMenu {
  item: IItem | null,
  items: IItem[],
  setItem: (item: IItem | null) => void,
  setItems: (items: IItem[] | null) => void,
}

const menu: IMenu = {
  item: null,
  items: [],
  setItem: (item: IItem | null) => {},
  setItems: (items: IItem[] | null) => {}
}

export interface IPage {
  page: string;
  setPage: (page: string) => void;
}

const page: IPage = {
  page: 'home',
  setPage: (page: string) => {}
}

export interface IStep {
  step: number;
  setStep: (step: number) => void
}

const step: IStep = {
  step: 0,
  setStep: (step: number) => {}
}

export interface IModal {
  active: boolean;
  modal: string;
  openModal: (page: string) => void;
  closeModal: () => void;
}

const modal: IModal = {
  active: false,
  modal: '',
  openModal: () => {},
  closeModal: () => {},
}

export const MenuContext = createContext(menu);

export const PageContext = createContext(page);

export const StepContext = createContext(step);

export const ModalContext = createContext(modal);