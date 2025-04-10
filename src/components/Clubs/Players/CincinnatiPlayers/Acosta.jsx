import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const LucianoAcosta = () => {
  const items = [
    {
      "title": "Luciano Acosta FC Cincinnati Fanatics Authentic 10.5'' x 13'' 2023 Landon Donovan MVP Award Sublimated Plaque",
      "price": "$29.99",
      // "originalPrice": "$194.99",
      "category": "Jerseys",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/luciano-acosta-fc-cincinnati-105-x-13-2023-landon-donovan-mvp-award-sublimated-plaque_ss5_p-201002247+u-pgq9ajusw8ewz3kghdur+v-rhrtc3ksffxjwxosykz0.jpg?_hv=2&w=900",
      "link": "http://mlsstore.i8h2.net/bONnXP"
    },
    {
      "title": "Luciano Acosta FC Cincinnati Fanatics Authentic 10.5 x 13 River Jersey Style Number 10 Sublimated Plaque",
      "price": "$29.99",
      "originalPrice": "$29.99",
      "category": "Kids Jerseys",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/luciano-acosta-fc-cincinnati-105-x-13-river-jersey-style-number-10-sublimated-plaque_ss5_p-200581328+u-d6vsazysushcnngpug7o+v-xtuv2c7eprhglu1xv8la.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/RGneQa"
    },
    {
      "title": "Men's FC Cincinnati Luciano Acosta adidas White 2024 The Canvas Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$31.99",
      "category": "Hats",
      "imageUrl": "https://images.footballfanatics.com/fc-cincinnati/mens-adidas-luciano-acosta-white-fc-cincinnati-2024-the-canvas-kit-authentic-player-jersey_ss5_p-201205504+pv-1+u-ybpx25vwfmpufdkjmash+v-nkc0aqflclualvjtc72y.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/gO63xO"
    },
    
    //   
    
  ] 

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Luciano Acosta</h1>

        {/* Luciano Acosta Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.vamofutebol.com/uploads/5/2025/01/GettyImages-2158493614-750x600.jpg' 
            alt='Luciano Acosta' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Jeff Dean 
| 
Credit: Getty Images
Copyright: 2024 Jeff Dean</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Luciano Acosta</li>
            <li><strong>Born:</strong> May 31, 1994 (Buenos Aires, Argentina)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Current Team:</strong> FC Cincinnati</li>
            <li><strong>Achievements:</strong> MLS MVP (2023), MLS All-Star Captain (2024)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Maestro of Cincinnati</h2>
          <p>
            Luciano Acosta is a dynamic playmaker renowned for his creativity and skill on the ball. As FC Cincinnati's captain, 
            he has led the team to new heights, including earning the MLS MVP award in 2023.
          </p>
          <p>
            Known for his leadership and vision, Acosta continues to inspire both teammates and fans. His future with FC Cincinnati 
            remains a focal point for supporters as contract discussions progress.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Luciano Acosta Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-48'>
                <img src={item.imageUrl} alt={item.title} className='object-contain w-full h-full group-hover:scale-105 transition duration-300' />
              </div>
              <div className='p-4'>
                <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                <p className='text-lg font-semibold'>{item.price}</p>
                <a href={item.link} target='_blank' rel='noopener noreferrer' className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-2'>
                  Buy on MLS Store <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LucianoAcosta;
