import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allCheckedAtom, mailListAtom } from '../../../store/mail/index';
import styled from '@emotion/styled';
import RowItem from '../../Grid/RowItem';
import Input from '../../Forms/Input';
import Row from '../../Grid/Row';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Menu from '../../Menu';
import MenuItem from '../../Menu/MenuItem';
import Checkbox from '../../Forms/Checkbox';

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

type FlagType = 'ALL_READ' | 'ALL_UNREAD' | 'ALL_STAR' | 'ALL_UN_STAR';

export default function Header() {
  const [searchMail, setSearchMail] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchMail(e.target.value.trim());
  };

  const [anchorEl, setAnchorEl] = useState<HTMLSpanElement | null>(null);
  const handleMoreClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget instanceof HTMLSpanElement) setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);

  const [mailList, setMailList] = useRecoilState(mailListAtom);
  const handleMenuItemClick = (flag: FlagType) => {
    switch (flag) {
      case 'ALL_READ':
        setMailList(
          mailList.map(mail => {
            return {
              ...mail,
              isRead: true,
            };
          })
        );
        break;
      case 'ALL_UNREAD':
        setMailList(
          mailList.map(mail => {
            return {
              ...mail,
              isRead: false,
            };
          })
        );
        break;
      case 'ALL_STAR':
        setMailList(
          mailList.map(mail => {
            return {
              ...mail,
              isStar: true,
            };
          })
        );
        break;
      case 'ALL_UN_STAR':
        setMailList(
          mailList.map(mail => {
            return {
              ...mail,
              isStar: false,
            };
          })
        );
        break;
    }
    handleMenuClose();
  };

  const [allChecked, setAllChecked] = useRecoilState(allCheckedAtom);
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAllChecked(e.target.checked);
  };

  return (
    <HeaderStyled>
      <Row alignItems="center" justifyContent="space-between" rowGap={1}>
        <RowItem xs={12} sm={6}>
          <Row alignItems="center" columnGap={1}>
            <RowItem>
              <Checkbox onChange={handleCheckboxChange} checked={allChecked} />
            </RowItem>
            <RowItem xs>
              <Input placeholder="메일 검색" value={searchMail} onChange={handleChange} wFull rounded />
            </RowItem>
            <RowItem>
              <span className="icon-hover" onClick={handleMoreClick}>
                <MoreVertOutlinedIcon />
              </span>
              <Menu isOpen={isMenuOpen} anchorEl={anchorEl} onClose={handleMenuClose}>
                <MenuItem onClick={() => handleMenuItemClick('ALL_READ')}>모두 읽은 상태로 표시</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('ALL_UNREAD')}>모두 안읽은 상태로 표시</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('ALL_STAR')}>모두 별표 표시</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('ALL_UN_STAR')}>모두 별표 제거</MenuItem>
              </Menu>
            </RowItem>
          </Row>
        </RowItem>
        <RowItem xs={12} sm={6}>
          <Row alignItems="center" justifyContent="flex-end">
            <RowItem>
              <p className="pagination-info">5개 중 1-10</p>
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
