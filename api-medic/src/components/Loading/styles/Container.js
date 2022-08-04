import styled from "styled-components";
import { MEDIA } from "../../../utils/layout";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 0 1 auto;
  ${(p) => p.middle && MEDIA[p.middle]`align-items: center;`}
  ${(p) => p.center && MEDIA[p.center]`justify-content: center;`}
  ${(p) => p.grow && MEDIA[p.grow]`flex-grow: 1;`}
  ${(p) => p.vSpread && `height: 100%;`}
`;

export default Container;
