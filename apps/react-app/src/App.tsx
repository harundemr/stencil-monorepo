import React, { useRef, useState } from "react";
import { MyButton, MyInput, defineCustomElements } from "wc-react-lib";
import { MyInputCustomEvent } from "wc-stencil-lib";

defineCustomElements();

const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const refInput = useRef<HTMLMyInputElement>(null);

  const handleClick = () => {
    if (refInput.current) {
      refInput.current.ExampleMethod("react app üzerinden çağrıldı");
    }
  };

  const onChanc = (e: MyInputCustomEvent<string>) => {
    console.log(e.target.value);
    setMessage(e.target.value);
  };

  return (
    <div className="greetings">
      <MyInput ref={refInput} value={message} onValueChange={onChanc} />

      <p>model value : {message}</p>
      <MyButton onClick={handleClick} label="my-input Method test" />
    </div>
  );
};

export default App;
