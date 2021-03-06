import React from "react"

import Copyright from "../../atoms/Copyright";

function MainContainer({children, ...props}) {

  return (
    <main className="content__container d-flex flex-column h-100 w-100"{...props}>
      {children}
      <Copyright/>
    </main>
  );
}

export default MainContainer;
