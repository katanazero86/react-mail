import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import MailMenu from '../../../components/Mail/MailMenu';

const MailLayoutStyled = styled.div`
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 16px 8px;
`;

export default function MailLayout() {
  return (
    <MailLayoutStyled>
      <MailMenu />
      <Outlet />
    </MailLayoutStyled>
  );
}
