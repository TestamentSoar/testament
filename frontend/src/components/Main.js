import React, {Component} from 'react';
import MainCard from './design_components/MainCard';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    const cards = [
      {name: '遺言者'},
      {name: '遺言執行人'},
      {name: '相続人'},
      {name: '財産'},
      {name: '資産分配'},
      {name: '印刷'},
      {name: '伝えたいこと'},
      {name: '葬儀'},
    ];
    return (
      <div>
        {cards.map(card => (
          <MainCard card={card} />
        ))}
      </div>
    );
  }
}

export default Main;
