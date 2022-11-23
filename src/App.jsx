import Condition from './components/Condition';
import Icon from './components/UI/icons/Icon';
import './App.css';

function App() {
  return (
    <div className='App container'>
      <h1>App</h1>
      {/* <Condition /> */}
      <Icon dark size='lg'>
        bomb
      </Icon>
      <Icon>superpowers</Icon>
      <Icon color='dark' size='lg'>
        cloud
      </Icon>
      <Icon></Icon>
    </div>
  );
}

export default App;
