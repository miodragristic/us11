import React from 'react';

const LuisMuriel = () => {
  const items = [
    { id: 1, title: "Luis Muriel Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Muriel Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Luis Muriel Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "Orlando City Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Luis Muriel Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Luis Muriel</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://icdn.sempremilan.com/wp-content/uploads/2021/12/ssc-napoli-v-atalanta-bc-serie-a-1.jpg' 
            alt='Luis Muriel' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: FRANCESCO PECORARO 
| 
Credit: Getty Images
Copyright: 2021 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> April 16, 1991 (Santo Tomás, Atlántico, Colombia)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 5 ft 10 in (1.79 m)</li>
            <li><strong>Current Team:</strong> Orlando City</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Deportivo Cali (2009–2010): 11 appearances, 9 goals</li>
                <li>Udinese (2010–2015): 57 appearances, 15 goals</li>
                <li>Granada (loan, 2010–2011): 7 appearances, 0 goals</li>
                <li>Lecce (loan, 2011–2012): 29 appearances, 7 goals</li>
                <li>Sampdoria (loan, 2015): 16 appearances, 4 goals</li>
                <li>Sampdoria (2015–2017): 63 appearances, 17 goals</li>
                <li>Sevilla (2017–2019): 35 appearances, 8 goals</li>
                <li>Fiorentina (loan, 2019): 19 appearances, 6 goals</li>
                <li>Atalanta (2019–2024): 144 appearances, 54 goals</li>
                <li>Orlando City (2024–present): 33 appearances, 5 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Colombia U20: 5 appearances, 4 goals</li>
                <li>Colombia: 45 appearances, 8 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Luis Muriel</h2>
          <p>
            Luis Fernando Muriel Fruto, known as Luis Muriel, is a Colombian forward recognized for his speed, technical skills, and finishing ability. Throughout his career, Muriel has played for some of the top European clubs, including Udinese, Sampdoria, Sevilla, and Atalanta. He is known for his ability to score crucial goals and has been a key player for both his club and the Colombia national team, representing them in multiple international tournaments, including the 2018 FIFA World Cup.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Luis Muriel Merchandise</h1>
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

export default LuisMuriel;
