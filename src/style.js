import styled from "styled-components";
import { Grid } from "@material-ui/core/";

export const ListContainer = styled(Grid)`
  height: calc(100vh - 40px);
  width: 100%;
  display: flex;
  @media (max-width: 900px) and (min-height: 900px),
    (max-width: 700px) and (min-height: 451px) and (max-height: 899px),
    (max-width: 1000px) and (min-height: 1200px) {
    display: table;
  }
`;