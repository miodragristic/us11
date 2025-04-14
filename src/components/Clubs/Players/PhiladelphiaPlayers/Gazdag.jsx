import React from 'react';

const DanielGazdag = () => {
  const items = [
    { id: 1, title: "Dániel Gazdag Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Gazdag Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Dániel Gazdag Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Philadelphia Union Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Dániel Gazdag Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Dániel Gazdag</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cdn1.sheffieldwednesday.news/uploads/8/2024/01/GettyImages-1783261309-1140x760.jpg' 
            alt='Dániel Gazdag' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Andrew Katsampes/ISI Photos 
| 
Credit: Getty Images
Copyright: 2023 Andrew Katsampes/ISIPhotos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> March 2, 1996 (Nyíregyháza, Hungary)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 10 in (1.78 m)</li>
            <li><strong>Current Team:</strong> Philadelphia Union</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Honvéd II (2013–2016): 26 appearances, 1 goal</li>
                <li>Honvéd (2013–2021): 175 appearances, 21 goals</li>
                <li>Philadelphia Union (2021–present): 117 appearances, 58 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Dániel Gazdag</h2>
          <p>
            Dániel Gazdag is a Hungarian professional midfielder, known for his excellent passing ability and vision on the field. Gazdag began his career at Honvéd, where he became a key player for the team. In 2021, he made the move to the Philadelphia Union, where he has established himself as one of the most talented midfielders in Major League Soccer. He also represents Hungary on the international stage, earning caps for the national team since 2019.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Dániel Gazdag Merchandise</h1>
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

export default DanielGazdag;
