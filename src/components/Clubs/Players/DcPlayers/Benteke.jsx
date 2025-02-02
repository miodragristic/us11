import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ChristianBenteke = () => {
  const items = [
    { id: 1, title: "Christian Benteke Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Christian Benteke Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Christian Benteke Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Christian Benteke Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Christian Benteke Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Christian Benteke</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn.mos.cms.futurecdn.net/e8Zxx3N6t3F7Wieg7mQfuM.jpg' 
            alt='Christian Benteke' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Scott Taetsch 
| 
Credit: Getty Images
Copyright: 2024 Scott Taetsch</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Christian Benteke Liolo</li>
            <li><strong>Born:</strong> December 3, 1990 (Kinshasa, Zaire)</li>
            <li><strong>Position:</strong> Striker</li>
            <li><strong>Current Team:</strong> D.C. United</li>
            <li><strong>Previous Clubs:</strong> Genk, Standard Liège, Aston Villa, Liverpool, Crystal Palace</li>
            <li><strong>International Career:</strong> Belgium (45 caps, 18 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Christian Benteke: Belgium's Powerful Striker</h2>
          <p>
            Christian Benteke is a seasoned Belgian striker known for his physical presence and goal-scoring ability. Starting his career at Standard Liège, he later moved to Genk before earning a high-profile transfer to Aston Villa for £7 million. Benteke went on to score 49 goals for Villa and became one of the Premier League's top strikers.
          </p>
          <p>
            He has since played for Liverpool, Crystal Palace, and is currently with D.C. United. Benteke has been a key figure for Belgium, earning 45 international caps and playing in major tournaments such as the UEFA Euros. His strength in the air, finishing ability, and leadership make him a valuable asset to any team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Christian Benteke Merchandise</h1>
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

export default ChristianBenteke;
