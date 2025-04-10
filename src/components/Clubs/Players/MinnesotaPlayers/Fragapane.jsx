import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const FrancoFragapane = () => {
  const items = [
    {
      "title": "Franco Fragapane Minnesota United FC Autographed Fanatics Authentic Match-Used #7 Black adidas Jersey from the 2024 MLS Season - Size M",
      "price": "$299.99",
      "originalPrice": "$299.99",
      "category": "Autographed Memorabilia",
      "shipping": "Ships Free",
      "availability": "Almost Gone!",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/franco-fragapane-minnesota-united-fc-autographed-match-used-number-7-black-adidas-jersey-from-the-2024-mls-season-size-m_ss5_p-202767603+pv-1+u-p9ntffuefurcgrc4f747+v-sfzej4vbfz6peenawyau.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXP2Xo"
    },
    {
      "title": "Men's Minnesota United FC Franco Fragapane adidas White 2023 The Northern Lights Kit Replica Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-franco-fragapane-white-minnesota-united-fc-2023-the-northern-lights-kit-replica-jersey_ss5_p-5350216+pv-1+u-agealgz6mnxhitfjlyxv+v-v6bno6qrsdyla3vthw0v.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/N9R69v"
    },
    {
      "title": "Men's Minnesota United FC Franco Fragapane adidas White 2023 The Northern Lights Kit Authentic Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/mens-adidas-franco-fragapane-white-minnesota-united-fc-2023-the-northern-lights-kit-authentic-jersey_ss5_p-5350228+pv-1+u-8lzonahjbcadkvjbdw0t+v-s3nzhkux7pobq7zuol2o.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/YRbyRm"
    },
    {
      "title": "Women's Minnesota United FC Franco Fragapane adidas White 2023 The Northern Lights Kit Replica Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "availability": "",
      "imageUrl": "https://images.footballfanatics.com/minnesota-united-fc/womens-adidas-franco-fragapane-white-minnesota-united-fc-2023-the-northern-lights-kit-replica-jersey_ss5_p-5350220+pv-1+u-84rsfi7crkddy0zgq3pu+v-j0txekdppfnhdoex12pt.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7anJar"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Franco Fragapane</h1>

        {/* Player Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://northlandsoccer.com/wp-content/uploads/2023/05/2023.05.09_MINvPHL_USOC_0011_LAKE0231.jpg' 
            alt='Franco Fragapane' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
        <div className="mb-10 text-center text-sm text-gray-500">
          <p>Creator: Michael Lake / Lake Photography 
| 
Credit: Michael Lake / Lake Photography
Copyright: ©2023 Michael Lake / Lake Photography</p>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Franco Rodrigo Fragapane</li>
            <li><strong>Date of Birth:</strong> 6 February 1993 (Las Heras, Argentina)</li>
            <li><strong>Position:</strong> Winger</li>
            <li><strong>Height:</strong> 1.70 m (5 ft 7 in)</li>
            <li><strong>Current Team:</strong> Minnesota United</li>
            <li><strong>Youth Teams:</strong> Huracán Las Heras, EF Ariel Gómez, Boca Juniors</li>
            <li><strong>Senior Teams:</strong> Boca Juniors, Elche (loan), Elche Ilicitano (loan), Celta B (loan), Arsenal de Sarandí, Unión de Santa Fe, Talleres, Fortaleza (loan), Minnesota United</li>
            <li><strong>International Career:</strong> Argentina U23</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Franco Fragapane: A Versatile Winger</h2>
          <p>
            Franco Fragapane is a dynamic winger from Argentina, celebrated for his agility, creativity, and ability to deliver crucial assists. He developed his skills at Boca Juniors and gained valuable experience during loan spells at Elche and Celta B.
          </p>
          <p>
            Fragapane’s journey through Argentine clubs like Unión de Santa Fe and Talleres honed his talent, leading to his current role with Minnesota United in Major League Soccer. His determination and consistent performances make him a vital asset for his team.
          </p>
        </div>

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Franco Fragapane Merchandise</h1>
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

export default FrancoFragapane;
