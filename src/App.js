import './App.css';
import FavouritesProducts from './Controller/FavProducts';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <FavouritesProducts>
        <Router />
      </FavouritesProducts>
    </div>
  );
}

export default App;
