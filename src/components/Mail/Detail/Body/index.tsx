import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { mailListAtom } from '../../../../store/mail';
import styled from '@emotion/styled';
import Row from '../../../Grid/Row';
import RowItem from '../../../Grid/RowItem';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MenuItem from '../../../Menu/MenuItem';
import Menu from '../../../Menu';
import ComposeMailModal from '../../../Modals/ComposeMailModal';

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
  padding-right: 20px;
  letter-spacing: -0.5px;
  word-break: break-all;
`;

const MailFromAndToStyled = styled.div`
  padding-top: 4px;
  padding-left: 28px;
  font-weight: 500;
  font-size: 14px;
  color: #333;
`;

const MailFromAndToAddressStyled = styled.span`
  padding-left: 8px;
  letter-spacing: -0.5px;
  font-weight: 400;
`;

const MailDateStyled = styled.p`
  color: #333;
  letter-spacing: -0.5px;
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  padding-right: 20px;
`;

const MailFromAndToWrapStyled = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  margin-left: -8px;
  margin-right: -8px;
`;

const MailActions = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-end;
`;

const MailContents = styled.div`
  padding: 20px;
  word-break: break-all;
  font-size: 14px;
  white-space: pre-line;
`;

const MailForm = styled.div`
  padding: 20px;
`;

export default function DetailBody() {
  const { mailId } = useParams();
  const mailList = useRecoilValue(mailListAtom);

  // TODO : targetMail fetch & Read
  const targetMail = mailList.find(mail => String(mail.id) === mailId)!;

  const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
  const handleMoreClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget instanceof HTMLSpanElement) setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);
  const [actions, setActions] = useState({
    isReply: false,
    isRelay: false,
    replyAddress: '',
  });
  const handleMenuItemClick = (flag: 'REPLY' | 'RELAY' | 'DELETE') => {
    switch (flag) {
      case 'REPLY':
        setActions(current => ({ ...current, isRelay: false, isReply: true, replyAddress: targetMail.fromAddress }));
        openComposeMailModal();
        break;
      case 'RELAY':
        setActions(current => ({ ...current, isRelay: true, isReply: false, replyAddress: '' }));
        openComposeMailModal();
        break;
      case 'DELETE':
        break;
    }

    handleMenuClose();
  };

  const [isComposeMailOpen, setIsComposeMailOpen] = useState(false);
  const openComposeMailModal = () => {
    setIsComposeMailOpen(true);
  };
  const closeComposeMailModal = () => {
    setIsComposeMailOpen(false);
  };

  return (
    <>
      <DetailBodyStyled>
        <div>
          <MailTitleStyled>{targetMail.title}</MailTitleStyled>
          <MailFromAndToWrapStyled>
            <Row alignItems="center">
              <RowItem xs={12}>
                <MailFromAndToStyled>
                  FROM
                  <MailFromAndToAddressStyled>
                    {targetMail.from} &lt;{targetMail.fromAddress}&gt;
                  </MailFromAndToAddressStyled>
                </MailFromAndToStyled>
              </RowItem>
              <RowItem xs={12}>
                <MailFromAndToStyled>
                  TO
                  <MailFromAndToAddressStyled>zero86 &lt;test@naver.com&gt;</MailFromAndToAddressStyled>
                </MailFromAndToStyled>
              </RowItem>
              <RowItem xs={12}>
                <MailDateStyled>{targetMail.date}</MailDateStyled>
              </RowItem>
            </Row>
          </MailFromAndToWrapStyled>
          <MailActions>
            <span className="icon-hover">
              <ReplyIcon />
            </span>
            <span className="icon-hover" onClick={handleMoreClick}>
              <MoreVertOutlinedIcon />
            </span>
            <Menu isOpen={isMenuOpen} anchorEl={anchorEl} onClose={handleMenuClose}>
              <MenuItem onClick={() => handleMenuItemClick('REPLY')}>답장</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('RELAY')}>전달</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('DELETE')}>삭제</MenuItem>
            </Menu>
          </MailActions>
          <MailContents dangerouslySetInnerHTML={{ __html: targetMail.contents }} />
        </div>
      </DetailBodyStyled>
      <ComposeMailModal
        isOpen={isComposeMailOpen}
        onClose={closeComposeMailModal}
        isReply={actions.isReply}
        isRelay={actions.isRelay}
        replyAddress={actions.replyAddress}
      />
    </>
  );
}
