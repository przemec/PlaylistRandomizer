import styled from "styled-components";

export const MainWrapper = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: ${({ theme }) => theme.backgroundAccent};
  width: 95vw;
  max-width: 900px;
  padding: 5px;
`;

export const Title = styled.div`
  width: calc(100% - 30px);
  height: 40px;
  line-height: 40px;
  font-size: 22px;
  padding-left: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.defaultText};
`;

export const Tip = styled.div`
  width: calc(100% - 30px);
  font-size: 16px;
  padding-left: 14px;
  margin-top: 4px;
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.defaultText};
`;
