import styled from '@emotion/styled';

export const ModalOverlayStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalWrapStyled = styled.div<{ height?: number }>`
  width: 600px;
  max-height: ${props => props.height ?? '550'}px;
  min-height: ${props => props.height ?? '550'}px;
  background-color: #ffffff;
  color: #111827;
  position: relative;
  margin: 8px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
`;

export const ModalHeaderStyled = styled.div`
  padding: 16px 24px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
`;

export const ModalHeaderTitle = styled.h4`
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const ModalBodyStyled = styled.div`
  padding: 16px 24px;
  position: absolute;
  top: 56px;
  bottom: 70px;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  overflow: auto;
`;

export const ModalActionsStyled = styled.div`
  padding: 16px 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0 8px;
`;

export const FormLabel = styled.p`
  color: #777;
  font-size: 13px;
  letter-spacing: -0.5px;
  white-space: nowrap;
`;
