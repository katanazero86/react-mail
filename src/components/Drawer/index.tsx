import styled from '@emotion/styled';
import { ComponentPropsWithoutRef } from 'react';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

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
const LiStyled = styled.li`
  font-size: 14px;
  color: #111827;
  cursor: pointer;
  padding-right: 12px;
`;
const LiItem = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  > a {
    margin-left: 4px;
    font-weight: 400;
  }
  &:hover {
    border-radius: 0px 30px 30px 0px;
    background-color: rgba(10, 143, 220, 0.1);
  }
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
        <div
          className="divider-bottom"
          style={{
            padding: '12px',
            marginBottom: '12px',
          }}
        >
          <button>메일쓰기</button>
        </div>
        <LiStyled>
          <LiItem>
            <MailOutlinedIcon />
            <a>받은 편지함</a>
          </LiItem>
          <LiItem>
            <MailOutlinedIcon />
            <a>받은 편지함</a>
          </LiItem>
        </LiStyled>
      </UlStyled>
    </DrawerStyled>
  );
}
