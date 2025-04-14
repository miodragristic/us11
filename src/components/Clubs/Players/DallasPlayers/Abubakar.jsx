import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const LalasAbubakar = () => {
  const items = [
    { id: 1, title: "Lalas Abubakar Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Lalas Abubakar Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Lalas Abubakar Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Lalas Abubakar Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Lalas Abubakar Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Lalas Abubakar</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/lalas-abubakar.jpg' 
            alt='Lalas Abubakar' 
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
            <li><strong>Full Name:</strong> Alhassan Abubakar</li>
            <li><strong>Born:</strong> December 25, 1994 (Kumasi, Ghana)</li>
            <li><strong>Position:</strong> Centre-back</li>
            <li><strong>Current Team:</strong> FC Dallas</li>
            <li><strong>Previous Clubs:</strong> Columbus Crew, Colorado Rapids, Pittsburgh Riverhounds, Charlotte Eagles, Michigan Bucks</li>
            <li><strong>Achievements:</strong> MLS Defender of the Year (2021), A-10 Championship Winner (2015)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Lalas Abubakar: The Defensive Rock</h2>
          <p>
            Lalas Abubakar is a Ghanaian professional footballer known for his commanding presence in defense and leadership on the field. He began his career in college soccer before being drafted by Columbus Crew SC in 2017.
          </p>
          <p>
            After a couple of loan spells at Pittsburgh Riverhounds and Colorado Rapids, he secured a permanent move to Colorado, where he earned the title of Defender of the Year and helped the team to strong playoff runs. In 2024, Abubakar joined FC Dallas, continuing his successful career in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Lalas Abubakar Merchandise</h1>
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

export default LalasAbubakar;
