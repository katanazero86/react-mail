import { ChangeEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  allCheckedAtom,
  checkedMailAtom,
  filteredMailListAtom,
  getLabels,
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
import Label from '../../../Icons/Label';

const MainBodyStyled = styled.section`
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
  cursor: pointer;
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
  cursor: pointer;
`;

const MailContentsStyled = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 30px;
  color: #5f6368;
  font-size: 14px;
  cursor: pointer;
`;

export default function MainBody() {
  const navigate = useNavigate();
  const { mailBox } = useParams();
  const labels = useRecoilValue(getLabels);
  const filteredMailList = useRecoilValue(filteredMailListAtom);
  const [mailListFilter, setMailListFilter] = useRecoilState(mailListFilterAtom);
  const [mailList, setMailList] = useRecoilState(mailListAtom);
  const [allChecked, setAllChecked] = useRecoilState(allCheckedAtom);
  const [checkedMail, setCheckedMail] = useRecoilState(checkedMailAtom);

  useEffect(() => {
    setMailListFilter(current => ({ ...current, mailType: mailBox as MailFilterType }));
  }, [mailBox]);

  useEffect(() => {
    if (allChecked) {
      if (checkedMail.length !== filteredMailList.length) {
        setCheckedMail(filteredMailList.map(mail => String(mail.id)));
      }
    } else {
      if (checkedMail.length === filteredMailList.length) {
        setCheckedMail([]);
      }
    }
  }, [allChecked]);

  useEffect(() => {
    if (checkedMail.length === 0) {
      setAllChecked(false);
    } else {
      if (checkedMail.length === filteredMailList.length) {
        setAllChecked(true);
      } else {
        setAllChecked(false);
      }
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

  const handleMailClick = (targetMail: Mail) => {
    navigate(`/mail/${mailListFilter}/${targetMail.id}`);
  };

  return (
    <MainBodyStyled>
      {filteredMailList.length === 0 && <EmptyContentsStyled>메일이 존재하지 않습니다.</EmptyContentsStyled>}

      <div>
        {filteredMailList.length > 0 &&
          filteredMailList.map(mail => {
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
                      <MailFromStyled isRead={mail.isRead} onClick={() => handleMailClick(mail)}>
                        {mail.from}
                      </MailFromStyled>
                    </Row>
                  </RowItem>
                  <RowItem>
                    <MailDateStyled>{mail.date}</MailDateStyled>
                  </RowItem>
                </Row>
                <Row alignItems="center">
                  <RowItem xs>
                    <MailTitleStyled isRead={mail.isRead} onClick={() => handleMailClick(mail)}>
                      {mail.title}
                    </MailTitleStyled>
                  </RowItem>
                </Row>
                <Row alignItems="center" justifyContent="space-between">
                  <RowItem xs={10}>
                    <MailContentsStyled onClick={() => handleMailClick(mail)}>{mail.contents}</MailContentsStyled>
                  </RowItem>
                  <RowItem>
                    {mail.labelId !== null && <Label color={labels.find(label => label.id === mail.labelId)!.color} />}
                  </RowItem>
                </Row>
              </MailWrapStyled>
            );
          })}
      </div>
    </MainBodyStyled>
  );
}
