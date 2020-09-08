import React from "react";
import { connect } from "react-redux";
import * as SO from "../../../../store/settings/actions";
import * as S from "./style";

const SettingsPage = ({
  autoshuffle,
  autoscroll,
  displayfeatured,
  loop,
  autorefresh,
  autoresume,
  swShuffle,
  swScroll,
  swFeatured,
  swLoop,
  swRefresh,
  swResume,
}) => (
  <S.MainWrapper>
    <S.SettingContainer>
      <S.SettingName>Auto-shuffle playlist while loading page</S.SettingName>
      <S.SwitchWrapper>
        <S.StyledSwitch checked={autoshuffle} onChange={swShuffle} />
      </S.SwitchWrapper>
    </S.SettingContainer>
    <S.SettingContainer>
      <S.SettingName>Auto-scroll to played song</S.SettingName>
      <S.SwitchWrapper>
        <S.StyledSwitch checked={autoscroll} onChange={swScroll} />
      </S.SwitchWrapper>
    </S.SettingContainer>
    <S.SettingContainer>
      <S.SettingName>Display featured playlists on main page</S.SettingName>
      <S.SwitchWrapper>
        <S.StyledSwitch checked={displayfeatured} onChange={swFeatured} />
      </S.SwitchWrapper>
    </S.SettingContainer>
    <S.SettingContainer>
      <S.SettingName>Loop playlist</S.SettingName>
      <S.SwitchWrapper>
        <S.StyledSwitch checked={loop} onChange={swLoop} />
      </S.SwitchWrapper>
    </S.SettingContainer>
    <S.SettingContainer>
      <S.SettingName>Refresh playlist on loop</S.SettingName>
      <S.SwitchWrapper>
        <S.StyledSwitch checked={autorefresh} onChange={swRefresh} />
      </S.SwitchWrapper>
    </S.SettingContainer>
    <S.SettingContainer>
      <S.SettingName>
        Automatically resume playing from the previous playlist state (if possible)
        <S.SettingTip>*If this setting is turned on, auto-shuffle is disabled while loading previously played playlist</S.SettingTip>
      </S.SettingName>
      <S.SwitchWrapper>
        <S.StyledSwitch checked={autoresume} onChange={swResume} />
      </S.SwitchWrapper>
    </S.SettingContainer>
  </S.MainWrapper>
);

const mapSTP = (state) => ({
  autoshuffle: state.settings.autoshuffle,
  autoscroll: state.settings.autoscroll,
  displayfeatured: state.settings.displayfeatured,
  loop: state.settings.loop,
  autorefresh: state.settings.autorefresh,
  autoresume: state.settings.autoresume,
});

const mapDTP = (dispatch) => ({
  swShuffle: () => dispatch(SO.switchAutoShuffle()),
  swScroll: () => dispatch(SO.switchAutoScroll()),
  swFeatured: () => dispatch(SO.switchFeaturedDisplay()),
  swLoop: () => dispatch(SO.switchAutoLoop()),
  swRefresh: () => dispatch(SO.switchAutoRefresh()),
  swResume: () => dispatch(SO.switchAutoResume()),
});

export default connect(mapSTP, mapDTP)(SettingsPage);
