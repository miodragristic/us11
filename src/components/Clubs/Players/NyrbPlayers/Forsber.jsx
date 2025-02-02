import React from 'react';

const EmilForsberg = () => {
  const items = [
    { id: 1, title: "Emil Forsberg Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Emil Forsberg Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Emil Forsberg Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "New York Red Bulls Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Emil Forsberg Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Emil Forsberg</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://nypost.com/wp-content/uploads/sites/2/2023/11/GettyImages-1781603559.jpg' 
            alt='Emil Forsberg' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: picture alliance 
| 
Credit: dpa/picture alliance via Getty Images
Copyright: (c) Copyright 2023, dpa (www.dpa.de). Alle Rechte vorbehalten</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> October 23, 1991 (Sundsvall, Sweden)</li>
            <li><strong>Position:</strong> Attacking midfielder</li>
            <li><strong>Height:</strong> 5 ft 10 in (1.77 m)</li>
            <li><strong>Current Team:</strong> New York Red Bulls</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>GIF Sundsvall (2009–2012): 97 appearances, 24 goals</li>
                <li>Medskogsbrons BK (loan, 2009): 3 appearances, 2 goals</li>
                <li>Malmö FF (2013–2015): 57 appearances, 19 goals</li>
                <li>RB Leipzig (2015–2023): 243 appearances, 48 goals</li>
                <li>New York Red Bulls (2024–): 19 appearances, 9 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Sweden U19: 8 appearances, 0 goals</li>
                <li>Sweden: 90 appearances, 21 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Emil Forsberg</h2>
          <p>
            Emil Forsberg is a Swedish attacking midfielder known for his vision, passing, and ability to score crucial goals. Born in Sundsvall, Sweden, he started his career at GIF Sundsvall, before moving to Malmö FF, where he gained attention for his performances. Forsberg's skillset truly shone during his time at RB Leipzig, where he became a key player and one of the Bundesliga's top midfielders.
          </p>
          <p>
            Forsberg has been an important player for the Swedish national team, earning over 90 caps and contributing significantly to their success in international competitions, including the 2018 FIFA World Cup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Emil Forsberg Merchandise</h1>
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

export default EmilForsberg;
