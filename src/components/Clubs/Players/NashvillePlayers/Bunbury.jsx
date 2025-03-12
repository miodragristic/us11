import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const TealBunbury = () => {
  const items = [
    { id: 1, title: "Teal Bunbury Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Teal Bunbury Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Teal Bunbury Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$39.99' },
    { id: 4, title: "Teal Bunbury Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$329.99' },
    { id: 5, title: "Teal Bunbury Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Teal Bunbury</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.shutterstock.com/editorial/image-editorial/M5T9Q5w5M5TbY228Nzg1ODA=/nashville-sc-forward-teal-bunbury-12-celebrates-220nw-13892080fc.jpg' 
            alt='Teal Bunbury' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Copyright: Copyright Shutterstock</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Teal Alexander Bunbury</li>
            <li><strong>Date of Birth:</strong> February 27, 1990 (Hamilton, Ontario, Canada)</li>
            <li><strong>Position:</strong> Forward, Winger</li>
            <li><strong>Height:</strong> 1.88 m (6 ft 2 in)</li>
            <li><strong>Current Team:</strong> Nashville SC</li>
            <li><strong>Youth Team:</strong> Valley United Juventus</li>
            <li><strong>College Career:</strong> Akron Zips (48 apps, 23 goals)</li>
            <li><strong>Senior Career:</strong> Rochester Thunder, Sporting Kansas City, New England Revolution, Nashville SC</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Teal Bunbury: A Dynamic Forward</h2>
          <p>
            Teal Bunbury is a versatile forward and winger known for his pace and scoring ability. Having played for prominent teams like Sporting Kansas City, New England Revolution, and Nashville SC, Bunbury has established himself as a reliable goal-scorer and an impactful player.
          </p>
          <p>
            His college career at Akron Zips helped launch his professional journey, and he's represented both the United States and Canada at various youth levels, showcasing his diverse background. His experience and leadership on the field make him a key player for Nashville SC.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Teal Bunbury Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a href={item.link} className='text-blue-600 hover:underline'>Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TealBunbury;
