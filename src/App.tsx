import logo from './logo.svg';
import './styles/App.css';
import  MenuBar from './components/AppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useThemeToggle from './hooks/useDarkMode';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});
const lightTheme = createTheme({

});

function App() {
  const { theme, toggleTheme } = useThemeToggle();
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme }>
    <div className="App">
      <MenuBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
