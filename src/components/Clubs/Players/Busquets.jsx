import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Busquets = () => {
  const items = [
    { id: 1, title: "Men's Spain National Team Sergio Busquets Nike Red 2022/23 Home Jersey", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$119.99' },
    { id: 2, title: "Men's Barcelona Sergio Busquets Nike Blue 2022/23 Home Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/2', price: '$129.99' },
    { id: 3, title: "Sergio Busquets Barcelona Autographed 2022-23 Home Jersey", imageUrl: 'https://example.com/jersey3.jpg', link: 'https://www.example.com/product/3', price: '$499.99' },
    { id: 4, title: "Men's Spain National Team Sergio Busquets Nike Red 2022/23 Away Jersey", imageUrl: 'https://example.com/jersey4.jpg', link: 'https://www.example.com/product/4', price: '$129.99' },
    { id: 5, title: "Sergio Busquets Barcelona Autographed Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/5', price: '$299.99' },
    { id: 6, title: "Men's Barcelona Sergio Busquets Black 2021/22 Away Jersey", imageUrl: 'https://example.com/jersey5.jpg', link: 'https://www.example.com/product/6', price: '$119.99' },
    { id: 7, title: "Sergio Busquets Barcelona Signed 2021/22 Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/7', price: '$349.99' },
    { id: 8, title: "Sergio Busquets Spain 2020 Signed National Team Jersey", imageUrl: 'https://example.com/jersey6.jpg', link: 'https://www.example.com/product/8', price: '$439.99' },
    { id: 9, title: "Men's Barcelona Sergio Busquets 2022/23 Blue Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/9', price: '$34.99' },
    { id: 10, title: "Sergio Busquets Barcelona 2020-21 Retro Jersey", imageUrl: 'https://example.com/jersey7.jpg', link: 'https://www.example.com/product/10', price: '$119.99' },
    { id: 11, title: "Sergio Busquets Signed 2022-23 Barcelona Jersey Framed", imageUrl: 'https://example.com/jersey8.jpg', link: 'https://www.example.com/product/11', price: '$799.99' },
    { id: 12, title: "Men's Barcelona Sergio Busquets Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt2.jpg', link: 'https://www.example.com/product/12', price: '$29.99' },
    { id: 13, title: "Sergio Busquets Barcelona Limited Edition Autographed Poster", imageUrl: 'https://example.com/poster1.jpg', link: 'https://www.example.com/product/13', price: '$149.99' },
    { id: 14, title: "Sergio Busquets Signed Barcelona 2021/22 Jersey", imageUrl: 'https://example.com/jersey9.jpg', link: 'https://www.example.com/product/14', price: '$499.99' },
    { id: 15, title: "Men's Barcelona Sergio Busquets Blue 2020-21 Away Jersey", imageUrl: 'https://example.com/jersey10.jpg', link: 'https://www.example.com/product/15', price: '$119.99' },
    { id: 16, title: "Sergio Busquets Signed 2022-23 Barcelona Soccer Ball", imageUrl: 'https://example.com/ball2.jpg', link: 'https://www.example.com/product/16', price: '$349.99' },
    { id: 17, title: "Men's Spain National Team Sergio Busquets Red 2022/23 Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt3.jpg', link: 'https://www.example.com/product/17', price: '$29.99' },
    { id: 18, title: "Sergio Busquets Barcelona Signed Match Jersey", imageUrl: 'https://example.com/jersey11.jpg', link: 'https://www.example.com/product/18', price: '$599.99' },
    { id: 19, title: "Sergio Busquets Spain National Team 2020 Jersey", imageUrl: 'https://example.com/jersey12.jpg', link: 'https://www.example.com/product/19', price: '$109.99' },
    { id: 20, title: "Sergio Busquets Barcelona Signed Soccer Cleats", imageUrl: 'https://example.com/cleat2.jpg', link: 'https://www.example.com/product/20', price: '$429.99' }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Sergio Busquets</h1>

        {/* Busquets Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.intermiami.news/uploads/52/2024/05/GettyImages-2153690433-1140x760.jpg' 
            alt='Sergio Busquets' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
            <p>Creator: Simon M Bruty 
| 
Credit: Getty Images
Copyright: Simon Bruty</p>
          </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Sergio Busquets Burgos</li>
            <li><strong>Nickname(s):</strong> El Chino</li>
            <li><strong>Born:</strong> July 16, 1988 (Sabadell, Spain)</li>
            <li><strong>Position:</strong> Defensive Midfielder</li>
            <li><strong>Current Team:</strong> Inter Miami CF</li>
            <li><strong>Previous Clubs:</strong> Barcelona</li>
            <li><strong>Achievements:</strong> 3 La Liga titles, 1 FIFA World Cup, 2 UEFA Champions League titles</li>
            <li><strong>International Career:</strong> Spain National Team (2008 - 2022)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Busquets</h2>
          <p>
          Sergio Busquets is widely regarded as one of the best defensive midfielders of his generation. Known for his exceptional vision, passing accuracy, and positional intelligence, Busquets was the backbone of FC Barcelona and the Spanish national team for more than a decade.          </p>
          <p>
          A product of Barcelona's famed La Masia youth academy, Busquets has won numerous titles, including multiple La Liga titles, Champions League trophies, and the 2010 FIFA World Cup with Spain. After leaving Barcelona in 2023, he joined Inter Miami in Major League Soccer, continuing to showcase his leadership and skill on the field.

Busquets’ impact on football history is undeniable, as he remains celebrated as one of the greatest midfielders the game has ever seen.







          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Busquets's Merchandise</h1>
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

export default Busquets;
