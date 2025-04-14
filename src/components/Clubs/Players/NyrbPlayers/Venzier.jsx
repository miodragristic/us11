import React from 'react';

const DanteVanzeir = () => {
  const items = [
    { id: 1, title: "Dante Vanzeir Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Dante Vanzeir Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Dante Vanzeir Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "New York Red Bulls Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Dante Vanzeir Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Dante Vanzeir</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.ligaportal.at/international/images/sid/202315/0ca391f3ea127efd9aae3f089d8eb83f2d68a47e.jpg' 
            alt='Dante Vanzeir' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: sid.de | Credit: sid.de | Copyright: sid.de</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> April 16, 1998 (Beringen, Belgium)</li>
            <li><strong>Position:</strong> Forward, Winger</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.75 m)</li>
            <li><strong>Current Team:</strong> New York Red Bulls</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Genk (2016–2020): 6 appearances, 1 goal</li>
                <li>Beerschot Wilrijk (loan, 2018–2019): 37 appearances, 15 goals</li>
                <li>Mechelen (loan, 2019–2020): 18 appearances, 3 goals</li>
                <li>Union SG (2020–2023): 79 appearances, 43 goals</li>
                <li>New York Red Bulls (2023–): 51 appearances, 6 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Belgium U15: 5 appearances, 1 goal</li>
                <li>Belgium U16: 11 appearances, 4 goals</li>
                <li>Belgium U17: 10 appearances, 2 goals</li>
                <li>Belgium U18: 1 appearance, 0 goals</li>
                <li>Belgium U19: 5 appearances, 1 goal</li>
                <li>Belgium U21: 5 appearances, 0 goals</li>
                <li>Belgium: 1 appearance, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Dante Vanzeir</h2>
          <p>
            Dante Vanzeir is a Belgian forward and winger currently playing for the New York Red Bulls. Known for his speed and clinical finishing, Vanzeir made a name for himself at Union SG, where he scored 43 goals in 79 appearances. His performances in Belgium earned him a move to the Red Bulls, where he has continued to impress.
          </p>
          <p>
            Vanzeir also has a rich history with Belgium's youth teams, representing his country at various levels from U15 to U21, and made his senior international debut in 2021.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Dante Vanzeir Merchandise</h1>
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

export default DanteVanzeir;
