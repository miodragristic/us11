import React from 'react';

const LorenzoInsigne = () => {
  const items = [
    { id: 1, title: "Lorenzo Insigne Toronto FC Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Lorenzo Insigne Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Lorenzo Insigne Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Toronto FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Lorenzo Insigne Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Lorenzo Insigne</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://dynamo.kiev.ua/media/posts/2023/01/11/charlotte-fc-v-toronto-fc.jpg' 
            alt='Lorenzo Insigne' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Vaughn Ridley 
| 
Credit: Getty Images
Copyright: 2022 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> June 4, 1991 (Frattamaggiore, Naples, Italy)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Height:</strong> 5 ft 4 in (1.63 m)</li>
            <li><strong>Current Team:</strong> Toronto FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Napoli (2010–2022): 337 appearances, 96 goals</li>
                <li>Cavese (2010, loan): 10 appearances, 0 goals</li>
                <li>Foggia (2010–2011, loan): 33 appearances, 19 goals</li>
                <li>Pescara (2011–2012, loan): 37 appearances, 18 goals</li>
                <li>Toronto FC (2022–present): 54 appearances, 14 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Lorenzo Insigne</h2>
          <p>
            Lorenzo Insigne is a highly skilled Italian footballer who plays as a winger for Toronto FC in Major League Soccer. Known for his quick feet, dribbling ability, and precision on the ball, Insigne enjoyed a successful career at Napoli where he became one of the club's all-time greats. With over 300 appearances and nearly 100 goals for Napoli, he earned national recognition, having represented Italy in major international tournaments. His contributions to the Italian national team and his club made him one of the most exciting players to watch.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Lorenzo Insigne Merchandise</h1>
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

export default LorenzoInsigne;
