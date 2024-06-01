import { PAGE_SIZE } from '@/utils/fetchNews';
import { Link, useSearch } from '@tanstack/react-router';
import styles from './Pagination.module.css';
import { Button } from '../ui';

interface Props {
  total: number;
}

export const Pagination = ({ total }: Props): JSX.Element => {
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const { page: currentPage = 1 } = useSearch({ from: '/_home/' });

  return (
    <div className={styles.pagination}>
      <Link
        search={(prev) => ({ ...prev, page: currentPage - 1 })}
        disabled={currentPage === 1}
      >
        <Button>Anterior</Button>
      </Link>
      <div>
        {currentPage} / {totalPages}
      </div>
      <Link
        search={(prev) => ({ ...prev, page: currentPage + 1 })}
        disabled={currentPage === totalPages}
      >
        <Button>Siguiente</Button>
      </Link>
    </div>
  );
};
