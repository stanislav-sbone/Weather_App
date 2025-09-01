import AppContainer from './components/AppContainer';
import Forecast from './components/Forecast';
import Header from './components/Header';
import InfoContainer from './components/InfoContainer';
import SearchBar from './components/SearchBar';
import CurrentDay from './components/ThisDay';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <AppContainer>
        <Header />
        <SearchBar />
        <InfoContainer>
          <CurrentDay />
          <Forecast />
        </InfoContainer>
      </AppContainer>
    </WeatherProvider>
  );
}

export default App;
