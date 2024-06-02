import { waitFor, screen } from '@testing-library/react';
import { Header } from '.';
import { renderWithRouter } from '@/tests/utils';
import userEvent from '@testing-library/user-event';

const Component = () => <Header />;

describe('Header', () => {
  it('should render header title component', async () => {
    const { router } = renderWithRouter(Component);
    expect(router.history.location.pathname).toBe('/test');
    await waitFor(() =>
      expect(screen.getByText('Latest News')).toBeInTheDocument(),
    );
  });
  it('should redirect after clicking on logo', async () => {
    const { router } = renderWithRouter(Component);
    await waitFor(() => expect(screen.getByRole('link')).toBeInTheDocument());
    await userEvent.click(screen.getByRole('link'));
    expect(router.history.location.pathname).toBe('/');
  });
});
