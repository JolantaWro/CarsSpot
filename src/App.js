import Header from '../src/components/Header/Header'
import Content from '../src/components/Content/Content';
import Footer from './components/Footer/Footer';
import Waves from './components/ui/waves';

function App() {
  return (
    <div className='relative w-full h-full bg-gray'>
      <Waves />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
