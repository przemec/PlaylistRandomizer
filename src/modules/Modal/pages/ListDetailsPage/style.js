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
  max-width: 100%;
  margin: 15px auto;
  display: flex;
  flex-flow: row wrap;
`;

export const ListInfo = styled(Grid)`
  flex: 1 1 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const Thumbnail = styled.img`
  width: 16vmin;
  height: 9vmin;
  background-size: cover;
  min-height: 75px;
  min-width: 135px;
  max-height: 90px;
  max-width: 160px;
  color: ${({ theme }) => theme.defaultText};
  margin: auto;
`;

export const Info = styled.div`
  text-decoration: none;
  font-size: 15px;
  padding: 0 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.defaultText};
`;

export const IconsContainer = styled.div`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  @media  (max-height: 380px){
    display: none;
  }
`;

export const IconWrapper = styled(Grid)`
  width: 100%;
  height: 100%;
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
  width: 0;
  max-width: 100%;
  height: 0;
  overflow: hidden;
  transition: width, height 0.2s ease-in-out;
  @media  (max-height: 380px){
    display: none;
  }
`;
