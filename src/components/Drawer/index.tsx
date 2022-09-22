import { ComponentPropsWithoutRef, MouseEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { checkedMailAtom, getLabels, labelsAtom, mailListFilterAtom } from '../../store/mail';
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Forms/Button';
import Label from '../Icons/Label';
import ComposeMailModal from '../Modals/ComposeMailModal';
import LabelModal from '../Modals/LabelModal';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';

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
const LiItemStyled = styled.div<{ active?: boolean }>`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  border-radius: 0 30px 30px 0;
  background-color: ${props => (props.active ? 'rgba(10, 143, 220, 0.1)' : 'transparent')};
  font-weight: ${props => (props.active ? 500 : 400)};
  &:hover {
    background-color: rgba(10, 143, 220, 0.1);
  }
`;
const AnchorStyled = styled.a`
  margin-left: 14px;
  height: 23px;
  text-decoration: none;
  color: #111827;
  font-weight: inherit;
`;
const LabelsStyled = styled.div`
  padding: 0 12px 0 0;
`;
const LabelsHeaderStyled = styled.div`
  padding: 0 12px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LabelsBodyStyled = styled.ul`
  padding: 12px 0;
  margin: 0;
`;
const LabelsItemStyled = styled.li<{ active?: boolean }>`
  list-style: none;
  padding: 6px 12px;
  margin: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0 30px 30px 0;
  background-color: ${props => (props.active ? 'rgba(10, 143, 220, 0.1)' : 'transparent')};
  font-weight: ${props => (props.active ? 500 : 400)};
  &:hover {
    background-color: rgba(10, 143, 220, 0.1);
  }
`;
const LabelsItemText = styled.p`
  letter-spacing: -0.2px;
  padding-left: 14px;
  font-size: 14px;
  height: 22px;
  display: flex;
  align-items: center;
`;

interface DrawerProps extends ComponentPropsWithoutRef<'nav'> {
  isOpen: boolean;

  handleClose(): void;
}

export default function Drawer(props: DrawerProps) {
  const navigate = useNavigate();
  const [mailListFilter, setMailListFilter] = useRecoilState(mailListFilterAtom);
  const checkedMail = useSetRecoilState(checkedMailAtom);
  const { mailBox } = useParams();
  const { isOpen, handleClose, ...rest } = props;

  const onClose = () => {
    if (handleClose) {
      handleClose();
    }
  };

  const handleAnchorClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { path } = e.currentTarget.dataset as { path: string };
    checkedMail([]);
    setMailListFilter(current => ({ ...current, labelId: null }));
    navigate(`/mail/${path}`);
  };

  const [isComposeMailOpen, setIsComposeMailOpen] = useState(false);
  const openComposeMailModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsComposeMailOpen(true);
  };
  const closeComposeMailModal = () => {
    setIsComposeMailOpen(false);
  };

  const [isLabelOpen, setIsLabelOpen] = useState(false);
  const openLabelModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsLabelOpen(true);
  };
  const closeLabelModal = () => {
    setIsLabelOpen(false);
  };

  const [editLabel, setEditLabel] = useState({ isEdit: false, targetLabel: undefined });
  const setLabels = useSetRecoilState(labelsAtom);
  const labels = useRecoilValue(getLabels);
  const createLabel = (targetLabel: any) => {
    // TODO : create label fetch
    targetLabel.id = uuidv4();
    setLabels([...labels, targetLabel]);
    setIsLabelOpen(false);
  };
  const updateLabel = (targetLabel: any) => {
    // TODO : update label fetch
    const labelsCopy = [...labels];
    const index = labelsCopy.findIndex(label => label.id === targetLabel.id)!;
    if (index !== -1) {
      labelsCopy[index] = {
        ...labelsCopy[index],
        name: targetLabel.name,
        color: targetLabel.color,
      };
      setLabels([...labelsCopy]);
      setIsLabelOpen(false);
    }
  };

  const handleLabelClick = (labelId: string) => {
    if (mailListFilter.labelId === labelId) {
      setMailListFilter(current => ({ ...current, labelId: null }));
    } else {
      setMailListFilter(current => ({ ...current, labelId: labelId }));
    }
  };

  return (
    <>
      <DrawerStyled {...rest} isOpen={isOpen} onClick={onClose}>
        <UlStyled>
          <MailWriteStyled className="divider-bottom">
            <Button wFull outline rounded onClick={openComposeMailModal}>
              메일쓰기
            </Button>
          </MailWriteStyled>
          <LiStyled>
            <LiItemStyled onClick={handleAnchorClick} data-path="inbox" active={mailBox === 'inbox'}>
              <MailOutlinedIcon />
              <AnchorStyled href="#">받은 편지함</AnchorStyled>
            </LiItemStyled>
            <LiItemStyled onClick={handleAnchorClick} data-path="sent" active={mailBox === 'sent'}>
              <SendOutlinedIcon />
              <AnchorStyled href="">보낸 편지함</AnchorStyled>
            </LiItemStyled>
            <LiItemStyled onClick={handleAnchorClick} data-path="starred" active={mailBox === 'starred'}>
              <StarBorderOutlinedIcon />
              <AnchorStyled href="">별표 편지함</AnchorStyled>
            </LiItemStyled>
            <LiItemStyled onClick={handleAnchorClick} data-path="spam" active={mailBox === 'spam'}>
              <InfoOutlinedIcon />
              <AnchorStyled href="">스팸함</AnchorStyled>
            </LiItemStyled>
            <LiItemStyled onClick={handleAnchorClick} data-path="trash" active={mailBox === 'trash'}>
              <DeleteOutlineOutlinedIcon />
              <AnchorStyled href="">휴지통</AnchorStyled>
            </LiItemStyled>
          </LiStyled>
          <LabelsStyled>
            <LabelsHeaderStyled>
              <h4>Labels</h4>
              <span className="icon-hover" onClick={openLabelModal}>
                <AddIcon />
              </span>
            </LabelsHeaderStyled>
            <LabelsBodyStyled>
              {labels.length > 0 &&
                labels.map(label => (
                  <LabelsItemStyled
                    key={label.id}
                    active={mailListFilter.labelId === label.id}
                    onClick={() => handleLabelClick(label.id)}
                  >
                    <Label color={label.color} />
                    <LabelsItemText>{label.name}</LabelsItemText>
                  </LabelsItemStyled>
                ))}
            </LabelsBodyStyled>
          </LabelsStyled>
        </UlStyled>
      </DrawerStyled>
      <ComposeMailModal isOpen={isComposeMailOpen} onClose={closeComposeMailModal} />
      <LabelModal
        isOpen={isLabelOpen}
        onClose={closeLabelModal}
        isEdit={editLabel.isEdit}
        targetLabel={editLabel.targetLabel}
        onConfirm={editLabel.isEdit ? updateLabel : createLabel}
      />
    </>
  );
}
