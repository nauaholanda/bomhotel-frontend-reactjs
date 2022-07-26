import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import ContextProvider from './ContextProvider';
import Routes from './Routes';

function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}

export default App;
