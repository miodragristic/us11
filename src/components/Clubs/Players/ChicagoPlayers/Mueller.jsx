import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ChrisMueller = () => {
  const items = [
    { id: 1, title: 'Women\'s Chicago Fire Chris Mueller adidas Red 2024 Return To Red Replica Player Jersey', imageUrl: 'https://images.footballfanatics.com/chicago-fire/womens-adidas-chris-mueller-red-chicago-fire-2024-return-to-red-replica-player-jersey_ss5_p-201204813+u-bwd6q10qjbsm5oxns2eq+v-lpqivypecx26i5bf1b7p.jpg?_hv=2&w=400', link: 'https://www.amazon.com/womens-chicago-fire-chris-mueller-2024-replica-jersey', price: '$134.99' },
    { id: 2, title: 'Men\'s Chicago Fire Chris Mueller adidas Red 2024 Return To Red Replica Player Jersey', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-adidas-chris-mueller-red-chicago-fire-2024-return-to-red-replica-player-jersey_ss5_p-201204809+u-yecrwtntz0jmygfcwryl+v-qaacy7cwxaz5mngqhru9.jpg?_hv=2&w=400', link: 'https://www.amazon.com/mens-chicago-fire-chris-mueller-2024-replica-jersey', price: '$134.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Chris Mueller</h1>

        {/* Chris Mueller Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://wgntv.com/wp-content/uploads/sites/5/2023/02/gettyimages-1416710153-594x594-1.jpg' 
            alt='Chris Mueller' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Michael Reaves 
| 
Credit: Getty Images
Copyright: 2022 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Chris Mueller</li>
            <li><strong>Born:</strong> August 29, 1996 (Schaumburg, Illinois, USA)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Current Team:</strong> Chicago Fire</li>
            <li><strong>Previous Clubs:</strong> Orlando City SC, Hibernian FC</li>
            <li><strong>Achievements:</strong> MLS Player of the Month (2020), Chicago Fire MVP (2023)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Rise of Chris Mueller</h2>
          <p>
            Chris Mueller is an electrifying winger renowned for his pace, technical ability, and knack for scoring crucial goals. 
            After an impressive collegiate career at the University of Wisconsin, Mueller was drafted by Orlando City SC in 2018, where he quickly became a fan favorite.
          </p>
          <p>
            In 2022, Mueller returned to his home state to play for the Chicago Fire, adding creativity and energy to the team’s attack. 
            His performances have solidified him as one of the top wingers in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Chris Mueller Merchandise</h1>
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

export default ChrisMueller;
