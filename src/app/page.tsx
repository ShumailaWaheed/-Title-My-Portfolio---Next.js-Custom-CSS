<<<<<<< HEAD

import Header from '../components/Header';
import Home from '../pages/Home';
import Expertise from '@/components/Expertise';
import Skill from '@/components/Skill';
import Portfolio from '@/pages/Portfolio';
import Testimonials from '@/pages/Testimonials';
=======
import Header from '../components/Header';
import Home from '../pages/Home';
import Expertise from '@/components/Expertise';
import Skill from '@/pages/Skill';
import Portfolio from '@/pages/Portfolio';
import Testimonial from '@/pages/Testimonial';
>>>>>>> 29125ad (Enhanced Portfolio Styling)
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Home/>
      <Expertise/>
      <Skill/>
      <Portfolio/>
<<<<<<< HEAD
      <Testimonials/>
=======
      <Testimonial/>
>>>>>>> 29125ad (Enhanced Portfolio Styling)
      <Blog/>
      <Contact/>
      <Footer/>

    </>
  );
};

export default HomePage;
