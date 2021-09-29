import React from 'react'; // {Component}
import axios from 'axios';
// import { Route, Switch } from 'react-router-dom';
import Navigation from './home/header/Navigation';
import Spaces from './home/body/Spaces';
import './App.css';
// import { Home, About, Posts } from './pages';
// import Menu from './components/Menu';
// import Posts from './pages';

const App = () => {
  return (
    <>
      <button
        type="button"
        onClick={async () => {
          console.log(await axios.get('http://localhost:5000/api/data'));
          const data = await axios.get('http://localhost:5000/api/data', {
            params: { query: 'jojo' },
          });
          console.log(data);
        }}
      >
        get data
      </button>
      <Navigation></Navigation>
      <Spaces></Spaces>
    </>
  );
};

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Menu />
//         <Route exact path="/" component={Home} />
//         <Switch>
//           <Route path="/about/:name" component={About} />
//           <Route path="/about" component={About} />
//         </Switch>
//         <Route path="/posts" component={Posts} />
//       </div>
//     );
//   }
// }

export default App;
