import React, { useState } from 'react';

function TextComponent({ text, onChangeText, isToggled, onToggle }) {
  return (
    <div>
      <p>{text}</p>
      <button onClick={onChangeText}>Thay đổi</button>
      <button onClick={onToggle}>{isToggled ? 'Tắt' : 'Bật'}</button>
    </div>
  );
}

function App() {
  const [text, setText] = useState('Đoạn văn bản ban đầu');
  const [isToggled, setIsToggled] = useState(false);

  const handleChangeText = () => {
    setText('Đoạn văn bản mới');
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <TextComponent
        text={text}
        onChangeText={handleChangeText}
        isToggled={isToggled}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;
