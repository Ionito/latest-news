import { useNavigate } from '@tanstack/react-router';
import { Input } from '../ui';
import search from '@/assets/search.svg';

export const SearchInput = (): JSX.Element => {
  const navigate = useNavigate({ from: '/' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate({ search: { q: e.currentTarget.value } });
  };
  return (
    <div>
      <Input
        onChange={handleChange}
        placeholder="Buscar noticias..."
        endIcon={<img src={search} />}
      />
    </div>
  );
};
