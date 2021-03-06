import React from "react";
// ---------COMPONENTS
import SearchInput from "../../atoms/SearchInput";

import AccountSetting from "../../molecules/AccountSetting";
// ---------REACT BOOTSTRAP
import Nav from "react-bootstrap/Nav";

function Header() {
  return (<>
    <header className="header">
      <Nav className="h-100 py-1 container justify-content-between">
        <SearchInput />
        <AccountSetting />
      </Nav>
    </header>
    </>
  );
}

export default Header;
