import React, { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: '',
    };
    this.onFindMonster = this.onFindMonster.bind(this);
  }

  onFindMonster(e) {
    this.setState({ searchValue: e.target.value });
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  };

  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (
      <div className="App">
        <SearchBox
          placeholder='Find a monster'
          handleChange={this.onFindMonster}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
