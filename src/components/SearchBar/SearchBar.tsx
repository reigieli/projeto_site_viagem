import { useState } from 'react';
import type { FormEvent } from 'react';
import '../Hero/Hero.css';

export type SearchValues = {
  origem: string;
  destino: string;
  data: string;
};

type SearchBarProps = {
  onSearch: (values: SearchValues) => void;
  defaultValues?: Partial<SearchValues>;
};

const FIELDS = [
  { name: 'origem', label: 'Origem', placeholder: 'São Paulo (GRU)' },
  { name: 'destino', label: 'Destino', placeholder: 'Para onde você vai?' },
  { name: 'data', label: 'Data', placeholder: '12 Mai - 25 Mai' },
] as const;

/* Barra branca de busca do Hero (origem / destino / data). */
export function SearchBar({ onSearch, defaultValues }: SearchBarProps) {
  const [values, setValues] = useState<SearchValues>({
    origem: defaultValues?.origem ?? '',
    destino: defaultValues?.destino ?? '',
    data: defaultValues?.data ?? '',
  });
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!values.origem.trim() || !values.destino.trim()) {
      setError('Informe a origem e o destino para buscar.');
      return;
    }
    setError('');
    onSearch(values);
  }

  return (
    <>
      <form className="search-bar" onSubmit={handleSubmit} noValidate>
        {FIELDS.map((field, index) => (
          <div key={field.name} style={{ display: 'contents' }}>
            {index > 0 && <div className="search__divider" />}
            <label className="search__field">
              <span className="search__label">{field.label}</span>
              <input
                className="search__input"
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
              />
            </label>
          </div>
        ))}

        <button className="search__button" type="submit">
          Buscar agora
        </button>
      </form>

      {error && (
        <p className="search__message search__message--error" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
