import React from 'react';

const JeremyRafanello = () => {
  const items = [
    { id: 1, title: "Jeremy Rafanello Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Rafanello Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Jeremy Rafanello Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Philadelphia Union Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Jeremy Rafanello Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Jeremy Rafanello</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/jeremy-rafanello.jpg' 
            alt='Jeremy Rafanello' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team Philadelphia Union | Copyright: 2025 Team Philadelphia Union</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> April 14, 2000 (Delran Township, New Jersey, United States)</li>
            <li><strong>Position:</strong> Forward, Winger</li>
            <li><strong>Height:</strong> 6 ft 0 in (1.83 m)</li>
            <li><strong>Current Team:</strong> Philadelphia Union</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Bethlehem Steel (2018): 24 appearances, 1 goal</li>
                <li>Reading United (2018–2019): 24 appearances, 2 goals</li>
                <li>Helsingør (2019): 13 appearances, 7 goals</li>
                <li>Indy Eleven (2020): 17 appearances, 4 goals</li>
                <li>New York Red Bulls II (2021–2022): 52 appearances, 11 goals</li>
                <li>Philadelphia Union (2022–present): 19 appearances, 3 goals</li>
                <li>Philadelphia Union II (2022–present): 51 appearances, 16 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Jeremy Rafanello</h2>
          <p>
            Jeremy Rafanello is a talented forward and winger, known for his pace and goal-scoring ability. Rafanello started his career in the Philadelphia Union Academy and quickly progressed to play for Bethlehem Steel, followed by time in Europe with Helsingør. He returned to the U.S. to play for New York Red Bulls II and later joined the Philadelphia Union. Rafanello continues to be an important player for the Union's senior and reserve teams.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Jeremy Rafanello Merchandise</h1>
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

export default JeremyRafanello;
