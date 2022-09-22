import { atom, selector } from 'recoil';
import { Mail, MailFilterType } from './types';

export const searchMailTextAtom = atom({
  key: 'SEARCH_MAIL_TEXT_ATOM',
  default: '',
});

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
      contents: `It's Postman's biggest update in almost a year. Here's what's new:`,
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
      contents: `It's Postman's biggest update in almost a year. Here's what's new:`,
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
      contents: `It's Postman's biggest update in almost a year. Here's what's new:`,
      labelId: 'label01',
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
      contents: `It's Postman's biggest update in almost a year. Here's what's new:`,
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
      contents: `Tailwind is an Anti-Pattern | Enrico Gruner in JavaScript in Plain English`,
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
      contents: `Hey zero86 👋

It's time for another major remote conference. Join us on December 8-9 at GraphQL Galaxy, and get to e-meet GraphQL industry experts and people behind your favorite projects.

You can tune in from anywhere in the world to explore the future of the ecosystem. You'll learn about all things GQL with stellar speakers like Benjie (Graphile), Vishwa Mehta (The Graph), Charly Poly (The Guild), and many others.

View lineup

Use the unique opportunity – we've recently launched the discounted Early Bird tickets, allowing you to get full access for just €46.

In case you'd also like to attend 11 other JS events and access 170+ hours of JS talks and workshops, we highly recommend getting a GitNation Multipass for €17/month.

If you have any questions, feel free to respond to this email and we'll get back to you shortly.

Best,
Anna / GraphQL Galaxy`,
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
    const searchText = get(searchMailTextAtom);

    const searchFilter = (filteredMail: Mail) => {
      if (
        filteredMail.title.toLowerCase().includes(searchText.toLowerCase()) ||
        filteredMail.contents.toLowerCase().includes(searchText.toLowerCase())
      )
        return true;
      return false;
    };

    switch (filter) {
      case 'inbox':
        return mailList
          .filter(mail => {
            if (!mail.isSpam && !mail.isDelete) {
              return true;
            } else {
              return false;
            }
          })
          .filter(searchFilter);
      case 'sent':
        return mailList
          .filter(mail => {
            if (mail.isStar) {
              return true;
            } else {
              return false;
            }
          })
          .filter(searchFilter);
      case 'starred':
        return mailList
          .filter(mail => {
            if (mail.isStar && !mail.isDelete) {
              return true;
            } else {
              return false;
            }
          })
          .filter(searchFilter);
      case 'spam':
        return mailList
          .filter(mail => {
            if (mail.isSpam && !mail.isDelete) {
              return true;
            } else {
              return false;
            }
          })
          .filter(searchFilter);
      case 'trash':
        return mailList
          .filter(mail => {
            if (mail.isDelete) {
              return true;
            } else {
              return false;
            }
          })
          .filter(searchFilter);
    }
  },
});

export const filteredMailLengthAtom = selector({
  key: 'FILTERED_MAIL_LENGTH_ATOM',
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
        }).length;
      case 'sent':
        return mailList.filter(mail => {
          if (mail.isStar) {
            return true;
          } else {
            return false;
          }
        }).length;
      case 'starred':
        return mailList.filter(mail => {
          if (mail.isStar && !mail.isDelete) {
            return true;
          } else {
            return false;
          }
        }).length;
      case 'spam':
        return mailList.filter(mail => {
          if (mail.isSpam && !mail.isDelete) {
            return true;
          } else {
            return false;
          }
        }).length;
      case 'trash':
        return mailList.filter(mail => {
          if (mail.isDelete) {
            return true;
          } else {
            return false;
          }
        }).length;
    }
  },
});

export const labelsAtom = atom({
  key: 'LABELS_ATOM',
  default: [
    {
      id: 'label01',
      name: 'Velog',
      color: '#e7e7e7',
    },
    {
      id: 'label02',
      name: 'Test',
      color: '#b6cff5',
    },
  ],
});

export const getLabels = selector({
  key: 'GET_LABELS',
  get: ({ get }) => {
    // TODO : labels fetch
    const labels = get(labelsAtom);
    return labels;
  },
});
