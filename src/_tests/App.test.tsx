import App from '@/App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// this is a very general test, may be it is better to implement playright/cypress in the future
describe('App', () => {
  it('should render the correct articles', async () => {
    await waitFor(() => {
      render(<App />);
    });

    // it should render 4 articles top-headlines endpoint (msw)
    expect((await screen.findAllByRole('article')).length).toBe(4);

    // check pagination component
    // remember default page RTL uses is 1024, so the page_size is 12
    expect(await screen.findByText('1 / 1')).toBeInTheDocument();

    // user types 'messi'
    await userEvent.type(screen.getByRole('textbox'), 'messi');

    // it should render 12 articles everything endpoint (msw)
    expect((await screen.findAllByRole('article')).length).toBe(12);

    // check pagination component
    expect(await screen.findByText('1 / 10')).toBeInTheDocument();

    // user click next button
    await userEvent.click(screen.getByRole('button', { name: 'Siguiente' }));

    // check pagination component
    expect(await screen.findByText('2 / 10')).toBeInTheDocument();
  });
});
