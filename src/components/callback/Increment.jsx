import React from "react";
export const Increment = React.memo(({ funcionIncrementarPadre }) => {
  console.log("Me estoy renderizando");
  return (
    <button onClick={() => funcionIncrementarPadre(1)}>Incrementar</button>
  );
});
