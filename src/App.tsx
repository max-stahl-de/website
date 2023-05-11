import Navbar from "./components/Navbar";
import AboutMe from "./views/AboutMe";
import Hello from "./views/Hello";
import Portfolio from "./views/Portfolio";
import Sustainability from "./views/Sustainability";

const App: React.FC = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hello></Hello>
            <AboutMe></AboutMe>
            <Portfolio></Portfolio>
            <Sustainability></Sustainability>
        </>
    );
};

export default App;
