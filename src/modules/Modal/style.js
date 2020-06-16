import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const ModalBackground = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ComponentWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
  background: ${({ theme }) => theme.backgroundAccent};
  width: 90vw;
  max-width: 900px;
  min-height: 300px;
  max-height: 80vh;
`;
