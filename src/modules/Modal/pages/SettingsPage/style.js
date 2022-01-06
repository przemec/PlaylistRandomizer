import styled from "styled-components";
import Switch from "@material-ui/core/Switch";

export const MainWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
`;

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  width: 100%;
  &:first-child {
    margin-top: 15px;    
  }
  &:last-child {
    margin-bottom: 20px;    
  }
`;

export const SettingName = styled.div`
  flex: 7;
  font-size: 18px;
  color: ${({ theme }) => theme.defaultText};
`;

export const SettingTip = styled.div`
  clear: both;
  font-size: 13px;
`;

export const SwitchWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledSwitch = styled(Switch)`
  & .MuiSwitch-thumb {
    background-color: ${({ theme, checked }) => (checked ? theme.primaryHover : theme.defaultTextHover)};
  }
  & .MuiSwitch-track {
    background-color: ${({ theme, checked }) => (checked ? theme.primary : theme.defaultText)} !important;
  }
`;
