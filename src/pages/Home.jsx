import React from 'react';
import Layout from '../components/Layout';
import About from './About';
import Competences from './Competences';
import Project from './Project';
import Contacts from './Contacts';
import ThreeScene from '../components/ThreeScene';

const Home = () => {
  return (
            <div id="Home">
    <Layout>
   <div className='md:flex md:flex-col'>

      <div className='flex flex-col grow justify-center md:flex-row md:gap-80 md:justify-center '>
      <h1 className=" pt-7 pl-7  text-4xl md:pt-0 md:mt-60 md:text-5xl lg:text-7xl orbitron-uniquifier">MALICK</h1>
      <h1 className=" pl-7 text-4xl md:text-5xl md:mt-60 lg:text-7xl orbitron-uniquifier">BAGUIRI</h1>
      </div>
   
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-y-2/10  max-md:-translate-y-7/10 -translate-x-1/2"> 
        <ThreeScene />
     </div>
      <div className=" space-x-100  w-screen xl:space-x-150 relative   ">
       
        <h2 className="text-l mt-110 pl-28 w-full md:text-5xl md:pr-12 md:justify-center md:mt-60 lg:mt-70 md:flex md:pl-0 orbitron-uniquifier">DEVELOPPEUR WEB</h2>
        <h2 className=" text-xs mt-1 pl-28 w-full md:text-3xl md:pr-12 md:justify-center md:mt-7 lg:mt-8 md:flex md:pl-0 orbitron-uniquifier">Votre futur alternant</h2>
        {/* <h2 className=" text-3xl mt-130 pl-[3%] w-full md:text-5xl md:pt-5 md:mt-80 ">WEB</h2> */}

      </div>
    </div>
    </div>
<About />
<Competences />
<Project />
<Contacts />
    </Layout>
    
</div>
   
   
  );
 
};

export default Home;


