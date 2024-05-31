import { useNavigate, useSearch } from '@tanstack/react-router';
import { Input } from '../UI';
import search from '@/assets/search.svg';

export const SearchInput = (): JSX.Element => {
  const navigate = useNavigate({ from: '/' });
  const { q } = useSearch({ from: '/_home/' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate({ search: { q: e.currentTarget.value } });
  };
  return (
    <div>
      <Input
        defaultValue={q}
        onChange={handleChange}
        placeholder="Buscar noticias..."
        endIcon={<img src={search} />}
      />
    </div>
  );
};
