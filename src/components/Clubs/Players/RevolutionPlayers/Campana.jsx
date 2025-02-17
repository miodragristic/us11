import React from 'react';

const LeonardoCampana = () => {
  const items = [
    { id: 1, title: "Leonardo Campana Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Leonardo Campana Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Leonardo Campana Poster", imageUrl: 'https://example.com/poster1.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Inter Miami Legacy Kit", imageUrl: 'https://example.com/kit1.jpg', link: 'https://www.example.com/product/4', price: '$89.99' },
    { id: 5, title: "New England Revolution Scarf", imageUrl: 'https://example.com/scarf1.jpg', link: 'https://www.example.com/product/5', price: '$29.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Leonardo Campana</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.intermiami.news/uploads/52/2024/06/GettyImages-2155044985-1140x776.jpg' 
            alt='Leonardo Campana' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: CHRIS ARJOON 
| 
Credit: AFP via Getty Images
Copyright: AFP or licensors</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Leonardo Campana Romero</li>
            <li><strong>Date of Birth:</strong> 24 July 2000 (Guayaquil, Ecuador)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 6 ft 2 in (1.87 m)</li>
            <li><strong>Current Team:</strong> New England Revolution</li>
            <li><strong>Youth Career:</strong> Barcelona SC (2016–2019)</li>
            <li><strong>Senior Career:</strong> Barcelona SC, Wolverhampton Wanderers, Famalicão, Grasshoppers, Inter Miami</li>
            <li><strong>International Career:</strong> Ecuador U20, Ecuador U23, Ecuador Senior Team</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Leonardo Campana</h2>
          <p>
            Leonardo Campana is a talented forward from Guayaquil, Ecuador, known for his agility, goal-scoring ability, and aerial presence. He began his professional career with Barcelona SC before moving to Europe with Wolverhampton Wanderers. 
          </p>
          <p>
            After successful loan spells at Famalicão and Grasshoppers, Campana joined Inter Miami, where he became a key player. In 2025, he transferred to the New England Revolution, aiming to continue his impact in Major League Soccer.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Leonardo Campana Merchandise</h1>
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

export default LeonardoCampana;
