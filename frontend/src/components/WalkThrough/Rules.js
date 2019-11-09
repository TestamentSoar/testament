import React from 'react';
import {Link} from 'react-router-dom';

const Rules = () => {
  const explain = {
    title: '利用規約',
    content: 'これは〜',
  };
  return (
    <div>
      <h1>{explain.title}</h1>
      <h3>{explain.content}</h3>
      <Link to="explain">戻る</Link>
      <Link to="main">進む</Link>
    </div>
  );
};

export default Rules;
