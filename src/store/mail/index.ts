import { atom } from 'recoil';

export const allCheckedAtom = atom({
  key: 'ALL_CHECKED_ATOM',
  default: false,
});

export const mailListAtom = atom({
  key: 'MAIL_LIST_ATOM',
  default: [],
});
