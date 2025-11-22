import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import Background from './components/Background/Background';

const Header = styled.h1`
  font-family: 'Elder Futhark';
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Header>Hello World!</Header>
      </Background>
    </>
  );
}

export default App;
