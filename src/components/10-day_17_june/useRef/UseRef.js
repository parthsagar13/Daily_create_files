import React, { useRef } from "react";

export default function UseRef() {
  const Logo = useRef(null);

  const changeimage = () => {
    Logo.current.style.tranform = "rotate(150deg)"
  };
  return (
    <div>
      <h1>Hooks Based Component</h1>
      <br />
      <img src="logo192.png" onClick={changeimage} ref={Logo} />
    </div>
  );
}
