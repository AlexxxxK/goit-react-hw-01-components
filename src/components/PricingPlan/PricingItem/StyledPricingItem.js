import styled from "styled-components";
import { BtnColorStyle } from "../../../helpers/helpers";

const StyledIcon = styled.i`
  background-image: url(${props => props.icon});
`;

const StyledBtn = styled.button`
  background: ${props => BtnColorStyle[props.label]};
`;

const StyledHeadline = styled.h2`
  color: ${props => BtnColorStyle[props.label]};
`;

export { StyledIcon, StyledBtn, StyledHeadline };
