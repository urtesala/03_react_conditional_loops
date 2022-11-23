import Condition from './components/Condition';
import './App.css';
import Icon from './components/UI/icons/Icon';
import ArrayOfElements from './components/ArrayOfElements';
import Nav from './components/Navigation/Nav';
import { navData } from './assets/data.js';

const colors = [
  { id: 1, value: 'red' }, // cObj
  { id: 2, value: 'green' },
  { id: 3, value: 'blue' },
  { id: 4, value: 'yellow' },
  { id: 5, value: 'black' },
];

function App() {
  return (
    <div className='App'>
      <Nav navItems={navData} />
      <main className='container'>
        <h1>App</h1>
        {/* <Condition /> */}
        <Icon dark color='dark'>
          thermometer-quarter
        </Icon>
        <Icon dark>thermometer-half</Icon>
        <Icon dark size='lg'>
          thermometer-full
        </Icon>
        {/* <Icon /> */}
        <ArrayOfElements data={colors} />
      </main>
    </div>
  );
}

export default App;
