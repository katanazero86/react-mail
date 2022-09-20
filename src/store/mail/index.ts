import { atom } from 'recoil';

export const allCheckedAtom = atom({
  key: 'ALL_CHECKED_ATOM',
  default: false,
});

export const checkedMailAtom = atom<string[]>({
  key: 'CHECKED_MAIL_ATOM',
  default: [],
});

export const mailListAtom = atom({
  key: 'MAIL_LIST_ATOM',
  default: [
    {
      id: 1,
      from: 'The Postman Team',
      fromAddress: 'marketing@postman.com',
      title: 'Postman v10 is here!',
      contents: "It's Postman's biggest update in almost a year. Here's what's new:",
      labelId: null,
      date: '2022.09.16',
      isRead: false,
      isStar: false,
    },
    {
      id: 2,
      from: 'Medium Daily Digest',
      fromAddress: 'noreply@medium.com',
      title: 'Postman v10 is here!',
      contents: "It's Postman's biggest update in almost a year. Here's what's new:",
      labelId: null,
      date: '2022.09.16',
      isRead: false,
      isStar: false,
    },
    {
      id: 3,
      from: 'Velog',
      fromAddress: 'notify@velog.io',
      title: 'Re: React 에서 볼 수 있는 클로저(Closure) | 댓글 알림',
      contents: "It's Postman's biggest update in almost a year. Here's what's new:",
      labelId: null,
      date: '2022.09.16',
      isRead: false,
      isStar: false,
    },
    {
      id: 4,
      from: 'Medium Daily Digest',
      fromAddress: 'noreply@medium.com',
      title: 'Postman v10 is here!',
      contents: "It's Postman's biggest update in almost a year. Here's what's new:",
      labelId: null,
      date: '2022.09.03',
      isRead: false,
      isStar: false,
    },
    {
      id: 5,
      from: 'Medium Daily Digest',
      fromAddress: 'noreply@medium.com',
      title: 'Tailwind is an Anti-Pattern | Enrico Gruner in JavaScript in Plain English',
      contents: 'Tailwind is an Anti-Pattern | Enrico Gruner in JavaScript in Plain English',
      labelId: null,
      date: '2022.09.01',
      isRead: false,
      isStar: false,
    },
  ],
});
