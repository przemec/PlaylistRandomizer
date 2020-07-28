import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const MainContainer = styled(Grid)`
  position: relative;
  margin: 10px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 3;
  cursor: pointer;
  transform: scale(0.97);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1);
    box-shadow: 0px 0px 8px 0px ${({ theme }) => (theme.type === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)")};
  }
`;

export const DataContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: calc(100% - 160px);
  @media (max-width: 650px) and (max-height: 899px) {
    max-width: calc(100% - 110px);
  }
`;

export const StyledTitle = styled.a`
  text-decoration: none;
  font-size: 19px;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.defaultText};
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    font-size: 17px;
    margin-bottom: 0px;
  }
`;

export const StyledData = styled.div`
  text-decoration: none;
  font-size: 15px;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  color: ${({ theme }) => theme.defaultText};
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 650px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    font-size: 14px;
  }
`;

export const Thumbnail = styled.img`
  width: 16vmin;
  height: 9vmin;
  background-size: cover;
  min-height: 60px;
  min-width: 105px;
  max-height: 90px;
  max-width: 160px;
`;
