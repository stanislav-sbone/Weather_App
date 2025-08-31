import AppContainer from './components/AppContainer';
import Forecast from './components/Forecast';
import Header from './components/Header';
import InfoContainer from './components/InfoContainer';
import SearchBar from './components/SearchBar';
import ThisDay from './components/ThisDay';

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <SearchBar />
        <InfoContainer>
          <ThisDay />
          <Forecast />
        </InfoContainer>
      </AppContainer>
    </>
  );
}

export default App;
