import React from 'react';
import Galaxy from '../../assets/posters/Galaxy.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: './Reus' },
    { name: 'Riqui Puig', image: 'https://cdn1.lagalaxy.news/uploads/54/2023/08/GettyImages-1499684145-1920x1280.jpg', link: './Puig' },
    { name: 'Gabriel Pec', image: 'https://cdn1.vamofutebol.com/uploads/5/2024/12/GettyImages-2185864981-1140x760.jpg', link: './Pec' },
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
              style={{ objectPosition: 'center 2%' }}
            />
            <h3 className='text-lg font-semibold text-center text-[#020617]'>{player.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

const LAGalaxy = () => {
  const items = [
    {
      "title": "Men's LA Galaxy adidas Navy 2025 RIZON Authentic Jersey",
      "price": "$149.99",
      "originalPrice": "$149.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-navy-la-galaxy-2025-rizon-authentic-jersey_ss5_p-202652666+pv-1+u-hrz4qkj1ljspmfqnkyxp+v-fdauoybs5bq56zoetpkb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yg0N"
    },
    {
      "title": "Men's LA Galaxy adidas Green 2023 LA Kit Authentic Jersey",
      "price": "$79.99",
      "originalPrice": "$159.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-green-la-galaxy-2023-la-kit-authentic-jersey_pi5273000_altimages_ff_5273528-ca34fb22ed806630a82aalt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/o45q6m"
    },
    {
      "title": "Men's LA Galaxy adidas Navy 2025 RIZON Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-navy-la-galaxy-2025-rizon-replica-jersey_ss5_p-202652746+pv-1+u-ye1hvuhflloo02imkfox+v-ktcnfmnijpxmomgkdzty.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/WyAq3X"
    },
    {
      "title": "Men's LA Galaxy adidas Navy 2025 RIZON Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-navy-la-galaxy-2025-rizon-authentic-custom-jersey_ss5_p-202709837+pv-1+u-kwvymhdqxnvzu3tcjduq+v-roixrqq4u83r33xfj6xb.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/EEOKvK"
    },
    {
      "title": "Men's LA Galaxy adidas Silver 2025 Training Jersey",
      "price": "$54.99",
      "originalPrice": "$54.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens%C2%A0adidas-silver-la-galaxy-2025-training-jersey_ss5_p-201662790+pv-1+u-s58bwhkvh0j2cnsslewq+v-ejlvqhn6df5bqqas0idd.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/bOPa9k"
    },
    {
      "title": "Women's LA Galaxy adidas Green 2023 LA Kit Replica Jersey",
      "price": "$39.99",
      "originalPrice": "$99.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/womens-adidas-green-la-galaxy-2023-la-kit-replica-jersey_pi5274000_altimages_ff_5274093-3b8034a364b5f48c14d1alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOkajk"
    },
    {
      "title": "Youth LA Galaxy adidas Navy 2025 RIZON Replica Jersey",
      "price": "$79.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-navy-la-galaxy-2025-rizon-replica-jersey_ss5_p-202658584+pv-1+u-eggv8ec8ixw99cxblhvp+v-oyk2ohmeowuo9xaxvfh0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/yqj2QW"
    },
    {
      "title": "Men's LA Galaxy adidas Green 2023 LA Kit Authentic Custom Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-green-la-galaxy-2023-la-kit-authentic-custom-jersey_pi5280000_altimages_ff_5280993-ef7907fad643b4c94fa1alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/K0Oj39"
    },
    {
      "title": "Youth LA Galaxy adidas Green 2023 LA Kit Replica Jersey",
      "price": "$44.99",
      "originalPrice": "$79.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-green-la-galaxy-2023-la-kit-replica-jersey_pi5274000_altimages_ff_5274301-9da63ee18ed0e002a78ealt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/7an5kQ"
    },
    {
      "title": "Youth LA Galaxy Riqui Puig adidas Green 2024 LA Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-riqui-puig-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-201285140+pv-1+u-y0l4tqdsnhmlhax8kmpl+v-gaxfnif4fprhufytfbhw.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/qzm4XL"
    },
    {
      "title": "Men's LA Galaxy Marco Reus adidas Green 2024 LA Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-marco-reus-green-la-galaxy-2024-la-kit-authentic-player-jersey_ss5_p-202211419+pv-1+u-8xkyxapfpw2rjkamswzw+v-0grxctbgcekkcienwskg.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/DyOKzd"
    },
    {
      "title": "Men's LA Galaxy Riqui Puig adidas Green 2024 LA Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-riqui-puig-green-la-galaxy-2024-la-kit-authentic-player-jersey_ss5_p-201285137+pv-1+u-xnmnkttxlsf0y7o1ngdi+v-to8sxegt0rbzr1qyr7r0.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQrA0"
    },
    {
      "title": "Youth LA Galaxy Gabriel Pec adidas Green 2024 LA Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-gabriel-pec-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-201341070+pv-1+u-cft9avowikzdqdn9r0nf+v-dzyuyl9j1bu43kknfcym.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/e1eKPz"
    },
    {
      "title": "Women's LA Galaxy adidas Green 2023 LA Kit Replica Custom Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/womens-adidas-green-la-galaxy-2023-la-kit-replica-custom-jersey_pi5283000_altimages_ff_5283366-6951a0bb0e2b7c54de63alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/XmGY3g"
    },
    {
      "title": "Women's LA Galaxy adidas Navy 2025 RIZON Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$99.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/womens-adidas-navy-la-galaxy-2025-rizon-replica-jersey_ss5_p-202658094+pv-1+u-tnsciizeg5vtfdw3rwvn+v-skcsfpsuxogllbybdk3p.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/zxPN96"
    },
    {
      "title": "Men's LA Galaxy adidas Navy 2025 Jersey Hook AEROREADY T-Shirt",
      "price": "$39.99",
      "originalPrice": "$39.99",
      "category": "T-Shirts",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-navy-la-galaxy-2025-jersey-hook-aeroready-t-shirt_ss5_p-201664628+pv-1+u-frknqzskzbfjvtvi0ntr+v-vdrdcmpincpg1jqalrce.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/nXPLzX"
    },
    {
      "title": "Youth LA Galaxy Gastón Brugman adidas Green 2023 LA Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-gast%C3%B3n-brugman-green-la-galaxy-2023-la-kit-replica-player-jersey_pi5355000_altimages_ff_5355705-9c4797478d6c295d3452alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/2ay13Q"
    },
    {
      "title": "Men's LA Galaxy Gastón Brugman adidas Green 2023 LA Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-gast%C3%B3n-brugman-green-la-galaxy-2023-la-kit-authentic-player-jersey_pi5355000_altimages_ff_5355706-377422e3eae434d8ec15alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/vPQNrj"
    },
    {
      "title": "Women's LA Galaxy Marco Reus adidas Green 2024 LA Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/womens-adidas-marco-reus-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-202211421+pv-1+u-bazlwyddzlb2e88an8xs+v-4msegbgrf1dxogninw7p.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/dOkaAk"
    },
    {
      "title": "Youth LA Galaxy Marco Reus adidas Green 2024 LA Kit Replica Player Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-marco-reus-green-la-galaxy-2024-la-kit-replica-player-jersey_ss5_p-202211422+pv-1+u-trhxeu1y7oel7hx9jukx+v-eswtdyfdzqbxfn45d7y8.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/MA2m1o"
    },
    {
      "title": "Youth LA Galaxy adidas Green 2023 LA Kit Replica Custom Jersey",
      "price": "$114.99",
      "originalPrice": "$114.99",
      "category": "Youth Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/youth-adidas-green-la-galaxy-2023-la-kit-replica-custom-jersey_pi5283000_altimages_ff_5283430-7c0b867bc09786781217alt1_full.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/mOj5B1"
    },
    {
      "title": "Men's LA Galaxy adidas Silver 2025 Quarter-Zip Long Sleeve Training Top",
      "price": "$74.99",
      "originalPrice": "$74.99",
      "category": "Training Gear",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens%C2%A0adidas-silver-la-galaxy-2025-quarter-zip-long-sleeve-training-top_ss5_p-201662918+pv-1+u-vv6or1nvsoqb7kqussrv+v-6oc7m9m7bvu5h1hi6qm4.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/jeQrg0"
    },
    {
      "title": "Men's LA Galaxy Gabriel Pec adidas Green 2024 LA Kit Authentic Player Jersey",
      "price": "$194.99",
      "originalPrice": "$194.99",
      "category": "Men Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-gabriel-pec-green-la-galaxy-2024-la-kit-authentic-player-jersey_ss5_p-201341067+u-u7gbonikos6mbtuhbquf+v-sl5m3vvifpwsgnr1stud.jpg?_hv=2&w=400",
      "link": "https://mlsstore.i8h2.net/55yg3N"
    },
    {
      "title": "Women's LA Galaxy Gabriel Pec adidas Green 2024 LA Kit Replica Player Jersey",
      "price": "$134.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/mens-adidas-gabriel-pec-green-la-galaxy-2024-la-kit-authentic-player-jersey_ss5_p-201341067+pv-1+u-u7gbonikos6mbtuhbquf+v-rupps7m6frx4p53pblgr.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/55yg3N"
    },
    {
      "title": "Women's LA Galaxy adidas Black 2024 Archive Replica Jersey",
      "price": "$99.99",
      "originalPrice": "$134.99",
      "category": "Women Jerseys",
      "shipping": "Ships Free",
      "imageUrl": "https://images.footballfanatics.com/la-galaxy/womens-adidas-black-la-galaxy-2024-archive-replica-jersey_ss5_p-201712084+pv-1+u-dsvctxhsl8sfcgqjdghg+v-9mhd4htrzydzfsm6iaql.jpg?_hv=2&w=900",
      "link": "https://mlsstore.i8h2.net/xLrkP1"
    }

    
  ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>LA Galaxy</h1>
        <div className='mb-6'>
          {/* Add an image of LA Galaxy here */}
          <img
            src={Galaxy}
            alt='LA Galaxy'
            className='w-full h-[400px] object-cover rounded-lg shadow-md'
          />
        </div>

              {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
              <div className='flex gap-4 mb-8 justify-center'>
              <a
            href="https://ticketnetwork.lusg.net/xLr7nO"
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
            <li><strong>Full Name:</strong> LA Galaxy</li>
            <li><strong>Nickname(s):</strong> The Galaxy</li>
            <li><strong>Founded:</strong> 1996</li>
            <li><strong>Stadium:</strong> Dignity Health Sports Park, Carson, California</li>
            <li><strong>Capacity:</strong> 27,000</li>
            <li><strong>Owner:</strong> AEG (Anschutz Entertainment Group)</li>
            <li><strong>Head Coach:</strong> Greg Vanney</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Stars in Los Angeles</h2>
          <p>
            LA Galaxy, one of the most iconic teams in Major League Soccer, has built a legacy of excellence and star power since its founding in 1996. Known for attracting international talent like David Beckham, Zlatan Ibrahimović, and now Chicharito, the Galaxy have set the standard for success in MLS.
          </p>
          <p>
            The team plays at the Dignity Health Sports Park, one of the best soccer-specific stadiums in the country. The Galaxy are renowned for their attacking playstyle and have consistently been a contender for MLS Cup titles.
          </p>
          <p>
            With stars like Chicharito and Douglas Costa, the LA Galaxy continue to make waves in the league and are always looking to add more trophies to their storied history.
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

export default LAGalaxy;
