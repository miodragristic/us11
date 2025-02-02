import React from 'react';

const GiovanniReyna = () => {
  const items = [
    { id: 1, title: "Giovanni Reyna Borussia Dortmund Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Giovanni Reyna Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Giovanni Reyna Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Borussia Dortmund Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Giovanni Reyna Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Giovanni Reyna</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://static01.nyt.com/athletic/uploads/wp/2020/05/08030603/Reyna-USA-scaled.jpg' 
            alt='Giovanni Reyna' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Maddie Meyer - FIFA 
| 
Credit: FIFA via Getty Images
Copyright: 2019 FIFA</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> November 13, 2002 (Sunderland, England)</li>
            <li><strong>Position:</strong> Attacking Midfielder, Winger</li>
            <li><strong>Height:</strong> 6 ft 1 in (1.85 m)</li>
            <li><strong>Current Team:</strong> Borussia Dortmund</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Borussia Dortmund (2020–present): 99 appearances, 15 goals</li>
                <li>Nottingham Forest (loan, 2024): 9 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Giovanni Reyna</h2>
          <p>
            Giovanni Reyna is a talented attacking midfielder and winger, known for his incredible dribbling, creativity, and playmaking ability. He is a product of the Borussia Dortmund youth system, where he has made a significant impact since debuting in 2020. Reyna has also been an important part of the United States national team, showcasing his skills on the international stage.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Giovanni Reyna Merchandise</h1>
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

export default GiovanniReyna;
