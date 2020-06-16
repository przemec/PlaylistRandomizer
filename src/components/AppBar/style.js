import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const StyledAppBar = styled(Grid)`
  position: sticky;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 10;
  background: #00008855;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Grid)`
  margin-left: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
  max-width: 200px;
  height: 40px;
  line-height: 40px;
`;

export const IconContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled(Grid)`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #00008822;
  border-radius: 1vmin;
`;
