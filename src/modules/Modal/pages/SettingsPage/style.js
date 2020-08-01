import styled from "styled-components";
import Switch from "@material-ui/core/Switch";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
`;

export const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  margin: 5px 0;
  width: 90%;
`;

export const SettingName = styled.div`
  flex: 7;
  font-size: 18px;
  color: ${({ theme }) => theme.defaultText};
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
