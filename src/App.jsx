import './App.css';
import Nav from './contents/nav/Nav';
import Content from './contents/Content';
import Aside from './contents/aside/Aside';
import Footer from './contents/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Content />
        <Aside />
      </main>
      <Footer />
    </>
  );
}

export default App;
