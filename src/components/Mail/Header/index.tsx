import { useState } from 'react';
import styled from '@emotion/styled';
import RowItem from '../../Grid/RowItem';
import Input from '../../Forms/Input';
import Row from '../../Grid/Row';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HeaderStyled = styled.header`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border-radius: 8px;
  padding: 12px 8px;

  .pagination-info {
    color: #111827;
    font-size: 12px;
    padding: 0 6px;
    letter-spacing: -0.5px;
  }

  .pagination-arrow {
    display: flex;
    align-items: center;
    span {
      cursor: pointer;
      position: relative;
      margin: 0 6px;
      display: flex;
      align-items: center;
      &::before {
        content: '';
        display: block;
        opacity: 0;
        position: absolute;
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        bottom: -6px;
        left: -6px;
        right: -6px;
        top: -6px;
        background: none;
        border-radius: 50%;
        box-sizing: border-box;
        transform: scale(0);
        transition-property: transform, opacity;
      }
      &:hover::before {
        background-color: rgba(32, 33, 36, 0.059);
        border: none;
        box-shadow: none;
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

export default function Header() {
  const [searchMail, setSearchMail] = useState<string | number>('');
  const handleChange = (targetValue: string | number) => {
    setSearchMail(targetValue);
  };
  return (
    <HeaderStyled>
      <Row alignItems="center" justifyContent="space-between">
        <RowItem xs={6}>
          <Input placeholder="메일 검색" value={searchMail} handleChange={handleChange} wFull />
        </RowItem>
        <RowItem>
          <Row alignItems="center">
            <RowItem xs>
              <p className="pagination-info">30개 중 1-10</p>
            </RowItem>
            <RowItem xs>
              <div className="pagination-arrow">
                <span>
                  <ChevronLeftIcon fontSize="small" />
                </span>
                <span>
                  <ChevronRightIcon fontSize="small" />
                </span>
              </div>
            </RowItem>
          </Row>
        </RowItem>
      </Row>
    </HeaderStyled>
  );
}
