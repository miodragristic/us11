import React from 'react';

const OrbelinPineda = () => {
  const items = [
    { id: 1, title: "Orbelín Pineda Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Orbelín Pineda Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Orbelín Pineda Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "AEK Athens Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Orbelín Pineda Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Orbelín Pineda</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://www.365scores.com/es/news/wp-content/uploads/2024/06/GettyImages-1477262240-1024x683.jpg' 
            alt='Orbelín Pineda' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Jam Media 
| 
Credit: Getty Images
Copyright: 2023 Jam Media</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> March 24, 1996 (Coyuca de Catalán, Guerrero, Mexico)</li>
            <li><strong>Position:</strong> Midfielder, Winger</li>
            <li><strong>Height:</strong> 5 ft 7 in (1.69 m)</li>
            <li><strong>Current Team:</strong> AEK Athens</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>AEK Athens (2023–present): 50 appearances, 3 goals</li>
                <li>Celta (2022–2023): 7 appearances, 0 goals</li>
                <li>Cruz Azul (2019–2022): 97 appearances, 10 goals</li>
                <li>Guadalajara (2016–2018): 102 appearances, 7 goals</li>
                <li>Querétaro (2014–2015): 44 appearances, 8 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Orbelín Pineda</h2>
          <p>
            Orbelín Pineda is a talented Mexican footballer, known for his versatility as a midfielder and winger. Standing at 5 feet 7 inches, Pineda is highly regarded for his dribbling skills, vision, and ability to break down defenses. He has had a successful career in Mexico with clubs like Guadalajara and Cruz Azul, and in 2022 he moved to Europe, first joining Celta and then loaned to AEK Athens. He is also an important player for the Mexican national team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Orbelín Pineda Merchandise</h1>
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

export default OrbelinPineda;
