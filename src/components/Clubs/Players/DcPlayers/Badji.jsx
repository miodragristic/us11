import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DominiqueBadji = () => {
  const items = [
    { id: 1, title: "Dominique Badji Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Dominique Badji Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Dominique Badji Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Dominique Badji Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Dominique Badji Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Dominique Badji</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/dominique-badji.jpg' 
            alt='Dominique Badji' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Dominique Joel Badji</li>
            <li><strong>Born:</strong> October 16, 1992 (Dakar, Senegal)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> D.C. United</li>
            <li><strong>Previous Clubs:</strong> Colorado Rapids, FC Dallas, Nashville SC, FC Cincinnati, Bandırmaspor</li>
            <li><strong>College:</strong> Boston University Terriers (69 appearances, 26 goals)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Dominique Badji: A Senegalese Forward</h2>
          <p>
            Dominique Badji, a Senegalese forward, has made his mark in Major League Soccer with several teams, including the Colorado Rapids, FC Dallas, and most recently, D.C. United. Known for his speed and versatility, Badji is a dynamic forward who can change the course of a game in an instant.
          </p>
          <p>
            After a successful college career at Boston University, Badji transitioned into professional soccer, first making an impact with the Colorado Rapids before moving on to other MLS teams. His experience across multiple clubs has made him an important figure in MLS and a key player for D.C. United.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Dominique Badji Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
>
  Buy Now
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DominiqueBadji;
