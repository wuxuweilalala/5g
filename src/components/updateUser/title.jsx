// blog-frontend/src/components/Home.tsx

import React, { useState } from "react";
import "./title.scss";



function Title(props) {

  return (
    <div className="login-title title-top">
       <span>{props.children}</span>
       <i></i>
    </div>
  );
}

export default Title;
