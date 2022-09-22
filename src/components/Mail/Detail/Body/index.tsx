import { ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { mailListAtom } from '../../../../store/mail';
import styled from '@emotion/styled';
import Row from '../../../Grid/Row';
import RowItem from '../../../Grid/RowItem';

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

export default function DetailBody() {
  const { mailId } = useParams();
  const mailList = useRecoilValue(mailListAtom);

  // TODO : targetMail fetch & Read
  const targetMail = mailList.find(mail => String(mail.id) === mailId)!;

  return (
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
      </div>
    </DetailBodyStyled>
  );
}
