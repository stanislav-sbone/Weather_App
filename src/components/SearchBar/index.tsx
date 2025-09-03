import { useEffect, useRef, useState, type FC, type FormEvent } from 'react';
import s from './index.module.css';
import { X } from 'lucide-react';
import { useWeatherContext } from '../../context/WeatherContext';
import { fetchCitySuggestions } from '../../api';
import type { CitySuggestion } from '../../types';

const SearchBar: FC = () => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { updateCity } = useWeatherContext();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (search.trim()) {
      updateCity(search.trim());
      setSearch('');
      setSuggestions([]);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    const timeout = setTimeout(async () => {
      const result = await fetchCitySuggestions(search, 5, 'ru');
      setSuggestions(result);
      setOpen(result.length > 0);
      setHighlightIndex(-1);
    }, 250);
    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handlePick = (sugg: CitySuggestion) => {
    updateCity(sugg.name);
    setSearch('');
    setSuggestions([]);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex(
        (prev) => (prev - 1 + suggestions.length) % suggestions.length
      );
    } else if (e.key === 'Enter' && highlightIndex >= 0) {
      e.preventDefault();
      handlePick(suggestions[highlightIndex]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div className={s.searchBar} ref={containerRef}>
      <form onSubmit={handleSubmit}>
        <div className={s.inputContainer}>
          <input
            className={s.input}
            type="text"
            placeholder="Введите город"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onFocus={() => setOpen(suggestions.length > 0)}
            onKeyDown={handleKeyDown}
          />
          {open && suggestions.length > 0 && (
            <ul className={s.suggestions} role="listbox">
              {suggestions.map((item, idx) => (
                <li
                  key={`${item.name}-${item.state ?? ''}-${item.country ?? ''}`}
                  role="option"
                  aria-selected={idx === highlightIndex}
                  className={
                    idx === highlightIndex ? s.suggestionActive : s.suggestion
                  }
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handlePick(item)}
                >
                  <span className={s.cityName}>{item.name}</span>
                  {item.state && (
                    <span className={s.state}> · {item.state}</span>
                  )}
                  {item.country && (
                    <span className={s.state}> · {item.country}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
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
