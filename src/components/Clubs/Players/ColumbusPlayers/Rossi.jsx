import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DiegoRossi = () => {
  const items = [
    {
      "title": "Men's Columbus Crew Diego Rossi adidas Black 2025 The Goosebumps Kit Authentic Player Jersey",
      "price": "$194.99",
      "category": "Kids Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-diego-rossi-black-columbus-crew-2025-the-goosebumps-kit-authentic-player-jersey_ss5_p-202840277+pv-1+u-j6vu2hvobyeurzfckqck+v-vbp62lbyb5iblki47sfa.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/AP35Y1"
    },
    {
      "title": "Men's Columbus Crew Diego Rossi adidas Black 2025 The Goosebumps Kit Replica Player Jersey",
      "price": "$134.99",
      "category": "Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/columbus-crew/mens-adidas-diego-rossi-black-columbus-crew-2025-the-goosebumps-kit-replica-player-jersey_ss5_p-202840278+pv-1+u-rovczb7doiu2srm0443e+v-r2dfxqjyboj1d4owmqnc.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOnWGq"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Diego Rossi</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://images.supersport.com/media/5wfgo22m/diego-rossi-celebrating-2024-g-1200.jpg?width=1920&quality=90&format=webp' 
            alt='Diego Rossi' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Jason Mowry 
| 
Credit: Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Diego Martín Rossi Marachlian</li>
            <li><strong>Born:</strong> March 5, 1998 (Montevideo, Uruguay)</li>
            <li><strong>Position:</strong> Winger/Forward</li>
            <li><strong>Current Team:</strong> Columbus Crew</li>
            <li><strong>Previous Clubs:</strong> Peñarol, Los Angeles FC, Fenerbahçe</li>
            <li><strong>Achievements:</strong> MLS Cup Winner (2024), Leagues Cup Winner (2024), CONCACAF Champions Cup Best XI</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Diego Rossi: The Uruguayan Star</h2>
          <p>
            Diego Rossi is a dynamic winger and forward who has impressed both in MLS and internationally. 
            Having started his career at Peñarol in Uruguay, he rose to prominence with Los Angeles FC, where he became a key player in their attack.
          </p>
          <p>
            After a successful stint in Turkey with Fenerbahçe, Rossi returned to MLS in 2023, joining Columbus Crew. His speed, creativity, and clinical finishing have made him one of the league's top forwards.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Diego Rossi Merchandise</h1>
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
                  Buy on Amazon <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiegoRossi;

