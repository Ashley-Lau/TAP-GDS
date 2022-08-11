import './App.css';
import AppBody from './modules/AppBody';
import AppHeaderBar from './modules/AppHeaderBar';
import Logo from './modules/Logo';

function App() {
  return (
    <div className="App">
      <AppHeaderBar/>
      <Logo/>
      <AppBody/>
    </div>
  );
}

export default App;
