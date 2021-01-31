import './App.css';
import SlotContainer from './containers/SlotContainer';

// https://medium.com/better-programming/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb

function App() {
  return (
    <>
      <div className="banner">
        <h1>SmiteWheel</h1>
        <p>Can't decide who to play as? Let the Wheel decide!</p>
      </div>
      <div className="App">
        <header className="App-header">
          <SlotContainer />
        </header>
      </div>
    </>
  );
}

export default App;
