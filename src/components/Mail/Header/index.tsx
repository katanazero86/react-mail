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
          <Input placeholder="메일 검색" value={searchMail} handleChange={handleChange} wFull rounded />
        </RowItem>
        <RowItem>
          <Row alignItems="center">
            <RowItem xs>
              <p className="pagination-info">30개 중 1-10</p>
            </RowItem>
            <RowItem xs>
              <div className="pagination-arrow">
                <span className="icon-hover">
                  <ChevronLeftIcon fontSize="small" />
                </span>
                <span className="icon-hover">
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
