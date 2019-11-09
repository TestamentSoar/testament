import React from 'react';
import {Link} from 'react-router-dom';

const Explain = () => {
  const explain = {
    title: 'ゆい言葉について',
    content:
      '本アプリは自分の死後に文の残したもののために家族がバラバラにならないよう約束を結んでおくアプリです。',
  };
  return (
    <div>
      <h1>{explain.title}</h1>
      <h3>{explain.content}</h3>
      <Link to="">戻る</Link>
      <Link to="rules">進む</Link>
    </div>
  );
};

export default Explain;
