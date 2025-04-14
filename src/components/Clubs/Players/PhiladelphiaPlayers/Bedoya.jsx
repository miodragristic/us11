import React from 'react';

const AlejandroBedoya = () => {
  const items = [
    { id: 1, title: "Alejandro Bedoya Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Bedoya Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Alejandro Bedoya Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Philadelphia Union Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Alejandro Bedoya Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Alejandro Bedoya</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/alejandro-bedoya.jpg' 
            alt='Alejandro Bedoya' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Tim Nwachukwu 
| 
Credit: Getty Images
Copyright: 2022 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> April 29, 1987 (Englewood, New Jersey, USA)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 11 in (1.80 m)</li>
            <li><strong>Current Team:</strong> Philadelphia Union</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Örebro SK (2009–2011): 65 appearances, 8 goals</li>
                <li>Rangers (2011–2012): 12 appearances, 1 goal</li>
                <li>Helsingborgs IF (2012–2013): 21 appearances, 6 goals</li>
                <li>Nantes (2013–2016): 87 appearances, 11 goals</li>
                <li>Philadelphia Union (2016–present): 244 appearances, 24 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Alejandro Bedoya</h2>
          <p>
            Alejandro Bedoya is a prominent American midfielder known for his leadership and versatility on the field. Born in Englewood, New Jersey, Bedoya played college soccer at Boston College before making his professional debut in Sweden with Örebro SK. After stints in Scotland, Sweden, and France, he joined the Philadelphia Union in 2016, where he has since become a team captain and a key player. Bedoya also made significant contributions to the U.S. Men's National Team, earning 66 caps and 2 goals during his international career.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Alejandro Bedoya Merchandise</h1>
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

export default AlejandroBedoya;
