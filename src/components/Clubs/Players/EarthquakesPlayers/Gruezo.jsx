import React from 'react';

const CarlosGruezo = () => {
  const items = [
    { id: 1, title: "Carlos Gruezo Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Carlos Gruezo Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Carlos Gruezo Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "San Jose Earthquakes Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Carlos Gruezo Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Carlos Gruezo</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrAixITzt_8NqTyu6Ya42MbQGtaqqyO40sg&s' 
            alt='Carlos Gruezo' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Alexander Hassenstein 
| 
Credit: Getty Images
Copyright: 2020 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> April 19, 1995 (Santo Domingo, Ecuador)</li>
            <li><strong>Position:</strong> Midfielder, Centre-back</li>
            <li><strong>Height:</strong> 5 ft 8 in (1.73 m)</li>
            <li><strong>Current Team:</strong> San Jose Earthquakes</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Independiente DV (2011): 4 appearances, 0 goals</li>
                <li>Barcelona SC (2012–2014): 77 appearances, 3 goals</li>
                <li>VfB Stuttgart (2014–2016): 18 appearances, 1 goal</li>
                <li>FC Dallas (2016–2019): 98 appearances, 3 goals</li>
                <li>FC Augsburg (2019–2023): 69 appearances, 0 goals</li>
                <li>San Jose Earthquakes (2023–present): 47 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Carlos Gruezo</h2>
          <p>
            Carlos Gruezo is an Ecuadorian midfielder and centre-back known for his dynamic playmaking ability and defensive capabilities. A product of Ecuador’s youth teams, he began his professional career with Barcelona SC before moving to VfB Stuttgart in Germany. Gruezo later joined FC Dallas, where he earned a reputation for his passing range and tackling skills. After stints with FC Augsburg in the Bundesliga, Gruezo currently plays for San Jose Earthquakes, contributing to their midfield and defensive stability.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Carlos Gruezo Merchandise</h1>
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

export default CarlosGruezo;
