import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;

  a::after {
    content: attr(data-end);
    color: #ff7426;
  }

  a:hover::after {
    content: attr(data-end);
    color: #000000;
  }
`;

export default NavbarContainer;
