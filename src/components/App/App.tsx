import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from '../AppRouter/AppRouter';
import { Header } from '../Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
