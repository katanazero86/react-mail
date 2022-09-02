import { useState } from 'react';
import styled from '@emotion/styled';
import RowItem from '../../Grid/RowItem';
import Row from '../../Grid/Row';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '../../Drawer';

const MailMenuStyled = styled.div`
  margin-bottom: 16px;

  .menu-title {
    font-size: 16px;
    margin-left: 16px;
  }
`;

export default function MailMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <MailMenuStyled>
        <Row alignItems="center">
          <RowItem>
            <Row alignItems={'center'}>
              <span className="icon-hover" onClick={handleMenuClick}>
                <MenuIcon />
              </span>
            </Row>
          </RowItem>
          <RowItem>
            <h2 className="menu-title">Mail App</h2>
          </RowItem>
        </Row>
      </MailMenuStyled>
      <Drawer isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
}
