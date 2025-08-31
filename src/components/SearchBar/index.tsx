import { useState, type FC, type FormEvent } from 'react';
import s from './index.module.css';
import { X } from 'lucide-react';

const SearchBar: FC = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (search.trim()) {
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
            placeholder="Enter the name of the city"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            type="button"
            className={search.length > 0 ? s.clear : s.empty}
            onClick={() => setSearch('')}
          >
            <X />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
