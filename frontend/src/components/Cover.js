import React from 'react';
import {Link} from 'react-router-dom';

const Cover = () => {
  return (
    <div>
      <h1>ゆい言葉</h1>
      <h2>遺言書作成アプリ</h2>
      <h4>山岡法律事務所監修</h4>
      <Link to="explain">進む</Link>
    </div>
  );
};

export default Cover;
