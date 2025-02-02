import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Suarez = () => {
  const items = [
    { id: 1, title: "Men's Uruguay National Team Luis Suárez Nike Blue 2022/23 Away Jersey", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Youth Uruguay National Team Luis Suárez Nike Blue 2022/23 Away Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/2', price: '$99.99' },
    { id: 3, title: "Luis Suárez Uruguay National Team Nike Blue 2022/23 Away Jersey - Autographed", imageUrl: 'https://example.com/jersey3.jpg', link: 'https://www.example.com/product/3', price: '$499.99' },
    { id: 4, title: "Luis Suárez Barcelona 2020-21 Home Jersey", imageUrl: 'https://example.com/jersey4.jpg', link: 'https://www.example.com/product/4', price: '$129.99' },
    { id: 5, title: "Men's Uruguay National Team Luis Suárez 2022/23 Blue Away Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/5', price: '$34.99' },
    { id: 6, title: "Youth Uruguay National Team Luis Suárez 2022/23 Blue Away Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt2.jpg', link: 'https://www.example.com/product/6', price: '$24.99' },
    { id: 7, title: "Luis Suárez Uruguay Autographed 2022-23 Away Jersey", imageUrl: 'https://example.com/jersey5.jpg', link: 'https://www.example.com/product/7', price: '$849.99' },
    { id: 8, title: "Luis Suárez Barcelona Adidas Blue 2020 Home Jersey - Signed", imageUrl: 'https://example.com/jersey6.jpg', link: 'https://www.example.com/product/8', price: '$399.99' },
    { id: 9, title: "Luis Suárez Barcelona 2020-21 Away Jersey", imageUrl: 'https://example.com/jersey7.jpg', link: 'https://www.example.com/product/9', price: '$109.99' },
    { id: 10, title: "Luis Suárez Barcelona 2019-2020 Retro Jersey", imageUrl: 'https://example.com/jersey8.jpg', link: 'https://www.example.com/product/10', price: '$119.99' },
    { id: 11, title: "Luis Suárez Autographed Barcelona 2020-2021 Signed Jersey", imageUrl: 'https://example.com/jersey9.jpg', link: 'https://www.example.com/product/11', price: '$799.99' },
    { id: 12, title: "Luis Suárez Barcelona Signed 2020-2021 Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/12', price: '$299.99' },
    { id: 13, title: "Men's Uruguay National Team Luis Suárez 2022/23 Away Jersey - White", imageUrl: 'https://example.com/jersey10.jpg', link: 'https://www.example.com/product/13', price: '$139.99' },
    { id: 14, title: "Luis Suárez Barcelona Jersey - Limited Edition", imageUrl: 'https://example.com/jersey11.jpg', link: 'https://www.example.com/product/14', price: '$149.99' },
    { id: 15, title: "Luis Suárez Uruguay Autographed Poster", imageUrl: 'https://example.com/poster1.jpg', link: 'https://www.example.com/product/15', price: '$99.99' },
    { id: 16, title: "Luis Suárez Uruguay Autographed Soccer Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/16', price: '$549.99' },
    { id: 17, title: "Luis Suárez Barcelona Soccer Cleats - Signed", imageUrl: 'https://example.com/cleat2.jpg', link: 'https://www.example.com/product/17', price: '$349.99' },
    { id: 18, title: "Luis Suárez Barcelona Signed Jersey Framed", imageUrl: 'https://example.com/jersey12.jpg', link: 'https://www.example.com/product/18', price: '$1,199.99' },
    { id: 19, title: "Luis Suárez Signed Barcelona Match Ball", imageUrl: 'https://example.com/ball2.jpg', link: 'https://www.example.com/product/19', price: '$799.99' },
    { id: 20, title: "Luis Suárez Uruguay National Team Vintage Jersey", imageUrl: 'https://example.com/jersey13.jpg', link: 'https://www.example.com/product/20', price: '$129.99' }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Luis Suárez</h1>

        {/* Suarez Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://en.nogomania.com/GetFile.ashx?id=259742' 
            alt='Luis Suárez' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
            style={{ objectPosition: 'center 20%' }} 
          />
              <div className="mt-2 text-center text-sm text-gray-500">
            <p>Creator: Hector Vivas 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
          </div>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Luis Alberto Suárez Díaz</li>
            <li><strong>Nickname(s):</strong> El Pistolero</li>
            <li><strong>Born:</strong> January 24, 1987 (Salto, Uruguay)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> Inter Miami (formerly Gremio, Nacional, Atlético Madrid, FC Barcelona, Liverpool, Ajax, Groningam)</li>
            <li><strong>Achievements:</strong> 3 La Liga titles, 1 Copa América, Golden Boot Winner</li>
            <li><strong>International Career:</strong> Uruguay National Team (2007 - 2024)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Suárez</h2>
          <p>
          Luis Suárez is known for his goal-scoring prowess, work ethic, and often controversial style of play. Widely regarded as one of the best strikers in the world, his illustrious career spans across some of the top clubs in Europe and beyond.

Starting his professional career in Uruguay, Suárez later moved to Europe, where he made a name for himself at Ajax, Liverpool, and then Barcelona. After leaving Europe, he continued his career at Atlético Madrid and later at Grêmio. Currently, Suárez plays for Inter Miami in Major League Soccer.
          </p>
          <p>
          While no longer an active player for the Uruguay national team, Suárez’s legacy with "La Celeste" remains significant, marked by his leadership, determination, and unforgettable moments on the international stage.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Suárez's Merchandise</h1>
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

export default Suarez;
