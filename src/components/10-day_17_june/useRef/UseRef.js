import React, { useRef } from "react";

export default function UseRef() {
  const Logo = useRef(null);

  const changeimage = () => {
      Logo.current.focus();
  };
  return (
    <div>
      {/* <h1>Hooks Based Component</h1>
      <br />
      <img src="logo192.png" onClick={changeimage} ref={Logo} /> */}
       <input type="text" ref={Logo} />
      <button onClick={changeimage}>Focus Input</button>
    </div>
  );
}
