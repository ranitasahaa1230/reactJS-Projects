import './App.css';
import { CakeView } from './features/cake/CakeView'
import { IceCreamView } from './features/ice-cream/IceCreamView'
import { UserView } from './features/users/UserView'

function App() {
  return (
    <div className="App">
    <CakeView/>
    <IceCreamView/>
    <UserView/>
    </div>
  );
}

export default App;
