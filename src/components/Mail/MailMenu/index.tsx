import styled from '@emotion/styled';
import RowItem from '../../Grid/RowItem';
import Row from '../../Grid/Row';
import MenuIcon from '@mui/icons-material/Menu';

const MenuStyled = styled.div`
  margin-bottom: 16px;

  .menu-title {
    font-size: 16px;
    margin-left: 16px;
  }
`;

export default function Menu() {
  return (
    <MenuStyled>
      <Row alignItems="center">
        <RowItem>
          <Row alignItems={'center'}>
            <MenuIcon />
          </Row>
        </RowItem>
        <RowItem>
          <h2 className="menu-title">Mail App</h2>
        </RowItem>
      </Row>
    </MenuStyled>
  );
}
