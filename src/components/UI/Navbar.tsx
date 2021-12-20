import React from 'react';
import {Link} from "react-router-dom";

import {Wrapper} from "./Navbar.styles";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to='/login'>Login</Link>
      <Link to='/main'>Main</Link>
    </Wrapper>
  );
};

export default Navbar;