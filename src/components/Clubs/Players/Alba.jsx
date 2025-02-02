import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Alba = () => {
  const items = [
    { id: 1, title: "Men's Barcelona Jordi Alba Nike Blue 2022/23 Home Jersey", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Men's Spain National Team Jordi Alba Nike Red 2022/23 Home Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/2', price: '$119.99' },
    { id: 3, title: "Jordi Alba Barcelona Signed 2022-23 Home Jersey", imageUrl: 'https://example.com/jersey3.jpg', link: 'https://www.example.com/product/3', price: '$499.99' },
    { id: 4, title: "Men's Barcelona Jordi Alba Black 2021/22 Away Jersey", imageUrl: 'https://example.com/jersey4.jpg', link: 'https://www.example.com/product/4', price: '$119.99' },
    { id: 5, title: "Jordi Alba Signed Barcelona Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/5', price: '$299.99' },
    { id: 6, title: "Men's Spain National Team Jordi Alba Red 2022/23 Away Jersey", imageUrl: 'https://example.com/jersey5.jpg', link: 'https://www.example.com/product/6', price: '$119.99' },
    { id: 7, title: "Jordi Alba Barcelona Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/7', price: '$349.99' },
    { id: 8, title: "Jordi Alba Signed Spain 2020 National Team Jersey", imageUrl: 'https://example.com/jersey6.jpg', link: 'https://www.example.com/product/8', price: '$439.99' },
    { id: 9, title: "Men's Barcelona Jordi Alba 2022/23 Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/9', price: '$34.99' },
    { id: 10, title: "Jordi Alba Barcelona Retro Jersey 2020-21", imageUrl: 'https://example.com/jersey7.jpg', link: 'https://www.example.com/product/10', price: '$119.99' },
    { id: 11, title: "Jordi Alba Signed 2022-23 Barcelona Jersey Framed", imageUrl: 'https://example.com/jersey8.jpg', link: 'https://www.example.com/product/11', price: '$799.99' },
    { id: 12, title: "Men's Barcelona Jordi Alba Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt2.jpg', link: 'https://www.example.com/product/12', price: '$29.99' },
    { id: 13, title: "Jordi Alba Signed Barcelona 2021/22 Jersey", imageUrl: 'https://example.com/jersey9.jpg', link: 'https://www.example.com/product/13', price: '$499.99' },
    { id: 14, title: "Jordi Alba Signed Barcelona Soccer Cleats 2021-22", imageUrl: 'https://example.com/cleat2.jpg', link: 'https://www.example.com/product/14', price: '$429.99' },
    { id: 15, title: "Men's Barcelona Jordi Alba 2020-21 Away Jersey", imageUrl: 'https://example.com/jersey10.jpg', link: 'https://www.example.com/product/15', price: '$119.99' },
    { id: 16, title: "Jordi Alba Signed Soccer Ball 2022-23", imageUrl: 'https://example.com/ball2.jpg', link: 'https://www.example.com/product/16', price: '$349.99' },
    { id: 17, title: "Men's Spain National Team Jordi Alba Red 2020/21 Jersey", imageUrl: 'https://example.com/jersey11.jpg', link: 'https://www.example.com/product/17', price: '$109.99' },
    { id: 18, title: "Jordi Alba Signed 2022-23 Barcelona Match Jersey", imageUrl: 'https://example.com/jersey12.jpg', link: 'https://www.example.com/product/18', price: '$599.99' },
    { id: 19, title: "Men's Spain National Team Jordi Alba 2020/21 Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt3.jpg', link: 'https://www.example.com/product/19', price: '$29.99' },
    { id: 20, title: "Jordi Alba Barcelona Signed 2020-21 Jersey", imageUrl: 'https://example.com/jersey13.jpg', link: 'https://www.example.com/product/20', price: '$499.99' }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Jordi Alba</h1>

        {/* Alba Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2181071294-750x500.jpg' 
            alt='Jordi Alba' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mt-2 text-center text-sm text-gray-500">
            <p>Creator: Rich Storry | Credit: Getty Images | Copyright: 2024 Getty Images</p>
          </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Jordi Alba Ramos</li>
            <li><strong>Nickname(s):</strong> N/A</li>
            <li><strong>Born:</strong> March 21, 1989 (L'Hospitalet de Llobregat, Spain)</li>
            <li><strong>Position:</strong> Left-back</li>
            <li><strong>Current Team:</strong> Inter Miami</li>
            <li><strong>Previous Clubs:</strong> Barcelona, Valencia</li>
            <li><strong>Achievements:</strong> 5 La Liga titles, 1 UEFA Champions League title, 1 FIFA World Cup, 2 UEFA European Championship titles</li>
            <li><strong>International Career:</strong> Spain National Team (2011 - present)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Alba</h2>
          <p>
          Jordi Alba is widely regarded as one of the most consistent left-backs in world football. Known for his blistering pace, attacking ability, and exceptional crossing, Alba was an integral part of Barcelona's success for over a decade.
          </p>
          <p>
          Having started his career at Valencia, he returned to Barcelona in 2012, where he won numerous titles, including multiple La Liga and UEFA Champions League trophies. On the international stage, Alba achieved success with Spain, winning the 2012 UEFA European Championship and being part of the squad during their 2010 FIFA World Cup triumph.

In 2023, Alba joined Inter Miami in Major League Soccer, continuing his career alongside former Barcelona teammates and contributing his experience and skill to the team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Alba's Merchandise</h1>
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

export default Alba;
