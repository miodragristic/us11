import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const DarlingtonNagbe = () => {
  const items = [
    { id: 1, title: "Darlington Nagbe Home Jersey 2024", imageUrl: 'https://example.com/jersey1.jpg', link: 'https://www.example.com/product/1', price: '$129.99' },
    { id: 2, title: "Signed Darlington Nagbe Soccer Ball", imageUrl: 'https://example.com/ball1.jpg', link: 'https://www.example.com/product/2', price: '$299.99' },
    { id: 3, title: "Darlington Nagbe Name & Number T-Shirt", imageUrl: 'https://example.com/tshirt1.jpg', link: 'https://www.example.com/product/3', price: '$34.99' },
    { id: 4, title: "Darlington Nagbe Signed Match Cleats", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/4', price: '$349.99' },
    { id: 5, title: "Darlington Nagbe Training Jersey", imageUrl: 'https://example.com/jersey2.jpg', link: 'https://www.example.com/product/5', price: '$119.99' },
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Darlington Nagbe</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://wallpapers.com/images/hd/darlington-nagbe-mls-medically-cleared-cy1tf00pgqbg7a3o.jpg' 
            alt='Darlington Nagbe' 
            style={{ objectPosition: 'center 20%' }} 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Unknown | Credit: Team XYZ | Copyright: 2024 Team XYZ</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Darlington Joephillip Nagbe</li>
            <li><strong>Born:</strong> July 19, 1990 (Monrovia, Liberia)</li>
            <li><strong>Position:</strong> Midfielder</li>
            <li><strong>Current Team:</strong> Columbus Crew</li>
            <li><strong>Previous Clubs:</strong> Portland Timbers, Atlanta United</li>
            <li><strong>Achievements:</strong> 4× MLS Cup Winner, 1× CONCACAF Gold Cup Winner</li>
          </ul>
        </div>

{/* Additional Text */}
<div className='text-[#020617] mb-8'>
  <h2 className='text-2xl font-semibold mb-2'>Darlington Nagbe: The Midfield Maestro</h2>
  <p>
    Darlington Nagbe is a seasoned midfielder known for his exceptional technical skills and composure on the ball. Born in Liberia, Nagbe moved to the U.S. at a young age and quickly became a rising star in U.S. soccer. His early career saw him shine at the University of Akron, where he won the MAC Hermann Trophy as the top college soccer player in 2010, before being selected second overall in the 2011 MLS SuperDraft by the Portland Timbers.
  </p>
  <p>
    Over the course of his career, Nagbe has earned a reputation as one of the most skillful and intelligent players in Major League Soccer. He spent seven successful seasons with the Portland Timbers, helping the team win the 2015 MLS Cup, and then continued his journey with Atlanta United, winning the 2018 MLS Cup and several other trophies. In 2020, Nagbe moved to Columbus Crew, where he further cemented his legacy by leading the team to a fourth MLS Cup victory in 2023, becoming one of only ten players in MLS history to win four titles.
  </p>
  <p>
    Nagbe's playing style is characterized by his exceptional passing range, vision, and dribbling ability. Often deployed in a box-to-box or deeper midfield role, he is known for his ability to control the tempo of the game, break defensive lines with his smooth dribbling, and set up attacking opportunities. His leadership qualities have also made him a crucial figure for both club and country, earning him the captaincy of Columbus Crew in 2023.
  </p>
  <p>
    On the international stage, Nagbe earned 25 caps for the U.S. Men's National Team, including participation in the 2017 CONCACAF Gold Cup, which the U.S. won. Despite stepping away from the national team after 2018 to focus on family, his contributions to the national side and MLS are widely respected, solidifying his place as one of the league’s greatest midfielders.
  </p>
</div>


        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Darlington Nagbe Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-48'>
                <img src={item.imageUrl} alt={item.title} className='object-contain w-full h-full group-hover:scale-105 transition duration-300' />
              </div>
              <div className='p-4'>
                <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                <p className='text-lg font-semibold'>{item.price}</p>
                <a href={item.link} target='_blank' rel='noopener noreferrer' className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-2'>
                  Buy on Amazon <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DarlingtonNagbe;
