import styled from 'styled-components';

import MainContent from '../layouts/MainContent';

const StyledMainContent = styled(MainContent)`
  grid-column: col-start 1 / col-end 3;
`;

const HomePage = () => <StyledMainContent title='News'>Home</StyledMainContent>;

export default HomePage;
