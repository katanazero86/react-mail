import styled from '@emotion/styled';
import Mail from '../../components/Mail';
import MailMenu from '../../components/Mail/MailMenu';

const MailPageStyled = styled.div`
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 16px 8px;
`;

export default function MailPage() {
  return (
    <MailPageStyled>
      <MailMenu />
      <Mail />
    </MailPageStyled>
  );
}
