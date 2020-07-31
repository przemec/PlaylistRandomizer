import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 90%;
  min-width: 300px;
  max-width: ${({ ismobile }) => (ismobile ? "unset" : "900px")};
  max-height: ${({ ismobile }) => (ismobile ? "unset" : "90vh")};
  margin-top: ${({ ismobile }) => (ismobile ? "15px" : "0px")};
  border-radius: 7px;
  padding: 5px;
  overflow: auto;
  background: ${({ theme }) => theme.backgroundAccent};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.div`
  width: calc(100% - 30px);
  height: 40px;
  line-height: 40px;
  font-size: 22px;
  padding-left: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.defaultText};
`;

export const Tip = styled.div`
  width: calc(100% - 30px);
  font-size: 16px;
  padding-left: 9px;
  margin-top: 5px;
  margin-bottom: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.defaultText};
`;
