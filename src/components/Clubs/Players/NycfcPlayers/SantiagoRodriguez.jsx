import React from 'react';

const SantiagoRodriguez = () => {
  const items = [
    { id: 1, title: "Santiago Rodríguez Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Santiago Rodríguez Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Santiago Rodríguez Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "New York City FC Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Santiago Rodríguez Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Santiago Rodríguez</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://assets.goal.com/images/v3/getty-2150744981/crop/MM5DGOBYHA5DEMJYG45G433XMU5DOMBSHIYTANQ=/GettyImages-2150744981.jpg' 
            alt='Santiago Rodríguez' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Sarah Stier 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Santiago Mariano Rodríguez Molina</li>
            <li><strong>Date of Birth:</strong> 8 January 2000 (Montevideo, Uruguay)</li>
            <li><strong>Position:</strong> Attacking Midfielder</li>
            <li><strong>Height:</strong> 5 ft 6 in (1.68 m)</li>
            <li><strong>Current Team:</strong> New York City FC</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Nacional (2019–2020, 2020–2021 loan): 38 appearances, 11 goals</li>
                <li>Montevideo City Torque (2020–2023): 3 appearances, 1 goal</li>
                <li>New York City FC (2021–2022 loan, 2023–): 77 appearances, 11 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Uruguay U15 (2014–2015): 20 appearances, 4 goals</li>
                <li>Uruguay U17 (2016–2017): 21 appearances</li>
                <li>Uruguay U18 (2018): 1 appearance, 1 goal</li>
                <li>Uruguay U20 (2018–2019): 10 appearances</li>
                <li>Uruguay U23 (2020): 8 appearances</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Santiago Rodríguez</h2>
          <p>
            Santiago Rodríguez is a talented attacking midfielder from Uruguay, known for his playmaking ability, vision, and creativity on the field. A product of the Nacional youth system, he has quickly risen to prominence, becoming a key player for New York City FC in Major League Soccer.
          </p>
          <p>
            Representing Uruguay at multiple youth levels, Santiago has demonstrated his potential on the international stage. With a bright future ahead, he continues to be a crucial part of NYCFC's success.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Santiago Rodríguez Merchandise</h1>
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

export default SantiagoRodriguez;
