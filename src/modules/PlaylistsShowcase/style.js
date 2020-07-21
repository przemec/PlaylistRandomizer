import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const MainWrapper = styled(Grid)`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background: ${({ theme }) => theme.backgroundAccent};
  width: 95vw;
  max-width: 900px;
  padding: 5px;
`;

export const Title = styled(Grid)`
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
