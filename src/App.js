import './App.css';
import Header from '../src/components/Header/Header'
import Content from '../src/components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='w-full h-full bg-gray'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
