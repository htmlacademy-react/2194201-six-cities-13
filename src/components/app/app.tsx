import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../../pages/layout/layout';
import Cities from '../../pages/cities/cities';

type AppProps = {
  numberOffers: number;
};

function App({ numberOffers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cities numberOffers={numberOffers} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
