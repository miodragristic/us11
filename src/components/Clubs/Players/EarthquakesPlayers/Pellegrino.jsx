import React from 'react';

const AmahlPellegrino = () => {
  const items = [
    { id: 1, title: "Amahl Pellegrino Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Amahl Pellegrino Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Amahl Pellegrino Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "San Jose Earthquakes Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Amahl Pellegrino Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Amahl Pellegrino</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://example.com/amahl_pellegrino.jpg' 
            alt='Amahl Pellegrino' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team San Jose Earthquakes | Copyright: 2025 Team San Jose Earthquakes</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> June 18, 1990 (Drammen, Norway)</li>
            <li><strong>Position:</strong> Left winger, Forward</li>
            <li><strong>Height:</strong> 6 ft 3 in (1.90 m)</li>
            <li><strong>Current Team:</strong> San Jose Earthquakes</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Drammen (2009–2011): 32 appearances, 7 goals</li>
                <li>Bærum (2012–2014): 68 appearances, 33 goals</li>
                <li>Lillestrøm (2014–2015): 20 appearances, 0 goals</li>
                <li>Mjøndalen (2015–2017): 70 appearances, 28 goals</li>
                <li>Strømsgodset (2018–2019): 39 appearances, 4 goals</li>
                <li>Kristiansund (2019–2021): 39 appearances, 33 goals</li>
                <li>Damac (2021): 12 appearances, 2 goals</li>
                <li>Bodø/Glimt (2021–2024): 71 appearances, 55 goals</li>
                <li>San Jose Earthquakes (2024–present): 32 appearances, 7 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Amahl Pellegrino</h2>
          <p>
            Amahl Pellegrino is a powerful forward and winger from Drammen, Norway, currently playing for San Jose Earthquakes. Pellegrino began his career with local Norwegian teams, moving through Bærum, Lillestrøm, and Mjøndalen, where he demonstrated his goal-scoring ability. His time in Kristiansund was particularly impressive, with an outstanding goal tally. After playing for Damac and Bodø/Glimt, Pellegrino joined San Jose Earthquakes, continuing to make an impact with his skill and physical presence on the field.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Amahl Pellegrino Merchandise</h1>
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

export default AmahlPellegrino;
