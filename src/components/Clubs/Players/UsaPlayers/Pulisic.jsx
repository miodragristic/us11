import React from 'react';

const ChristianPulisic = () => {
  const items = [
    { id: 1, title: "Christian Pulisic AC Milan Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Christian Pulisic Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Christian Pulisic Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "AC Milan Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Christian Pulisic Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Christian Pulisic</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://media.bleacherreport.com/image/upload/v1642803493/c6tcjkzmqnb1iphp4dik.jpg' 
            alt='Christian Pulisic' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: John Dorton/ISI Photos 
| 
Credit: Getty Images
Copyright: 2021 John Dorton/ISI Photos</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> September 18, 1998 (Hershey, Pennsylvania, United States)</li>
            <li><strong>Position:</strong> Winger, Attacking Midfielder</li>
            <li><strong>Height:</strong> 5 ft 10 in (1.78 m)</li>
            <li><strong>Current Team:</strong> AC Milan</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Borussia Dortmund (2016–2019): 81 appearances, 10 goals</li>
                <li>Chelsea (2019–2023): 98 appearances, 20 goals</li>
                <li>Borussia Dortmund (loan, 2019): 9 appearances, 3 goals</li>
                <li>AC Milan (2023–present): 52 appearances, 17 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Christian Pulisic</h2>
          <p>
            Christian Pulisic is one of the brightest talents in American soccer, known for his blistering pace, creativity, and ability to play in multiple attacking roles. He began his European career at Borussia Dortmund, before moving to Chelsea where he gained recognition in the Premier League. Pulisic's skill and flair on the ball have made him a regular for both his club and the United States national team, where he has scored 32 goals in 76 appearances as of 2023.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Christian Pulisic Merchandise</h1>
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

export default ChristianPulisic;
