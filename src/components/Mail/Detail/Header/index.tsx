import styled from '@emotion/styled';
import RowItem from '../../../Grid/RowItem';
import Row from '../../../Grid/Row';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Menu from '../../../Menu';
import MenuItem from '../../../Menu/MenuItem';
import Checkbox from '../../../Forms/Checkbox';
import Label from '../../../Icons/Label';
import OutlineStar from '../../../Icons/OutlineStar';

const HeaderStyled = styled.header`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  padding: 12px 8px;

  .pagination-info {
    color: #111827;
    font-size: 12px;
    padding: 0 6px;
    letter-spacing: -0.5px;
  }

  .pagination-arrow {
    display: flex;
    align-items: center;
  }
`;

type FlagType = 'ALL_READ' | 'ALL_UNREAD' | 'ALL_STAR' | 'ALL_UN_STAR';
type CheckedFlagType = 'READ' | 'UNREAD' | 'STAR' | 'UN_STAR' | 'SPAM' | 'UN_SPAM' | 'DELETE';

const iconColor = { color: '#5f6368' };

export default function DetailHeader() {
  return (
    <HeaderStyled>
      <Row alignItems="center" justifyContent="space-between" rowGap={1}>
        <RowItem>
          <Row alignItems="center">
            <RowItem>
              <span className="icon-hover">
                <ArrowBackIcon sx={iconColor} />
              </span>
            </RowItem>
            <RowItem>
              <span className="icon-hover">
                <InfoOutlinedIcon sx={iconColor} />
              </span>
            </RowItem>
            <RowItem>
              <span className="icon-hover">
                <DeleteOutlineOutlinedIcon sx={iconColor} />
              </span>
            </RowItem>
            <RowItem>
              <span className="icon-hover">
                <MarkAsUnreadOutlinedIcon sx={iconColor} />
              </span>
            </RowItem>
            <RowItem>
              <span className="icon-hover">
                <Label color={iconColor.color} />
              </span>
            </RowItem>
            <RowItem>
              <span className="icon-hover">
                <OutlineStar color={iconColor.color} />
              </span>
            </RowItem>
          </Row>
        </RowItem>
      </Row>
    </HeaderStyled>
  );
}
