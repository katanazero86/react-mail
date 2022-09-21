export interface Mail {
  id: number;
  from: string;
  fromAddress: string;
  title: string;
  contents: string;
  labelId: null;
  date: string;
  isRead: boolean;
  isStar: boolean;
  isSpam: boolean;
  isDelete: boolean;
}

export type MailFilterType = 'inbox' | 'sent' | 'starred' | 'spam' | 'trash';
