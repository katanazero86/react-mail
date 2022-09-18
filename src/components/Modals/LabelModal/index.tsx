import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Row from '../../Grid/Row';
import RowItem from '../../Grid/RowItem';
import Input from '../../Forms/Input';
import {
  FormLabel,
  ModalActionsStyled,
  ModalBodyStyled,
  ModalHeaderStyled,
  ModalHeaderTitle,
  ModalOverlayStyled,
  ModalWrapStyled,
} from '../common.modal.styles';
import Close from '../../Icons/Close';
import Button from '../../Forms/Button';

const LabelColorStyled = styled.span<{ color: string; selected: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.color};
  border: ${props => (props.selected ? '2px solid black' : 'none')};
  &:first-of-type {
    margin-right: 4px;
  }
  &:not(:first-of-type) {
    margin: 0 4px;
  }
`;

type LabelType = { id: string; name: string; color: string };

interface LabelModalProps {
  isOpen: boolean;
  onClose(): void;
  isEdit?: boolean;
  targetLabel?: LabelType;
  onConfirm(targetLabel: LabelType): void;
}

export default function LabelModal({ isOpen, onClose, isEdit, targetLabel = undefined, onConfirm }: LabelModalProps) {
  useEffect(() => {
    if (isOpen) {
      if (isEdit && targetLabel !== undefined) {
        setLabelForm({
          ...targetLabel,
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setLabelForm({
        id: '',
        name: '',
        color: '',
      });
    }
  }, [isOpen]);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [labelForm, setLabelForm] = useState({
    id: '',
    name: '',
    color: '',
  });
  const handleLabelFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLabelForm(current => ({
      ...current,
      [name]: value.trim(),
    }));
  };
  const handleLabelColorClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.target instanceof HTMLSpanElement) {
      const { color } = e.target.dataset as { color: string };
      setLabelForm(current => ({
        ...current,
        color: color,
      }));
    }
  };

  const handleConfirmClick = () => {
    if (labelForm.name === '') {
      alert('라벨명을 입력해주세요.');
      return false;
    }

    if (labelForm.color === '') {
      alert('라벨 색상을 선택해주세요.');
      return false;
    }

    console.log('zzz');

    onConfirm({ ...labelForm });
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlayStyled onClick={handleOverlayClick}>
          <ModalWrapStyled height={280}>
            <ModalHeaderStyled>
              <ModalHeaderTitle>{isEdit ? '라벨 수정' : '새 라벨'}</ModalHeaderTitle>
              <span className="icon-hover" onClick={handleCloseClick}>
                <Close />
              </span>
            </ModalHeaderStyled>
            <ModalBodyStyled>
              <Row columnGap={1} rowGap={2} alignItems="center">
                <RowItem xs={2} gutter={1}>
                  <FormLabel>라벨명*</FormLabel>
                </RowItem>
                <RowItem xs={10} gutter={1}>
                  <Input
                    rounded
                    wFull
                    type="text"
                    name="name"
                    value={labelForm.name}
                    onChange={handleLabelFormChange}
                  />
                </RowItem>
                <RowItem xs={2} gutter={1}>
                  <FormLabel>색상</FormLabel>
                </RowItem>
                <RowItem xs={12}>
                  {COLORS.map(color => (
                    <LabelColorStyled
                      key={color}
                      color={color}
                      data-color={color}
                      selected={labelForm.color === color}
                      onClick={handleLabelColorClick}
                    />
                  ))}
                </RowItem>
              </Row>
            </ModalBodyStyled>
            <ModalActionsStyled>
              <Button rounded onClick={handleCancelClick} variant="secondary">
                취소
              </Button>
              <Button rounded onClick={handleConfirmClick}>
                확인
              </Button>
            </ModalActionsStyled>
          </ModalWrapStyled>
        </ModalOverlayStyled>
      )}
    </>
  );
}

const COLORS = ['#e7e7e7', '#b6cff5', '#98d7e4', '#e3d7ff', '#fbd3fe', '#f2a8b2', '#fbe983'];
