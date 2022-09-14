import styled from '@emotion/styled';
import Header from './Header';
import Body from './Body';

const MailStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export default function Mail() {
  return (
    <MailStyled>
      <Header />
      <Body />
    </MailStyled>
  );
}
