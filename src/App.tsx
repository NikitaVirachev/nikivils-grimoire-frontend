import GlobalStyle from './styles/GlobalStyle';
import Background from './components/Background/Background';
import PageFrame from './components/PageFrame/PageFrame';

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <PageFrame />
      </Background>
    </>
  );
}

export default App;
