import { ChangeEvent, MouseEvent, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  allCheckedAtom,
  checkedMailAtom,
  filteredMailLengthAtom,
  mailListAtom,
  mailListFilterAtom,
} from '../../../../store/mail';
import styled from '@emotion/styled';
import RowItem from '../../../Grid/RowItem';
import Input from '../../../Forms/Input';
import Row from '../../../Grid/Row';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Menu from '../../../Menu';
import MenuItem from '../../../Menu/MenuItem';
import Checkbox from '../../../Forms/Checkbox';
import Label from '../../../Icons/Label';

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
type CheckedFlagType = 'READ' | 'UNREAD' | 'STAR' | 'UN_STAR' | 'SPAM' | 'UN_SPAM' | 'DELETE';

export default function MainHeader() {
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

  const mailListFilter = useRecoilValue(mailListFilterAtom);
  const filteredMailLength = useRecoilValue(filteredMailLengthAtom);
  const checkedMail = useRecoilValue(checkedMailAtom);
  const [mailList, setMailList] = useRecoilState(mailListAtom);
  const [allChecked, setAllChecked] = useRecoilState(allCheckedAtom);
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAllChecked(e.target.checked);
  };
  const handleMenuItemClick = (flag: FlagType | CheckedFlagType) => {
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
      case 'READ':
        setMailList(
          mailList.map(mail => {
            if (checkedMail.includes(String(mail.id))) {
              return {
                ...mail,
                isRead: true,
              };
            }
            return mail;
          })
        );
        break;
      case 'UNREAD':
        setMailList(
          mailList.map(mail => {
            if (checkedMail.includes(String(mail.id))) {
              return {
                ...mail,
                isRead: false,
              };
            }
            return mail;
          })
        );
        break;
      case 'STAR':
        setMailList(
          mailList.map(mail => {
            if (checkedMail.includes(String(mail.id))) {
              return {
                ...mail,
                isStar: true,
              };
            }
            return mail;
          })
        );
        break;
      case 'UN_STAR':
        setMailList(
          mailList.map(mail => {
            if (checkedMail.includes(String(mail.id))) {
              return {
                ...mail,
                isStar: false,
              };
            }
            return mail;
          })
        );
        break;
      case 'SPAM':
        setMailList(
          mailList.map(mail => {
            if (checkedMail.includes(String(mail.id))) {
              return {
                ...mail,
                isSpam: true,
              };
            }
            return mail;
          })
        );
        break;
      case 'UN_SPAM':
        setMailList(
          mailList.map(mail => {
            if (checkedMail.includes(String(mail.id))) {
              return {
                ...mail,
                isSpam: false,
              };
            }
            return mail;
          })
        );
        break;
      case 'DELETE':
        setMailList(
          mailList.map(mail => {
            if (checkedMail.includes(String(mail.id))) {
              return {
                ...mail,
                isDelete: true,
              };
            }
            return mail;
          })
        );
        break;
    }
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    if (
      confirm(`메일을 삭제하면 복구할 수 없습니다.
      
메일을 삭제하시겠습니까?   
   `)
    ) {
      // TODO : fetch delete mail
      setMailList(mailList.filter(mail => !checkedMail.includes(String(mail.id))));
    }
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
              <Row alignItems="center">
                {checkedMail.length > 0 && mailListFilter === 'trash' && (
                  <RowItem>
                    <span className="icon-hover" onClick={handleDeleteClick}>
                      <DeleteOutlineIcon />
                    </span>
                  </RowItem>
                )}
                {checkedMail.length > 0 && mailListFilter !== 'trash' && (
                  <RowItem>
                    <span className="icon-hover" onClick={handleMoreClick}>
                      <Label />
                    </span>
                  </RowItem>
                )}
                <RowItem>
                  <span className="icon-hover" onClick={handleMoreClick}>
                    <MoreVertOutlinedIcon />
                  </span>
                </RowItem>
              </Row>
              <Menu isOpen={isMenuOpen} anchorEl={anchorEl} onClose={handleMenuClose}>
                {checkedMail.length > 0 ? (
                  <>
                    <MenuItem onClick={() => handleMenuItemClick('READ')}>읽은 상태로 표시</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('UNREAD')}>안읽은 상태로 표시</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('STAR')}>별표 표시</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('UN_STAR')}>별표 제거</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('SPAM')}>스팸 처리</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('SPAM')}>스팸 해제</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('DELETE')}>삭제</MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={() => handleMenuItemClick('ALL_READ')}>모두 읽은 상태로 표시</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('ALL_UNREAD')}>모두 안읽은 상태로 표시</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('ALL_STAR')}>모두 별표 표시</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('ALL_UN_STAR')}>모두 별표 제거</MenuItem>
                  </>
                )}
              </Menu>
            </RowItem>
          </Row>
        </RowItem>
        <RowItem xs={12} sm={6}>
          <Row alignItems="center" justifyContent="flex-end">
            <RowItem>
              <p className="pagination-info">{filteredMailLength}개 중 1-10</p>
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
