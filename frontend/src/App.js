import {Component} from 'react';
import './App.css';

const list = [
  {
      "id": 1,
      "title": "Django TODO API",
      "body": "both FE and BE will be covered in this section"
  },
  {
      "id": 2,
      "title": "Django Blog API",
      "body": "It's like a practice section where we will cover all the learning"
  },
  {
    "id": 3,
    "title": "Java Programming",
    "body": "It's java learning"
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {list};
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
