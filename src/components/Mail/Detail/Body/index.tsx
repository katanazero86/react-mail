import { ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  allCheckedAtom,
  checkedMailAtom,
  filteredMailListAtom,
  mailListAtom,
  mailListFilterAtom,
} from '../../../../store/mail';
import { Mail, MailFilterType } from '../../../../store/mail/types';
import styled from '@emotion/styled';
import Checkbox from '../../../Forms/Checkbox';
import Row from '../../../Grid/Row';
import RowItem from '../../../Grid/RowItem';
import OutlineStar from '../../../Icons/OutlineStar';
import Star from '../../../Icons/Star';

const DetailBodyStyled = styled.section`
  flex-grow: 1;
  width: 100%;
  max-height: calc(100% - 66px - 24px);
  background-color: #ffffff;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

const MailTitleStyled = styled.h2`
  font-size: 20px;
  font-weight: 500;
  padding-top: 20px;
  padding-left: 20px;
`;

export default function DetailBody() {
  const { mailId } = useParams();
  const mailList = useRecoilValue(mailListAtom);
  const targetMail = mailList.find(mail => String(mail.id) === mailId)!;

  return (
    <DetailBodyStyled>
      <div>
        <MailTitleStyled>{targetMail.title}</MailTitleStyled>
      </div>
    </DetailBodyStyled>
  );
}
