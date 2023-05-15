import styled from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { FlexColumn } from "./styles/Utils.styled";
import AboutMe from "./views/AboutMe";
import Hello from "./views/Hello";
import Portfolio from "./views/Portfolio";
import Sustainability from "./views/Sustainability";

const AppContainer = styled(FlexColumn)`
    width: 100vw;
    max-width: 100%;
    overflow: hidden;
`;

const App: React.FC = () => {
    return (
        <AppContainer>
            <Navbar></Navbar>
            <Hello></Hello>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
            <Sustainability></Sustainability>
            <Footer></Footer>
        </AppContainer>
    );
};

export default App;
