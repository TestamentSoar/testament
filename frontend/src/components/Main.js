import React, {Component} from 'react';
import MainCard from './design_components/MainCard';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    const cards = [
      {name: '遺言者', link: 'yuigonshya'},
      {name: '相続人', link: 'sozokunin'},
      {name: '財産', link: 'zaisan'},
      {name: '資産分配', link: 'plandist'},
      {name: '伝えたいこと'},
      {name: '介護・人工呼吸器'},
      {name: '臓器移植'},
      {name: 'ペット'},
      {name: '葬儀'},
      {name: '遺言書の印刷'},
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
