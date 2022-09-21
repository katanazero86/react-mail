import { atom, selector } from 'recoil';
import { Mail, MailFilterType } from './types';

export const allCheckedAtom = atom({
  key: 'ALL_CHECKED_ATOM',
  default: false,
});

export const checkedMailAtom = atom<string[]>({
  key: 'CHECKED_MAIL_ATOM',
  default: [],
});

export const mailListFilterAtom = atom<MailFilterType>({
  key: 'MAIL_LIST_FILTER_ATOM',
  default: 'inbox',
});

export const mailListAtom = atom<Mail[]>({
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
      isSpam: false,
      isDelete: false,
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
      isSpam: false,
      isDelete: false,
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
      isSpam: false,
      isDelete: false,
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
      isSpam: false,
      isDelete: false,
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
      isSpam: false,
      isDelete: false,
    },
    {
      id: 6,
      from: 'Github',
      fromAddress: 'no-reply@github.com',
      title: "The evolution of the command line and more stories from GitHub's The ReadME Project",
      contents: '깃헙에서 뭔가 메일이 왔어요 블라블라블라',
      labelId: null,
      date: '2022.08.30',
      isRead: true,
      isStar: true,
      isSpam: false,
      isDelete: false,
    },
    {
      id: 7,
      from: '더 시에나CC',
      fromAddress: 'duriwayo@hanmail.net',
      title: '(광고) 더 시에나cc (7성급리조트 분양)',
      contents: '제주에 상륙한 이탈리아의 품격!!',
      labelId: null,
      date: '2022.08.29',
      isRead: false,
      isStar: false,
      isSpam: true,
      isDelete: false,
    },
  ],
});

export const filteredMailListAtom = selector({
  key: 'FILTERED_MAIL_LIST_ATOM',
  get: ({ get }) => {
    const filter = get(mailListFilterAtom);
    const mailList = get(mailListAtom);
    switch (filter) {
      case 'inbox':
        return mailList.filter(mail => {
          if (!mail.isSpam && !mail.isDelete) {
            return true;
          } else {
            return false;
          }
        });
      case 'sent':
        return mailList.filter(mail => {
          if (mail.isStar) {
            return true;
          } else {
            return false;
          }
        });
      case 'starred':
        return mailList.filter(mail => {
          if (mail.isStar) {
            return true;
          } else {
            return false;
          }
        });
      case 'spam':
        return mailList.filter(mail => {
          if (mail.isSpam) {
            return true;
          } else {
            return false;
          }
        });
      case 'trash':
        return mailList.filter(mail => {
          if (mail.isDelete) {
            return true;
          } else {
            return false;
          }
        });
    }
  },
});
