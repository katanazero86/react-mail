import { useRecoilState, useRecoilValue } from 'recoil';
import { allCheckedAtom, checkedMailAtom, mailListAtom } from '../../../store/mail';
import styled from '@emotion/styled';
import Checkbox from '../../Forms/Checkbox';
import { ChangeEvent, useEffect } from 'react';
import Row from '../../Grid/Row';
import RowItem from '../../Grid/RowItem';

const BodyStyled = styled.section`
  flex-grow: 1;
  width: 100%;
  max-height: calc(100% - 66px - 24px);
  background-color: #ffffff;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

const EmptyContentsStyled = styled.h4`
  color: rgb(107, 114, 128);
  font-size: 18px;
  font-weight: 600;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MailWrapStyled = styled.div`
  padding: 4px 0;
`;

const MailFromStyled = styled.span<{ isRead: boolean }>`
  padding-left: 10px;
  color: #202124;
  letter-spacing: -0.5px;
  font-weight: ${props => (props.isRead ? 400 : 600)};
`;

const MailDateStyled = styled.span`
  font-size: 14px;
  color: #202124;
  display: flex;
  letter-spacing: -0.5px;
  align-items: center;
  white-space: nowrap;
`;

const MailTitleStyled = styled.p<{ isRead: boolean }>`
  color: #202124;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 30px;
  font-weight: ${props => (props.isRead ? 400 : 600)};
`;

const MailContentsStyled = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 30px;
  color: #5f6368;
  font-size: 14px;
`;

export default function Body() {
  const mailList = useRecoilValue(mailListAtom);
  const [allChecked, setAllChecked] = useRecoilState(allCheckedAtom);
  const [checkedMail, setCheckedMail] = useRecoilState(checkedMailAtom);

  useEffect(() => {
    if (allChecked) {
      if (checkedMail.length !== mailList.length) {
        setCheckedMail(mailList.map(mail => String(mail.id)));
      }
    } else {
      if (checkedMail.length === mailList.length) {
        setCheckedMail([]);
      }
    }
  }, [allChecked]);

  useEffect(() => {
    if (checkedMail.length === mailList.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checkedMail.length]);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      setCheckedMail([...checkedMail, value]);
    } else {
      setCheckedMail(checkedMail.filter(mailId => mailId !== value));
    }
  };

  return (
    <BodyStyled>
      {mailList.length === 0 && <EmptyContentsStyled>메일이 존재하지 않습니다.</EmptyContentsStyled>}

      <div>
        {mailList.length > 0 &&
          mailList.map(mail => {
            return (
              <MailWrapStyled key={mail.id}>
                <Row alignItems="center" justifyContent="space-between">
                  <RowItem>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      value={mail.id}
                      checked={checkedMail.includes(String(mail.id))}
                    />
                    <MailFromStyled isRead={mail.isRead}>{mail.from}</MailFromStyled>
                  </RowItem>
                  <RowItem>
                    <MailDateStyled>2022.09.16</MailDateStyled>
                  </RowItem>
                </Row>
                <Row alignItems="center">
                  <RowItem xs>
                    <MailTitleStyled isRead={mail.isRead}>{mail.title}</MailTitleStyled>
                  </RowItem>
                </Row>
                <Row alignItems="center">
                  <RowItem xs>
                    <MailContentsStyled>{mail.contents}</MailContentsStyled>
                  </RowItem>
                </Row>
              </MailWrapStyled>
            );
          })}
      </div>
    </BodyStyled>
  );
}
