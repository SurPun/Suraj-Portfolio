import React, { useState } from "react";
import RightNav from "./RightNav";

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <div>
        <div />
        <div />
        <div />
      </div>
      <RightNav open={open} />
    </React.Fragment>
  );
}
