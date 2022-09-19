import { useRecoilValue } from 'recoil';
import { allCheckedAtom } from '../../../store/mail';
import styled from '@emotion/styled';
import Checkbox from '../../Forms/Checkbox';
import { ChangeEvent } from 'react';
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

const MailTitleStyled = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default function Body() {
  const allChecked = useRecoilValue(allCheckedAtom);
  console.log(allChecked);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('zzz');
  };

  return (
    <BodyStyled>
      <EmptyContentsStyled>메일이 존재하지 않습니다.</EmptyContentsStyled>

      <div>
        <Row alignItems="center" justifyContent="space-between">
          <RowItem>
            <Checkbox onChange={handleCheckboxChange} name="1" />
            <span>The Postman Team</span>
          </RowItem>
          <RowItem>
            <span>2022.09.16</span>
          </RowItem>
        </Row>
        <Row alignItems="center">
          <RowItem xs>
            <MailTitleStyled>
              Postman v10 is hearasdaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd!
            </MailTitleStyled>
          </RowItem>
        </Row>
        <Row alignItems="center">
          <RowItem>
            <p>블라블라..</p>
          </RowItem>
        </Row>
      </div>
    </BodyStyled>
  );
}
