import styled from '@emotion/styled';

const BodyStyled = styled.section`
  flex-grow: 1;
  width: 100%;
  max-height: calc(100% - 66px - 24px);
  background-color: #ffffff;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-top: none;
  border-radius: 0 0 8px 8px;
`;

const EmptyContentsStyled = styled.h4`
  color: rgb(107, 114, 128);
  font-size: 18px;
  font-weight: 600;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Body() {
  return (
    <BodyStyled>
      <EmptyContentsStyled>메일이 존재하지 않습니다.</EmptyContentsStyled>
    </BodyStyled>
  );
}
