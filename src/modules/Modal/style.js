import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const ModalBackground = styled(Grid)`
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.7;
`;

export const ModalWrapper = styled(Grid)`
  position: absolute;
  top: 0;
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

export const ComponentWrapper = styled(Grid)`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: ${({ theme }) => theme.backgroundAccent};
  width: 90vw;
  max-width: 900px;
  margin: 20px 0;
`;

export const Header = styled(Grid)`
  width: 90%;
  margin: 0 5%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.defaultText};
`;

export const Title = styled(Grid)`
  width: calc(100% - 30px);
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  padding-left: 20px;
  color: ${({ theme }) => theme.defaultText};
`;

export const CloseWrapper = styled(Grid)`
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.defaultText};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.defaultTextHover};
  }
`;
