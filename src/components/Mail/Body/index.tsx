import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { allCheckedAtom, checkedMailAtom, mailListAtom } from '../../../store/mail';
import { Mail } from '../../../store/mail/types';
import styled from '@emotion/styled';
import Checkbox from '../../Forms/Checkbox';
import Row from '../../Grid/Row';
import RowItem from '../../Grid/RowItem';
import OutlineStar from '../../Icons/OutlineStar';
import Star from '../../Icons/Star';
import { useParams } from 'react-router-dom';

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

const MailStarWrapStyled = styled.span`
  margin-left: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const MailFromStyled = styled.span<{ isRead: boolean }>`
  padding-left: 5px;
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
  const { mailBox } = useParams();
  const [resultMailList, setResultMailList] = useState<Mail[]>([]);
  const [mailList, setMailList] = useRecoilState(mailListAtom);
  const [allChecked, setAllChecked] = useRecoilState(allCheckedAtom);
  const [checkedMail, setCheckedMail] = useRecoilState(checkedMailAtom);

  useEffect(() => {
    switch (mailBox) {
      case 'starred':
        setResultMailList(
          mailList.filter(mail => {
            if (mail.isStar) {
              return true;
            } else {
              return false;
            }
          })
        );
        break;
      case 'spam':
        setResultMailList(
          mailList.filter(mail => {
            if (mail.isSpam) {
              return true;
            } else {
              return false;
            }
          })
        );
        break;
      case 'trash':
        setResultMailList(
          mailList.filter(mail => {
            if (mail.isDelete) {
              return true;
            } else {
              return false;
            }
          })
        );
        break;
      default:
        setResultMailList(
          mailList.filter(mail => {
            if (!mail.isSpam && !mail.isDelete) {
              return true;
            } else {
              return false;
            }
          })
        );
    }
  }, [mailBox, mailList]);

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

  const handleStarClick = (targetMail: Mail) => {
    setMailList(
      mailList.map(mail => {
        if (mail.id === targetMail.id) {
          return {
            ...mail,
            isStar: !mail.isStar,
          };
        }
        return mail;
      })
    );
  };

  return (
    <BodyStyled>
      {resultMailList.length === 0 && <EmptyContentsStyled>메일이 존재하지 않습니다.</EmptyContentsStyled>}

      <div>
        {resultMailList.length > 0 &&
          resultMailList.map(mail => {
            return (
              <MailWrapStyled key={mail.id}>
                <Row alignItems="center" justifyContent="space-between">
                  <RowItem>
                    <Row alignItems="center">
                      <Checkbox
                        onChange={handleCheckboxChange}
                        value={mail.id}
                        checked={checkedMail.includes(String(mail.id))}
                      />
                      <MailStarWrapStyled>
                        <span className="icon-hover" onClick={() => handleStarClick(mail)}>
                          {mail.isStar ? <Star color="red" /> : <OutlineStar />}
                        </span>
                      </MailStarWrapStyled>
                      <MailFromStyled isRead={mail.isRead}>{mail.from}</MailFromStyled>
                    </Row>
                  </RowItem>
                  <RowItem>
                    <MailDateStyled>{mail.date}</MailDateStyled>
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
