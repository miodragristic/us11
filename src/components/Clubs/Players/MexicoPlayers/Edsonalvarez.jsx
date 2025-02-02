import React from 'react';

const EdsonAlvarez = () => {
  const items = [
    { id: 1, title: "Edson Álvarez Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Edson Álvarez Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Edson Álvarez Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "West Ham Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Edson Álvarez Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Edson Álvarez</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://westhamblog.co.uk/wp-content/uploads/2024/06/mexico-v-brazil-international-friendly-scaled.jpg' 
            alt='Edson Álvarez' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Omar Vega 
| 
Credit: Getty Images
Copyright: 2024 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> October 24, 1997 (Tlalnepantla, Mexico)</li>
            <li><strong>Position:</strong> Defensive midfielder, Centre-back</li>
            <li><strong>Height:</strong> 6 ft 2 in (1.87 m)</li>
            <li><strong>Current Team:</strong> West Ham United</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>West Ham United (2023–present): 49 appearances, 1 goal</li>
                <li>Ajax (2019–2023): 98 appearances, 10 goals</li>
                <li>América (2016–2019): 86 appearances, 5 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Edson Álvarez</h2>
          <p>
            Edson Álvarez is a talented Mexican footballer known for his versatility in midfield and defense. Standing at 6 feet 2 inches, Álvarez is known for his physical presence, strong tackling ability, and leadership qualities. He began his career at América before moving to Ajax, where he became a key player. In 2023, he joined West Ham United. Álvarez is also an important player for the Mexican national team, having represented them in various international competitions.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Edson Álvarez Merchandise</h1>
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

export default EdsonAlvarez;
