import React from "react";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";

const StyledTooltip = styled((props) => (
  <Tooltip
    classes={{ popper: props.className, tooltip: "tooltip" }}
    {...props}
    disableFocusListener
    placement={props.placement || "bottom"}
  />
))`
  & .tooltip {
    color: ${({ theme }) => theme.colorText};
    background: ${({ theme }) => theme.defaultText};
    font-size: 12px;
    text-align: center;
  }
`;

export default StyledTooltip;
