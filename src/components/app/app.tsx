import { NumberOffersProps } from '../../types/offers';
import MainScreen from '../../pages/main-screen/main-screen';

function App({ numberOffers }: NumberOffersProps): JSX.Element {
  return <MainScreen numberOffers={numberOffers} />;
}

export default App;
