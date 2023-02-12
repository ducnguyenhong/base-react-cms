import { atom, selector } from 'recoil';

export const showSidebarAtom = atom({
  key: 'SHOW_SIDEBAR_ATOM',
  default: new Promise((resolve) => {
    const screenWidth = window.innerWidth;
    resolve(screenWidth > 992);
  })
});

const tokenAtom = atom({
  key: 'TOKEN_ATOM',
  default: new Promise((resolve) => {
    const token = localStorage.getItem('access-token');
    resolve(token);
  })
});

export const tokenState = selector({
  key: 'TOKEN_SELECTOR',
  get: ({ get }) => get(tokenAtom),
  set: ({ set }, newValue) => {
    localStorage.setItem('access-token', newValue);
    set(tokenAtom, newValue);
  }
});
