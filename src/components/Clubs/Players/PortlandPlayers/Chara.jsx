import React from 'react';

const DiegoChara = () => {
  const items = [
    { id: 1, title: "Diego Chará Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Diego Chará Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Diego Chará Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Portland Timbers Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Diego Chará Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Diego Ferney Chará Zamora</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvPs48qADU-UwzRq223yrcFLu4lA2db6cfQ&s' 
            alt='Diego Chará' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Steve Dykes 
| 
Credit: Getty Images
Copyright: 2020 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> April 5, 1986 (Cali, Valle del Cauca, Colombia)</li>
            <li><strong>Position:</strong> Defensive Midfielder</li>
            <li><strong>Height:</strong> 5 ft 8 in (1.72 m)</li>
            <li><strong>Current Team:</strong> Portland Timbers</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Deportes Quindío (2004–2008): 124 appearances, 2 goals</li>
                <li>América de Cali (2009): 31 appearances, 1 goal</li>
                <li>Deportes Tolima (2010–2011): 51 appearances, 5 goals</li>
                <li>Portland Timbers (2011–present): 399 appearances, 12 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Diego Ferney Chará Zamora</h2>
          <p>
            Diego Chará is a Colombian defensive midfielder known for his strong presence in the middle of the park. Having started his career at Deportes Quindío, Chará quickly made a name for himself in Colombia’s top divisions, playing for América de Cali and Deportes Tolima. His commanding performances earned him a move to the Portland Timbers in 2011, where he has since become an instrumental figure for the team. Chará is widely regarded for his work rate, ability to break up opposition attacks, and his leadership qualities. He has also earned a few caps for the Colombian national team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Diego Chará Merchandise</h1>
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

export default DiegoChara;
