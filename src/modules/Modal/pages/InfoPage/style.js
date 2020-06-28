import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const StyledContainer = styled(Grid)`
  padding: 0 20px;
  margin: 0 5%;
  width: 90%;
`;

export const QHeader = styled(Grid)`
  width: 100%;
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
  &:first-child {
    margin-top: 25px;
  }
`;

export const Answer = styled(Grid)`
  width: 100%;
  margin: 10px 0;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.defaultText};
  &:last-child {
    margin-bottom: 25px;
  }
`;
