import React from 'react';

const JonathanOsorio = () => {
  const items = [
    { id: 1, title: "Jonathan Osorio Toronto FC Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Jonathan Osorio Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Jonathan Osorio Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Toronto FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Jonathan Osorio Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Jonathan Osorio</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.deepdaledigest.com/uploads/10/2022/11/GettyImages-1411935788-750x500.jpg' 
            alt='Jonathan Osorio' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Andrew Katsampes/ISI Photos 
| 
Credit: Getty Images
Copyright: 2022 Andrew Katsampes/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> June 12, 1992 (Toronto, Ontario, Canada)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.75 m)</li>
            <li><strong>Current Team:</strong> Toronto FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>SC Toronto (2012): 17 appearances, 11 goals</li>
                <li>Toronto FC (2013–present): 302 appearances, 48 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Jonathan Osorio</h2>
          <p>
            Jonathan Osorio is a Canadian midfielder currently playing for Toronto FC in Major League Soccer. Born and raised in Toronto, he began his professional career with SC Toronto before moving to Toronto FC in 2013, where he has since become a key player for the team. Osorio has also represented Canada at the international level, earning over 80 caps and contributing several goals. His technical skills and versatility make him an integral part of Toronto FC's midfield.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Jonathan Osorio Merchandise</h1>
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

export default JonathanOsorio;
