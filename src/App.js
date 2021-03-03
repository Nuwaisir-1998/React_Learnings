import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Nuwa" another_attr="sdfsa">
        <p>childred of the first greet</p>
      </Greet> */}
      {/* <Greet name="sdafasd" another_attr="serf"/> */}
      {/* <Greet name="w4er" another_attr="w3rwf"/> */}
    </div>
  );
}

export default App;
