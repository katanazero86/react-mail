import { MailWrapStyled } from '../common.styles';
import DetailHeader from './Header';
import DetailBody from './Body';

export default function MailDetail() {
  return (
    <MailWrapStyled>
      <DetailHeader />
      <DetailBody />
    </MailWrapStyled>
  );
}
