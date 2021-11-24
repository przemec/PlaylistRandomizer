import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const Container = styled(Grid)`
  position: relative;
  width: 90%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px auto;
  margin-bottom: 0;
`;

export const InfoWrapper = styled(Grid)`
  width: 100%;
  margin: 15px auto;
`;

export const ListInfo = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Thumbnail = styled.img`
  width: 16vmin;
  height: 9vmin;
  background-size: cover;
  min-height: 60px;
  min-width: 105px;
  max-height: 90px;
  max-width: 160px;
  color: ${({ theme }) => theme.defaultText};
  float: left;
  margin: auto;
`;

export const Info = styled.div`
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
    font-size: 13px;
  }
`;

export const IconWrapper = styled(Grid)`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  & svg {
    fill: ${({ theme }) => theme.appbarText};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.appbarTextHover};
  }
`;

export const SongsWrapper = styled(Grid)`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
`;
