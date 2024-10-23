'use client'
import React, { useState } from 'react';
import Editor from './editor';

type Props = {};

const RichText = (props: Props) => {
  const [value, setValue] = useState<string>('');

  return (
    <Editor
      content={value}
      onChange={(newValue) => setValue(newValue)}
      placeholder="Write your post here..."
    />
  );
};

export default RichText;
