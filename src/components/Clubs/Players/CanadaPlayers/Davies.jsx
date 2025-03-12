import React from 'react';

const AlphonsoDavies = () => {
  const items = [
    { id: 1, title: "Alphonso Davies Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Alphonso Davies Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Alphonso Davies Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Bayern Munich Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Alphonso Davies Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Alphonso Davies</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://cloudfront-us-east-1.images.arcpublishing.com/tgam/PMYBANKHWZIE7HTQTIA3EYVQQI.jpg' 
            alt='Alphonso Davies' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Ethan Miller 
| 
Credit: Getty Images
Copyright: 2023 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> November 2, 2000 (Buduburam, Ghana)</li>
            <li><strong>Position:</strong> Left-back / Winger</li>
            <li><strong>Height:</strong> 6 ft 1 in (1.85 m)</li>
            <li><strong>Current Team:</strong> Bayern Munich</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Vancouver Whitecaps FC (2016–2018): 65 appearances, 8 goals</li>
                <li>Bayern Munich II (2018–2019): 6 appearances, 0 goals</li>
                <li>Bayern Munich (2019–present): 151 appearances, 9 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Alphonso Davies</h2>
          <p>
            Alphonso Davies is one of the most exciting young footballers in the world, known for his blistering pace and versatility on the field. Originally from Ghana, Davies moved to Canada at a young age, where he developed his skills through youth academies. After making an impact with Vancouver Whitecaps, he joined Bayern Munich, where he has helped the club achieve domestic and international success. A key player for the Canadian national team, Davies is widely regarded as one of the best left-backs in world football.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Alphonso Davies Merchandise</h1>
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

export default AlphonsoDavies;
