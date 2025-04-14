import React from 'react';
import InterLogo from '../Blog/Interlogo.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: './messi' },
    { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: './suarez' },
    { name: 'Sergio Busquets', image: 'https://cdn1.intermiami.news/uploads/52/2024/05/GettyImages-2153690433-1140x760.jpg', link: './busquets' },
    { name: 'Jordi Alba', image: 'https://cdn1.intermiami.news/uploads/52/2024/10/GettyImages-2181071294-750x500.jpg', link: './alba' },
  ];

  return (
    <div className='max-w-8xl mx-auto py-8'>
      <h2 className='text-6xl font-bold text-[#020617] mb-8 text-center'>Trending Players</h2>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {players.map((player) => (
          <a 
            key={player.name} 
            href={player.link} 
            className='group flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl'
          >
            <img 
              src={player.image} 
              alt={player.name} 
              className='h-64 w-full object-cover mb-4 rounded-lg' 
              style={{ objectPosition: 'center 2%' }} // Shifting the image down
            />
            <h3 className='text-lg font-semibold text-center text-[#020617]'>{player.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};


const Inter = () => {
    const items = [
      { id: 1, title: "Men's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-authentic-player-jersey_ss5_p-202860048+u-90c1ap4gywaxy53ptq00+v-yujii65dkxwfdeedytbp.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/XmNXL3', price: '$194.99' },
      { id: 2, title: "Youth Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677367+u-hrow2y8rhvpwrddyelhp+v-dftko5xtuap5eeoanmxy.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/zx42eG', price: '$109.99' },
      { id: 3, title: "Men's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-authentic-player-jersey_ss5_p-202594033+u-knqnh7w92m4datnj7vqo+v-ouhd9owk3afqcevad5fn.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/Oebm9P', price: '$194.99' },
      { id: 4, title: "Youth Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604870+u-mgihjk9ywffxfwjtkbrl+v-fn0trzdceyzwsnzaj1op.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/vPVZ4L', price: '$109.99' },
      { id: 5, title: "Men's Inter Miami CF Lionel Messi adidas Black 2025 The Fortitude Kit Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2025-the-fortitude-kit-replica-player-jersey_ss5_p-201604868+u-wb8lncyovo25ie3w7gxq+v-68593kkmocwzvc55q9tq.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/yqkmeG', price: '$129.99' },
      { id: 6, title: "Men's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677369+u-q7pgp0gh0zui6ksxdfmy+v-tv9ine8f7ynydvoxqofb.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/mOG22O', price: '$129.99' },
      { id: 7, title: "Men's Inter Miami CF Lionel Messi adidas Aqua 2024 Archive Authentic Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-aqua-inter-miami-cf-2024-archive-authentic-jersey_ss5_p-201718913+u-wsqzu0wcriatez9xey7h+v-3wnoyn7wipn1tfxkry9z.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/qzy22g', price: '$129.99' },
      { id: 8, title: "Men's Inter Miami CF Lionel Messi adidas Pink 2024 2getherness 2024 2getherness Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-pink-inter-miami-cf-2024-2getherness-2024-2getherness-authentic-player-jersey_ss5_p-201189575+u-9kfkaf3zfug6vvnjhtfv+v-ilisv1besbmmekk2h8py.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/xLZNNy', price: '$89.99' },
      { id: 9, title: "Women's Inter Miami CF Lionel Messi adidas Light Pink 2025 Euforia Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/womens-adidas-lionel-messi-light-pink-inter-miami-cf-2025-euforia-replica-player-jersey_ss5_p-201677368+u-m2kf9ujhva77tepnux4c+v-jeopznh8m1bpu3weowcv.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/Dy3kkb', price: '$129.99' },
      { id: 10, title: "Men's Inter Miami CF adidas Pink Home 2025 Euforia Authentic Shorts", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-pink-inter-miami-cf-2024-2getherness-replica-player-jersey_ss5_p-201141929+u-gvf4do2tnc53azskbwn8+v-euq3yy4duk9it86xolnx.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/Qjb666', price: '$59.99' },
      { id: 11, title: "Men's Inter Miami CF Lionel Messi adidas Black 2024 La Noche Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2024-la-noche-replica-player-jersey_ss5_p-201141932+u-jxtq9fqkslstjtehu4iu+v-gafrtmumts55sro0vllg.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/jemOOZ', price: '$59.99' },
      { id: 12, title: "Men's Inter Miami CF Lionel Messi Black Authentic Stack Name & Number T-Shirt", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-lionel-messi-black-inter-miami-cf-authentic-stack-name-and-number-t-shirt_ss5_p-202772322+u-ejgjhlhnzgtpxpyjqdnb+v-t89wvstyj4iybc5rkui3.png?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/kOWooV', price: '$31.99 with code' },
      { id: 13, title: "Men's Inter Miami CF adidas Black 2025 Travel Pullover Hoodie", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-black-inter-miami-cf-2025-travel-pullover-hoodie_ss5_p-201657333+u-xmuye01hrwmgdllpcmaw+v-ba7khhpbx9yqateirfku.jpg?_hv=2&w=340', link: 'https://mlsstore.i8h2.net/LK2ZZo', price: '$79.99' },
  ];
  

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Inter Miami CF</h1>
        <div className='mb-6'>
          <img 
            src={InterLogo} 
            alt='Inter Miami' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>

         {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
         <div className='flex gap-4 mb-8 justify-center'>
         <a
            href="https://ticketnetwork.lusg.net/qzmP9b"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            BUY TICKET
          </a>
          <a 
            href="https://example.com/find-hotel" 
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            HOTELS NEAR THE STADIUM
          </a>
        </div>

        

        {/* Club Information */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Club Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Club Internacional de Fútbol Miami</li>
            <li><strong>Nickname(s):</strong> The Herons, Vice City</li>
            <li><strong>Short Name:</strong> Inter Miami</li>
            <li><strong>Founded:</strong> January 29, 2018</li>
            <li><strong>Stadium:</strong> Chase Stadium, Fort Lauderdale, Florida</li>
            <li><strong>Capacity:</strong> 21,550</li>
            <li><strong>Owners:</strong> David Beckham, Jorge Mas, Jose Mas</li>
            <li><strong>President:</strong> David Beckham</li>
            <li><strong>Head Coach:</strong> Javier Mascherano</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Rise on the Football Horizon</h2>
          <p>
            Inter Miami CF is a football club that was founded relatively recently, in 2018. The main figure behind its establishment is David Beckham, whose popularity helped the club become a topic of interest not only in America and England but also around the world.
          </p>
          <p>
            In its early years, Inter Miami did not achieve significant success, but through hard work and dedication, they managed to strive for much more, and today they are one of the strongest teams in MLS. The arrival of Lionel Messi, one of the greatest footballers of all time, further improved their status, but we must not forget other legends who continue to play key roles in this club.
          </p>
          <p>
            For Barcelona fans, watching Inter Miami can be particularly exciting, as legendary players meet young talents. Miami is home to a large number of Latino Americans, which the club has leveraged to focus on the Latino audience. By bringing in players from Spain and South America, Inter Miami brings real football magic to one of the most beautiful cities in the world.
          </p>
          <p>
            We believe this is just the beginning, and that the club will continue to grow and improve, following its path to the top of the football world.
          </p>
        </div>

        {/* Trending Players Section */}
        <TrendingPlayers />
{/* Shop Section */}
<h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <img className='w-full h-64 object-cover' src={item.imageUrl} alt={item.title} />
              <div className='p-4'>
                <h3 className='font-semibold text-lg text-[#020617]'>{item.title}</h3>
                <p className='text-gray-600'>{item.price}</p>
                <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className='mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
>
  Buy Now
</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  );
};

export default Inter;


