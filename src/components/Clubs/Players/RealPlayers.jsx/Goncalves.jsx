import React from 'react';

const DiogoGoncalves = () => {
  const items = [
    { id: 1, title: "Diogo Gonçalves Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Diogo Gonçalves Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Diogo Gonçalves Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Real Salt Lake Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Diogo Gonçalves Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Diogo António Cupido Gonçalves</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.shutterstock.com/editorial/image-editorial/MfT5Q441N2z0Ue42MzI5NTA=/match-between-real-salt-lake-portland-timbers-220nw-14733382i.jpg' 
            alt='Diogo Gonçalves' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Copyright: Copyright Shutterstock </p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> February 6, 1997 (Almodôvar, Portugal)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Height:</strong> 5 ft 10 in (1.78 m)</li>
            <li><strong>Current Team:</strong> Real Salt Lake</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Benfica B (2015–2018): 86 appearances, 15 goals</li>
                <li>Benfica (2017–2023): 61 appearances, 1 goal</li>
                <li>Nottingham Forest (2018–2019, loan): 7 appearances, 0 goals</li>
                <li>Famalicão (2019–2020, loan): 27 appearances, 5 goals</li>
                <li>Copenhagen (2023–2024): 38 appearances, 15 goals</li>
                <li>Real Salt Lake (2024–present): 9 appearances, 2 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Diogo António Cupido Gonçalves</h2>
          <p>
            Diogo Gonçalves is a talented Portuguese winger who has made his mark at clubs in Portugal, England, and Denmark. Starting his career at Benfica, Gonçalves gained valuable experience while on loan to Nottingham Forest and Famalicão before making a strong return to Benfica. He later moved to Copenhagen, where he enjoyed success before joining Real Salt Lake. Known for his agility and creative attacking play, Gonçalves has also been a key player in various youth national teams for Portugal.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Diogo Gonçalves Merchandise</h1>
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

export default DiogoGoncalves;
