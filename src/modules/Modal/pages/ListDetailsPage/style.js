import styled, { keyframes } from "styled-components";
import LoopIcon from "@material-ui/icons/Autorenew";

export const Container = styled.div`
  position: relative;
  max-height: calc(100vh - 50px - 42px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 0;
  width: auto;
`;

export const InfoWrapper = styled.div`
  width: auto;
  margin: 15px auto;
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 600px) {
    position: relative;
    width: 100%;
    min-height: max(15vmin, 120px);

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const ListInfo = styled.div`
  flex: 1 1 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  @media (min-width: 600px) {
    display: inherit;
    margin: 0;
    width: 100%;
    height: 100%;
    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    & > div:nth-child(1) {
      transform: translate(calc(-50% + 170px), calc(-50% - 30px));
    }
    & > div:nth-child(2) {
      transform: translate(calc(-50% - 170px), calc(-50% - 30px));
    }
    & > div:nth-child(3) {
      transform: translate(calc(-50% + 170px), calc(-50% + 30px));
    }
    & > div:nth-child(4) {
      transform: translate(calc(-50% + 170px), calc(-50%));
    }
    & > div:nth-child(5) {
      transform: translate(calc(-50% - 170px), calc(-50%));
    }
    & > div:nth-child(6) {
      transform: translate(calc(-50% - 170px), calc(-50% + 30px));
    }
  }
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
  width: 195px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.defaultText};
`;

export const IconsContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 5px;
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  & svg {
    margin: 0 auto;
    fill: ${({ theme }) => theme.defaultText};
  }
  &:hover svg {
    fill: ${({ theme }) => theme.defaultTextHover};
  }
  @media (max-height: 450px) {
    display: none;
  }
`;

export const SongsWrapper = styled.div`
  position: relative;
  width: 0;
  max-width: 100%;
  height: 0;
  overflow: hidden;
  transition: width, height 0.2s ease-in-out;
  @media (max-height: 450px) {
    display: none;
  }
`;

export const LoopIconWrapper = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.primary};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoopIco = styled(LoopIcon)`
  animation: ${rotate} 2s linear infinite;
`;
