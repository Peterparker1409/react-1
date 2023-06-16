import React, { useState } from 'react';

function TextComponent({ text, onChangeText }) {
  return (
    <div>
      <p>{text}</p>
      <button onClick={onChangeText}>Thay đổi</button>
    </div>
  );
}
