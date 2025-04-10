import React from 'react'
import EmailForm from '../components/EmailForm';
import LogoContact from '../components/LogoContact';
import DownloadCV from '../components/DownloadCV';



const Contacts = () => {
  return (
    <div id="Contacts">
        
      <div className="lg:ml-40 lg:mr-40 mt-90">
        <DownloadCV />
      </div>
      <div>
      <h1 className='text-4xl md:text-7xl mb-3 ml-7 mt-70'>CONTACTS</h1> 
      </div>
      <div className="flex md:flex-col mt-15 lg:ml-200">

        <LogoContact />
      </div>

      <div className=' lg:ml-40 lg:mr-40'>

        <EmailForm />
      </div>
    </div>
  );
};

export default Contacts;


// const Contacts = () => {



//     return (
//       <div id="Contacts">
//           <div className='flex md:flex-col mt-100'>

//           <LogoContact />

//           </div>
//           <div className=' lg:ml-40 lg:mr-40'>

//          <EmailForm />
//          </div>
//         </div>
//     )
//   };




// export default Contacts


