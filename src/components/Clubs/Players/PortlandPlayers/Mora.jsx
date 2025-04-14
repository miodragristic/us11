import React from 'react';

const FelipeMora = () => {
  const items = [
    { id: 1, title: "Felipe Mora Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Felipe Mora Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Felipe Mora Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Portland Timbers Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Felipe Mora Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Felipe Andrés Mora Aliaga</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://images.squarespace-cdn.com/content/v1/5262da93e4b068320e3e3494/1632710776237-Z8UPMDW3BSKVDP5UYYSD/2021-09-10+Marcos+de+Oliveira+and+Felipe+Mora+Goal+Reaction+%28Ranko+Veselinovi%C4%87+Own+Goal%29.jpg' 
            alt='Felipe Mora' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Christopher Vose 
          Copyright: Christopher Vose</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> August 2, 1993 (Santiago, Chile)</li>
            <li><strong>Position:</strong> Striker</li>
            <li><strong>Height:</strong> 5 ft 9 in (1.75 m)</li>
            <li><strong>Current Team:</strong> Portland Timbers</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Audax Italiano (2011–2016): 121 appearances, 33 goals</li>
                <li>Universidad de Chile (2016–2017): 26 appearances, 18 goals</li>
                <li>Cruz Azul (2017–2018): 33 appearances, 12 goals</li>
                <li>UNAM (loan 2018): 37 appearances, 14 goals</li>
                <li>UNAM (2019–2021): 14 appearances, 1 goal</li>
                <li>Portland Timbers (loan 2020): 19 appearances, 7 goals</li>
                <li>Portland Timbers (2021–present): 85 appearances, 34 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Felipe Andrés Mora Aliaga</h2>
          <p>
            Felipe Mora is a Chilean striker known for his goal-scoring ability and dynamic play. He began his career at Audax Italiano, later moving to Universidad de Chile where he became a prolific forward. His success continued at Cruz Azul and UNAM, with standout performances earning him a move to the Portland Timbers in 2020. Mora has become a key player for the Timbers, contributing with goals and experience. He is also a member of the Chilean national team, adding international experience to his resume.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Felipe Mora Merchandise</h1>
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

export default FelipeMora;
