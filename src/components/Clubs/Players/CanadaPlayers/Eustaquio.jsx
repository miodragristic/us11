import React from 'react';

const StephenEustaquio = () => {
  const items = [
    { id: 1, title: "Stephen Eustáquio Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Stephen Eustáquio Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Stephen Eustáquio Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Porto Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Stephen Eustáquio Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Stephen Eustáquio</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://worldfootballindex.com/wp-content/uploads/2022/01/Stephen-Eusta%CC%81quio-Canada.jpg' 
            alt='Stephen Eustáquio' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Eloisa Sanchez de Alba 
| 
Credit: Getty Images
Copyright: All rights reserved</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> December 21, 1996 (Leamington, Canada)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Height:</strong> 5 ft 10 in (1.78 m)</li>
            <li><strong>Current Team:</strong> Porto</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Paços Ferreira (2020–2021): 34 appearances, 2 goals</li>
                <li>Porto (2022–present): 72 appearances, 4 goals</li>
                <li>Chaves (2018–2019): 29 appearances, 1 goal</li>
                <li>Leixões (2017–2018): 20 appearances, 0 goals</li>
                <li>Torreense (2015–2017): 56 appearances, 0 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Stephen Eustáquio</h2>
          <p>
            Stephen Eustáquio is a Canadian-born Portuguese professional footballer known for his work rate and composure in midfield. Starting his youth career in Canada, Eustáquio later moved to Portugal, where he played for several teams, including Paços Ferreira and Chaves. His stellar performances caught the attention of Porto, where he currently plays. Eustáquio is also an important figure in the Canadian national team, contributing to their midfield with creativity and defensive contributions.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Stephen Eustáquio Merchandise</h1>
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

export default StephenEustaquio;
