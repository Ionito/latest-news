import { useNavigate, useSearch } from '@tanstack/react-router';
import { Input } from '../ui';
import search from '@/assets/search.svg';
import { useEffect, useRef } from 'react';

export const SearchInput = (): JSX.Element => {
  const navigate = useNavigate({ from: '/' });
  const { q } = useSearch({ from: '/_home/' });
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input?.current?.value && input.current.value !== q) {
      input.current.value = q;
    }
  }, [q]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate({ search: { q: e.currentTarget.value } });
  };
  return (
    <Input
      ref={input}
      defaultValue={q}
      onChange={handleChange}
      placeholder="Buscar noticias..."
      endIcon={<img src={search} />}
    />
  );
};
