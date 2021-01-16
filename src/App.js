import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Store from './contexts/DataContext';
import Spinner from './components/Spinner';

import Main from './Main';

function App() {

  return (
    <>
      <AuthProvider>
        <Store>
          <Spinner />
          <Main />
        </Store>
      </AuthProvider>
    </>
  );
}

export default App;
