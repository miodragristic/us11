import React from 'react';

const EricMaximChoupoMoting = () => {
  const items = [
    { id: 1, title: "Eric Choupo-Moting Home Jersey", imageUrl: 'https://example.com/jersey.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Choupo-Moting Soccer Ball", imageUrl: 'https://example.com/ball.jpg', link: 'https://www.example.com/product/2', price: '$249.99' },
    { id: 3, title: "Choupo-Moting Poster", imageUrl: 'https://example.com/poster.jpg', link: 'https://www.example.com/product/3', price: '$19.99' },
    { id: 4, title: "New York Red Bulls Scarf", imageUrl: 'https://example.com/scarf.jpg', link: 'https://www.example.com/product/4', price: '$29.99' },
    { id: 5, title: "Choupo-Moting Autographed Photo", imageUrl: 'https://example.com/photo.jpg', link: 'https://www.example.com/product/5', price: '$99.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-gray-100 pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Eric Maxim Choupo-Moting</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://afrosportnow.com/wp-content/uploads/2023/12/GettyImages-1446328647-scaled.jpg' 
            alt='Eric Maxim Choupo-Moting' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Julian Finney 
| 
Credit: Getty Images
Copyright: 2022 Getty Images</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Date of Birth:</strong> March 23, 1989 (Hamburg, West Germany)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Height:</strong> 6 ft 3 in (1.91 m)</li>
            <li><strong>Current Team:</strong> New York Red Bulls</li>
            <li><strong>Senior Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Hamburger SV II (2007–2011): 31 appearances, 1 goal</li>
                <li>Hamburger SV (2007–2011): 23 appearances, 2 goals</li>
                <li>FC Nürnberg (loan, 2009–2010): 25 appearances, 5 goals</li>
                <li>Mainz 05 (2011–2014): 74 appearances, 20 goals</li>
                <li>Schalke 04 (2014–2017): 82 appearances, 18 goals</li>
                <li>Stoke City (2017–2018): 30 appearances, 5 goals</li>
                <li>Paris Saint-Germain (2018–2020): 31 appearances, 6 goals</li>
                <li>Bayern Munich (2020–2024): 88 appearances, 19 goals</li>
                <li>New York Red Bulls (2025–): 0 appearances, 0 goals</li>
              </ul>
            </li>
            <li><strong>International Career:</strong> 
              <ul className='list-disc list-inside ml-5'>
                <li>Germany U19: 5 appearances, 4 goals</li>
                <li>Germany U21: 5 appearances, 4 goals</li>
                <li>Cameroon: 73 appearances, 20 goals</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>About Eric Maxim Choupo-Moting</h2>
          <p>
            Eric Maxim Choupo-Moting is a German-born forward who represents Cameroon at the international level. Known for his strength and aerial ability, Choupo-Moting has enjoyed successful club stints with teams like Bayern Munich, Paris Saint-Germain, and Schalke 04. In addition to his club career, he has earned over 70 caps for the Cameroon national team, scoring 20 goals. Choupo-Moting is currently playing for the New York Red Bulls in the MLS.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Eric Choupo-Moting Merchandise</h1>
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

export default EricMaximChoupoMoting;
