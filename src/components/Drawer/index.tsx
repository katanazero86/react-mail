import styled from '@emotion/styled';
import { ComponentPropsWithoutRef } from 'react';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
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
  margin-left: 4px;
  font-weight: 400;
  height: 23px;
`;

interface DrawerProps extends ComponentPropsWithoutRef<'nav'> {
  isOpen: boolean;

  handleClose(): void;
}

export default function Drawer(props: DrawerProps) {
  const { isOpen, handleClose, ...rest } = props;

  const onClick = () => {
    if (handleClose) {
      handleClose();
    }
  };

  return (
    <DrawerStyled {...rest} isOpen={isOpen} onClick={onClick}>
      <UlStyled>
        <MailWriteStyled className="divider-bottom">
          <Button wFull outline rounded>
            메일쓰기
          </Button>
        </MailWriteStyled>
        <LiStyled>
          <LiItemStyled>
            <MailOutlinedIcon />
            <AnchorStyled>받은 편지함</AnchorStyled>
          </LiItemStyled>
          <LiItemStyled>
            <MailOutlinedIcon />
            <AnchorStyled>받은 편지함</AnchorStyled>
          </LiItemStyled>
        </LiStyled>
      </UlStyled>
    </DrawerStyled>
  );
}
