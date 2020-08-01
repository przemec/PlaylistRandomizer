import React from "react";
import { connect } from "react-redux";
import * as SO from "../../../../store/settings/actions";
import * as S from "./style";

const SettingsPage = ({ autoshuffle, autoscroll, displayfeatured, swShuffle, swScroll, swFeatured }) => (
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
      <S.SettingName>Show featured playlists on main page</S.SettingName>
      <S.SwitchWrapper>
        <S.StyledSwitch checked={displayfeatured} onChange={swFeatured} />
      </S.SwitchWrapper>
    </S.SettingContainer>
  </S.MainWrapper>
);

const mapSTP = (state) => ({
  autoshuffle: state.settings.autoshuffle,
  autoscroll: state.settings.autoscroll,
  displayfeatured: state.settings.displayfeatured,
});

const mapDTP = (dispatch) => ({
  swShuffle: () => dispatch(SO.switchAutoShuffle()),
  swScroll: () => dispatch(SO.switchAutoScroll()),
  swFeatured: () => dispatch(SO.switchFeaturedDisplay()),
});

export default connect(mapSTP, mapDTP)(SettingsPage);
