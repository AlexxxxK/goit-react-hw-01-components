import styled from "styled-components";
import { backgroundColorGenerator } from "../../helpers/helpers";

const StyledItem = styled.li`
  background: ${backgroundColorGenerator()};
`;

export default StyledItem;
