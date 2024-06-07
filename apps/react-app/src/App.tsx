import React, { useRef, useState } from 'react';
import {
  MyButton,
  MyCard,
  MyDialog,
  MyInput,
  MyLayout,
  defineCustomElements,
} from 'wc-react-lib';
import { MyInputCustomEvent } from 'wc-stencil-lib';

defineCustomElements();

const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const refInput = useRef<HTMLMyInputElement>(null);
  const refDialog = useRef<HTMLMyDialogElement>(null);

  const handleClick = () => {
    if (refInput.current) {
      // refInput.current.ExampleMethod("react app üzerinden çağrıldı");
    }
  };

  const onChanc = (
    e: MyInputCustomEvent<{
      value: string | number | null | undefined;
    }>,
  ) => {
    console.log(e.target.value);
    setMessage(e.target.value as React.SetStateAction<string>);
  };

  const onClickOpenDialog = () => {
    if (refDialog.current) {
      refDialog.current.open(
        () => {
          // ok button callback function
          console.log('ok clicked');
        },
        () => {
          // cancel button callback function
          console.log('cancel clicked');
        },
      );
    }
  };
  return (
    <MyLayout>
      <div slot="header">
        <h4>my-layout header area</h4>
      </div>
      <div slot="sidebar">
        <h4>my-layout sidebar area</h4>
        <h3>React App</h3>
      </div>
      <div slot="content">
        <h4>my-layout content area</h4>

        <MyCard header="Example my-input value and onValueChange">
          <MyInput ref={refInput} value={message} onMyChange={onChanc} />

          <p>model value : {message}</p>
        </MyCard>
        <br />
        <MyCard
          header="Example call component method"
          footer="console üzerinden izlenebilir"
        >
          <MyButton onClick={handleClick} label="my-input Method test" />
        </MyCard>
        <br />
        <MyCard
          header="Example dialog and open method"
          footer="buton clickleri console üzerinden izlenebilir"
        >
          <MyDialog ref={refDialog}>my dialog is opened!</MyDialog>
          <MyButton onClick={onClickOpenDialog} label="Open Dialog"></MyButton>
        </MyCard>
      </div>
    </MyLayout>
  );
};

export default App;
