import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const ModalBackground = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-color: #000;
  opacity: 0.7;
`;

export const ModalWrapper = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  overflow: auto;
`;

export const ComponentWrapper = styled(Grid)`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: ${({ theme }) => theme.backgroundAccent};
  max-width: 900px;
  max-width: min(900px, calc(100% - 10px));
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
  padding-left: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
