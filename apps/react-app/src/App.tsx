import React, { useRef, useState } from "react";
import { MyInput, defineCustomElements } from "wc-react-lib";

defineCustomElements();

const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const refInput = useRef<{ ExampleMethod: () => void }>(null);

  const handleClick = () => {
    if (refInput.current) {
      refInput.current.ExampleMethod();
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
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default App;
