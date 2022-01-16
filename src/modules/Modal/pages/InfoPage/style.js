import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 5%;
`;

export const QHeader = styled.div`
  width: 100%;
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  &:first-child {
    margin-top: 25px;
  }
`;

export const Answer = styled.div`
  line-height: 26px;
  width: 100%;
  margin: 10px 0;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.defaultText};
  &:last-child {
    margin-bottom: 25px;
  }
  & svg {
    height: 20px;
    transform: translateY(4px);
    fill: ${({ theme }) => theme.defaultText};
  }
`;
