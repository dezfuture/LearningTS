import React, {FC} from 'react';
import './App.css';
import { Person } from './components/Person';

const App: FC = () => {
  return (
    <div className="App">
      <Person name='Agrim' age={22} email='agrim2000@gmail.com' />
    </div>
  );
}

export default App;
