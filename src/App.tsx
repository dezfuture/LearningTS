import React, {FC} from 'react';
import './App.css';
import { Person, HairColor } from './components/Person';

const App: FC = () => {
  return (
    <div className="App">
      <Person name='Agrim' age={22} email='agrim2000@gmail.com' hairColor={HairColor.Blonde} />
    </div>
  );
}

export default App;
