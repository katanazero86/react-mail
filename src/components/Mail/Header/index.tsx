import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import RowItem from '../../Grid/RowItem';
import Input from '../../Forms/Input';
import Row from '../../Grid/Row';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
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
  border-radius: 8px 8px 0 0;
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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchMail(e.target.value.trim());
  };
  return (
    <HeaderStyled>
      <Row alignItems="center" justifyContent="space-between" rowGap={1}>
        <RowItem xs={12} sm={6}>
          <Row alignItems="center" columnGap={1}>
            <RowItem xs>
              <Input placeholder="메일 검색" value={searchMail} onChange={handleChange} wFull rounded />
            </RowItem>
            <RowItem>
              <span className="icon-hover">
                <MoreVertOutlinedIcon />
              </span>
            </RowItem>
          </Row>
        </RowItem>
        <RowItem xs={12} sm={6}>
          <Row alignItems="center" justifyContent="flex-end">
            <RowItem>
              <p className="pagination-info">30개 중 1-10</p>
            </RowItem>
            <RowItem>
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
