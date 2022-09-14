import { ComponentPropsWithoutRef, MouseEvent } from 'react';
import styled from '@emotion/styled';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Button from '../Forms/Button';

const DrawerStyled = styled.nav<Partial<DrawerProps>>`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
`;
const UlStyled = styled.ul`
  background-color: #ffffff;
  width: 280px;
  margin: 0;
  padding: 24px 0;
`;
const MailWriteStyled = styled.div`
  padding: 0 12px 24px 12px;
  margin-bottom: 24px;
`;
const LiStyled = styled.li`
  font-size: 14px;
  color: #111827;
  cursor: pointer;
  padding-right: 12px;
`;
const LiItemStyled = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  &:hover {
    border-radius: 0px 30px 30px 0px;
    background-color: rgba(10, 143, 220, 0.1);
  }
`;
const AnchorStyled = styled.a`
  margin-left: 14px;
  font-weight: 400;
  height: 23px;
  text-decoration: none;
  color: #111827;
`;

interface DrawerProps extends ComponentPropsWithoutRef<'nav'> {
  isOpen: boolean;

  handleClose(): void;
}

export default function Drawer(props: DrawerProps) {
  const { isOpen, handleClose, ...rest } = props;

  const onClose = () => {
    if (handleClose) {
      handleClose();
    }
  };

  const handleAnchorClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { path } = e.currentTarget.dataset as { path: string };
    console.log(path);
  };

  return (
    <DrawerStyled {...rest} isOpen={isOpen} onClick={onClose}>
      <UlStyled>
        <MailWriteStyled className="divider-bottom">
          <Button wFull outline rounded>
            메일쓰기
          </Button>
        </MailWriteStyled>
        <LiStyled>
          <LiItemStyled onClick={handleAnchorClick} data-path="inbox">
            <MailOutlinedIcon />
            <AnchorStyled href="#">받은 편지함</AnchorStyled>
          </LiItemStyled>
          <LiItemStyled onClick={handleAnchorClick} data-path="sent">
            <SendOutlinedIcon />
            <AnchorStyled href="">보낸 편지함</AnchorStyled>
          </LiItemStyled>
          <LiItemStyled onClick={handleAnchorClick} data-path="starred">
            <StarBorderOutlinedIcon />
            <AnchorStyled href="">별표 편지함</AnchorStyled>
          </LiItemStyled>
          <LiItemStyled onClick={handleAnchorClick} data-path="spam">
            <InfoOutlinedIcon />
            <AnchorStyled href="">스팸함</AnchorStyled>
          </LiItemStyled>
          <LiItemStyled onClick={handleAnchorClick} data-path="trash">
            <DeleteOutlineOutlinedIcon />
            <AnchorStyled href="">휴지통</AnchorStyled>
          </LiItemStyled>
        </LiStyled>
      </UlStyled>
    </DrawerStyled>
  );
}
