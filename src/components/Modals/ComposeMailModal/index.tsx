import { KeyboardEvent, ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import Row from '../../Grid/Row';
import RowItem from '../../Grid/RowItem';
import Input from '../../Forms/Input';
import Textarea from '../../Forms/Textarea';
import {
  FormLabel,
  ModalActionsStyled,
  ModalBodyStyled,
  ModalHeaderStyled,
  ModalHeaderTitle,
  ModalOverlayStyled,
  ModalWrapStyled,
} from '../common.modal.styles';
import Close from '../../Icons/Close';
import Button from '../../Forms/Button';

interface ComposeMailModalProps {
  isOpen: boolean;
  onClose(): void;
  isReply?: boolean;
  isRelay?: boolean;
  replyAddress?: string;
}

export default function ComposeMailModal({
  isOpen,
  onClose,
  isReply = false,
  isRelay = false,
  replyAddress = '',
}: ComposeMailModalProps) {
  useEffect(() => {
    if (isOpen) {
      setMailForm({
        recipient: replyAddress,
        cc: '',
        bcc: '',
        title: '',
        contents: '',
      });
    } else {
      setMailForm({
        recipient: '',
        cc: '',
        bcc: '',
        title: '',
        contents: '',
      });
    }
  }, [isOpen]);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [mailForm, setMailForm] = useState({
    recipient: '',
    cc: '',
    bcc: '',
    title: '',
    contents: '',
  });
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Space') e.preventDefault();
  };
  const handleMailFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMailForm(current => ({
      ...current,
      [name]: name !== 'contents' ? value.trim() : value,
    }));
  };

  const handleSendClick = () => {
    const mailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (mailForm.recipient === '') {
      alert('?????? ?????? ????????? ????????? ??????????????????.');
      return false;
    } else {
      if (mailForm.recipient.indexOf(',') === -1) {
        if (!mailRegExp.test(mailForm.recipient)) {
          alert('?????? ?????? ????????? ????????? ???????????? ??????????????????.');
          return false;
        }
      } else {
        const recipientArr = mailForm.recipient.split(',');
        for (const recipient of recipientArr) {
          if (!mailRegExp.test(recipient)) {
            alert('?????? ?????? ????????? ????????? ???????????? ??????????????????.');
            return false;
          }
        }
      }
    }

    if (mailForm.cc !== '') {
      if (mailForm.cc.indexOf(',') === -1) {
        if (!mailRegExp.test(mailForm.cc)) {
          alert('?????? ????????? ????????? ???????????? ??????????????????.');
          return false;
        }
      } else {
        const ccArr = mailForm.cc.split(',');
        for (const cc of ccArr) {
          if (!mailRegExp.test(cc)) {
            alert('?????? ????????? ????????? ???????????? ??????????????????.');
            return false;
          }
        }
      }
    }

    if (mailForm.bcc !== '') {
      if (mailForm.bcc.indexOf(',') === -1) {
        if (!mailRegExp.test(mailForm.bcc)) {
          alert('?????? ?????? ????????? ????????? ???????????? ??????????????????.');
          return false;
        }
      } else {
        const bccArr = mailForm.bcc.split(',');
        for (const bcc of bccArr) {
          if (!mailRegExp.test(bcc)) {
            alert('?????? ?????? ????????? ????????? ???????????? ??????????????????.');
            return false;
          }
        }
      }
    }

    if (mailForm.title === '') {
      alert('????????? ??????????????????.');
      return false;
    }

    if (mailForm.contents === '') {
      alert('????????? ??????????????????.');
      return false;
    }

    // TODO : send mail
    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlayStyled onClick={handleOverlayClick}>
          <ModalWrapStyled>
            <ModalHeaderStyled>
              <ModalHeaderTitle>
                {isReply && '????????????'}
                {isRelay && '????????????'}
                {!isReply && !isRelay && '??? ?????? ??????'}
              </ModalHeaderTitle>
              <span className="icon-hover" onClick={handleCloseClick}>
                <Close />
              </span>
            </ModalHeaderStyled>
            <ModalBodyStyled>
              <Row columnGap={1} rowGap={2} alignItems="center">
                <RowItem xs={2} gutter={1}>
                  <FormLabel>?????? ??????*</FormLabel>
                </RowItem>
                <RowItem xs={10} gutter={1}>
                  <Input
                    rounded
                    wFull
                    type="email"
                    multiple
                    name="recipient"
                    value={mailForm.recipient}
                    onKeyDown={handleKeyDown}
                    onChange={handleMailFormChange}
                    placeholder="hong@naver.com, chun@daum.net"
                  />
                </RowItem>
                <RowItem xs={2} gutter={1}>
                  <FormLabel>??????</FormLabel>
                </RowItem>
                <RowItem xs={10} gutter={1}>
                  <Input
                    rounded
                    wFull
                    type="email"
                    multiple
                    name="cc"
                    value={mailForm.cc}
                    onKeyDown={handleKeyDown}
                    onChange={handleMailFormChange}
                    placeholder="cc1@naver.com, cc2n@daum.net"
                  />
                </RowItem>
                <RowItem xs={2} gutter={1}>
                  <FormLabel>?????? ??????</FormLabel>
                </RowItem>
                <RowItem xs={10} gutter={1}>
                  <Input
                    rounded
                    wFull
                    type="email"
                    multiple
                    name="bcc"
                    value={mailForm.bcc}
                    onKeyDown={handleKeyDown}
                    onChange={handleMailFormChange}
                    placeholder="bcc1@naver.com, bcc2@daum.net"
                  />
                </RowItem>
                <RowItem xs={2} gutter={1}>
                  <FormLabel>??????*</FormLabel>
                </RowItem>
                <RowItem xs={10} gutter={1}>
                  <Input rounded wFull name="title" value={mailForm.title} onChange={handleMailFormChange} />
                </RowItem>
                <RowItem xs={12}>
                  <Textarea rows={10} wFull name="contents" value={mailForm.contents} onChange={handleMailFormChange} />
                </RowItem>
              </Row>
            </ModalBodyStyled>
            <ModalActionsStyled>
              <Button rounded onClick={handleSendClick}>
                ?????????
              </Button>
            </ModalActionsStyled>
          </ModalWrapStyled>
        </ModalOverlayStyled>
      )}
    </>
  );
}
