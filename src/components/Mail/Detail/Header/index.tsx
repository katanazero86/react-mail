import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { mailListAtom } from '../../../../store/mail';
import styled from '@emotion/styled';
import RowItem from '../../../Grid/RowItem';
import Row from '../../../Grid/Row';
import Label from '../../../Icons/Label';
import OutlineStar from '../../../Icons/OutlineStar';
import Star from '../../../Icons/Star';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import LabelMenu from '../../LabelMenu';

const DetailHeaderStyled = styled.header`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  padding: 12px 8px;
`;

const iconColor = { color: '#5f6368' };

export default function DetailHeader() {
  const navigate = useNavigate();
  const { mailId } = useParams();
  const [mailList, setMailList] = useRecoilState(mailListAtom);
  const targetMail = mailList.find(mail => String(mail.id) === mailId)!;

  useEffect(() => {
    setMailList(
      mailList.map(mail => {
        if (targetMail.id === mail.id) {
          return {
            ...mail,
            isRead: true,
          };
        }
        return mail;
      })
    );
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSpamClick = () => {
    // TODO : mail spam fetch
    setMailList(
      mailList.map(mail => {
        if (targetMail.id === mail.id) {
          return {
            ...mail,
            isSpam: true,
          };
        }
        return mail;
      })
    );
    handleBackClick();
  };

  const handleDeleteClick = () => {
    // TODO : mail delete fetch
    setMailList(
      mailList.map(mail => {
        if (targetMail.id === mail.id) {
          return {
            ...mail,
            isDelete: true,
          };
        }
        return mail;
      })
    );
    handleBackClick();
  };

  const handleUnReadClick = () => {
    // TODO : mail unread fetch
    setMailList(
      mailList.map(mail => {
        if (targetMail.id === mail.id) {
          return {
            ...mail,
            isRead: false,
          };
        }
        return mail;
      })
    );
    handleBackClick();
  };

  const handleStarClick = () => {
    // TODO : mail star fetch
    setMailList(
      mailList.map(mail => {
        if (targetMail.id === mail.id) {
          return {
            ...mail,
            isStar: !mail.isStar,
          };
        }
        return mail;
      })
    );
  };

  const handleLabelClick = (labelId: string) => {
    setMailList(
      mailList.map(mail => {
        if (targetMail.id === mail.id) {
          return {
            ...mail,
            labelId: labelId,
          };
        }
        return mail;
      })
    );
  };

  return (
    <DetailHeaderStyled>
      <Row alignItems="center" justifyContent="space-between" rowGap={1}>
        <RowItem>
          <Row alignItems="center">
            <RowItem>
              <span className="icon-hover" onClick={handleBackClick}>
                <ArrowBackIcon sx={iconColor} />
              </span>
            </RowItem>
            <RowItem>
              <span className="icon-hover" onClick={handleSpamClick}>
                <InfoOutlinedIcon sx={iconColor} />
              </span>
            </RowItem>
            <RowItem>
              <span className="icon-hover" onClick={handleDeleteClick}>
                <DeleteOutlineOutlinedIcon sx={iconColor} />
              </span>
            </RowItem>
            <RowItem>
              <span className="icon-hover" onClick={handleUnReadClick}>
                <MarkAsUnreadOutlinedIcon sx={iconColor} />
              </span>
            </RowItem>
            <RowItem>
              <LabelMenu color={iconColor.color} onClick={handleLabelClick} />
            </RowItem>
            <RowItem>
              <span className="icon-hover" onClick={handleStarClick}>
                {targetMail.isStar ? <Star color="red" /> : <OutlineStar color={iconColor.color} />}
              </span>
            </RowItem>
          </Row>
        </RowItem>
      </Row>
    </DetailHeaderStyled>
  );
}
