import { useState, type FC, type FormEvent } from 'react';
import s from './index.module.css';
import { X } from 'lucide-react';
import { useWeatherContext } from '../../context/WeatherContext';

const SearchBar: FC = () => {
  const [search, setSearch] = useState('');
  const { updateCity } = useWeatherContext();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (search.trim()) {
      updateCity(search.trim());
      setSearch('');
    }
  };

  return (
    <div className={s.searchBar}>
      <form onSubmit={handleSubmit}>
        <div className={s.inputContainer}>
          <input
            className={s.input}
            type="text"
            placeholder="Введите город"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className={s.buttons}>
            <button
              type="button"
              className={search.length > 0 ? s.clear : s.empty}
              onClick={() => setSearch('')}
            >
              <X />
            </button>
            <button
              type="submit"
              className={s.searchBtn}
              disabled={!search.trim()}
            >
              Найти
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
