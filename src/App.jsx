import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';




const App = () => (

  <div className="flex-1 flex-col min-h-screen bg-cover bg-center" >
    <div className=' flex-auto font-mono text-black  font-bold text-center hover:bg-purple-600'> Contact us for infomation  </div>
    <Header />
    <section id="home" className="bg-cover bg-center " style={{ backgroundImage: "url('/assets/Bg-1.jpg')" }}>
      {/* Content of the home section */}
    </section>
    <MainContent />

    <Footer />
  </div>
);

export default App;

