import styled from 'styled-components';

import MainContent from '../layouts/MainContent';
import Sidebar from '../components/Sidebar/Sidebar';

const StyledMainContent = styled(MainContent)`
  grid-column: col-start 1 / col-end 3;
`;

const StyledSidebar = styled(Sidebar)``;

const HomePage = () => (
  <>
    <StyledMainContent title='News'>Home</StyledMainContent>
    <StyledSidebar title='Explore'>Sidebar</StyledSidebar>
  </>
);

export default HomePage;
