import React from 'react';

const CyleLarin = () => {
  const items = [
    { id: 1, title: "Cyle Larin Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Cyle Larin Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Cyle Larin Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Mallorca Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Cyle Larin Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Cyle Larin</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://lastwordonsports.com/football/wp-content/uploads/sites/4/2022/11/CanMNT-Striker-Cyle-Larin-scores-the-first-goal-against-the-USMNT-at-Tim-Hortons-Field.jpg' 
            alt='Cyle Larin' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Steve Russell 
| 
Credit: Toronto Star via Getty Images
Copyright: FVCaR7phscLc62jyR8dg0Q==</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> April 17, 1995 (Brampton, Ontario, Canada)</li>
            <li><strong>Position:</strong> Forward, Left Winger</li>
            <li><strong>Height:</strong> 6 ft 2 in (1.88 m)</li>
            <li><strong>Current Team:</strong> Mallorca</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Orlando City (2015–2017): 87 appearances, 43 goals</li>
                <li>Beşiktaş (2018–2022): 83 appearances, 31 goals</li>
                <li>Club Brugge (2022–2023): 9 appearances, 1 goal</li>
                <li>Valladolid (2023, loan): 19 appearances, 8 goals</li>
                <li>Mallorca (2023–present): 51 appearances, 8 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Cyle Larin</h2>
          <p>
            Cyle Larin is a Canadian professional footballer known for his goal-scoring prowess and versatility on the field. Born in Brampton, Ontario, Larin began his career with Orlando City before moving to Turkey to play for Beşiktaş, where he became one of the club's key attackers. He has since played for various clubs in Europe, including Club Brugge and Valladolid, before joining Mallorca. Larin is also a crucial player for the Canadian national team, contributing significantly to their offensive lineup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Cyle Larin Merchandise</h1>
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

export default CyleLarin;
