import MainHeader from './Header';
import MainBody from './Body';
import { MailWrapStyled } from '../common.styles';

export default function MailMain() {
  return (
    <MailWrapStyled>
      <MainHeader />
      <MainBody />
    </MailWrapStyled>
  );
}
