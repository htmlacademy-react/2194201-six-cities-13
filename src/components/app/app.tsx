import MainScreen from '../../pages/main/main';

type AppProps = {
  numberOffers: number;
};

function App({ numberOffers }: AppProps): JSX.Element {
  return <MainScreen numberOffers={numberOffers} />;
}

export default App;
