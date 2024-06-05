import React, { useRef, useState } from "react";
import { MyButton, MyInput, defineCustomElements } from "wc-react-lib";

defineCustomElements();

const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const refInput = useRef<{ ExampleMethod: (e:string) => void }>(null);

  const handleClick = () => {
    if (refInput.current) {
      refInput.current.ExampleMethod("react app üzerinden çağrıldı");
    }
  };

  const onChanc = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setMessage(e.target.value);
  };

  return (
    <div className="greetings">
      <MyInput
        ref={refInput}
        value={message}
        onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChanc(e);
        }}
        onMyClick={(e: string) => {
          console.log(e);
        }}
      />

      <p>model value : {message}</p>
      <MyButton onClick={handleClick} label="my-input Method test" />
    </div>
  );
};

export default App;
