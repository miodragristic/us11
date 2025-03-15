import React from 'react';
import Chicago from '../../assets/posters/Chicago.png';
import { FaShoppingCart } from 'react-icons/fa';

const TrendingPlayers = () => {
  const players = [
    // { name: 'Arnaud Souquet', image: 'https://northlandsoccer.com/wp-content/uploads/2023/07/20230727_194734_MNUFC_v_ChicagoFire_LeaguesCup_0022_LAKE0653.jpg', link: './souquet' },
    { name: 'Carlos Terán', image: 'https://caracoltv.brightspotcdn.com/dims4/default/0358532/2147483647/strip/false/crop/1024x681+0+0/resize/1200x798!/format/webp/quality/75/?url=http%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2F2c%2F44%2F5de36e4749e094e38acb5ff81555%2Fgettyimages-1359085143.jpg', link: './teran' },
    { name: 'Chris Mueller', image: 'https://wgntv.com/wp-content/uploads/sites/5/2023/02/gettyimages-1416710153-594x594-1.jpg', link: './mueller' },
    { name: 'Brian Gutiérrez', image: 'https://cdn1.unitedinfocus.com/uploads/14/2023/06/GettyImages-1493904261-scaled.jpg', link: './gutierrez' },
  ];

  return (
    <div className='max-w-8xl mx-auto py-8'>
      <h2 className='text-6xl font-bold text-[#020617] mb-8 text-center'>Trending Players</h2>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {players.map((player) => (
          <a 
            key={player.name} 
            href={player.link} 
            target='_blank' 
            rel='noopener noreferrer' 
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

const ChicagoFire = () => {
  const items = [
    { id: 1, title: 'Men\'s Chicago Fire adidas White 2024 A Kit For All Authentic Jersey', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-adidas-white-chicago-fire-2024-a-kit-for-all-authentic-jersey_ss5_p-201176885+u-gwgmhdijt3sgz33lnugg+v-lclsfgv1nhawxjk9nq4m.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-2024-authentic-jersey', price: '$74.99' },
    { id: 2, title: 'Men\'s Chicago Fire adidas Light Blue 2025 The Municipal Kit Authentic Jersey', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-adidas-light-blue-chicago-fire-2025-the-municipal-kit-authentic-jersey_ss5_p-202652658+u-sotkmx7dodfovjiayqca+v-xrvfezkvr8tfwmltjrev.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-light-blue-2025-jersey', price: '$149.99' },
    { id: 3, title: 'Men\'s Chicago Fire Navy Team Hometown Collection T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-navy-chicago-fire-team-hometown-collection-t-shirt_pi5281000_ff_5281691-f827290852ab6e4d375e_full.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-navy-hometown-tshirt', price: '$34.99' },
    { id: 4, title: 'Men\'s Chicago Fire 500 Level Red Distressed Primary Logo Pullover Hoodie', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-500-level-red-chicago-fire-distressed-primary-logo-pullover-hoodie_ss5_p-201462935+u-lsypm5pukpfpbxq4yihh+v-0a6q2fguduzxylnilvlq.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-500-level-red-hoodie', price: '$69.99' },
    { id: 5, title: 'Women\'s Chicago Fire Fanatics Red/Navy Iconic Raglan Full-Zip Hoodie', imageUrl: 'https://images.footballfanatics.com/chicago-fire/womens-fanatics-red/navy-chicago-fire-iconic-raglan-full-zip-hoodie_ss5_p-201198336+u-3idouhshgy3zo23iee1v+v-6iz5bymqw9gxigrfl1bk.jpg?_hv=2&w=400', link: 'https://www.amazon.com/women-chicago-fire-raglan-hoodie', price: '$29.99' },
    { id: 6, title: 'Youth Chicago Fire Outerstuff Red Stalwart Defender T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/youth-outerstuff-red-chicago-fire-stalwart-defender-t-shirt_ss5_p-201875230+u-3vdziwrrmnw83nqk3fgx+v-pdiq8noz8lxczvifn3ir.jpg?_hv=2&w=400', link: 'https://www.amazon.com/youth-chicago-fire-stalwart-defender-tshirt', price: '$31.99' },
    { id: 7, title: 'Men\'s Chicago Fire Fanatics Navy Alpha Adjustable Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-fanatics-navy-chicago-fire-alpha-adjustable-hat_ss5_p-202683046+u-3zcwrq9f3me9yne8xmoj+v-kg7vxe0epq8rwaai1zoe.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-navy-alpha-hat', price: '$27.99' },
    { id: 8, title: 'Men\'s Chicago Fire Red \'97 Ringer T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-red-chicago-fire-97-ringer-t-shirt_ss5_p-201297390+u-qypuufzjpdfhrcxxmffq+v-uo0ig9r6xeyzoinilk1c.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-red-97-ringer-tshirt', price: '$39.99' },
    { id: 9, title: 'Men\'s Chicago Fire Sport Design Sweden Tan City Soul Oversized T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-sport-design-sweden-tan-chicago-fire-city-soul-oversized-t-shirt_ss5_p-202666835+u-7usl6xldosvj2oel1lto+v-pgj2gmrqehmabnlopp4d.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-sport-design-tshirt', price: '$39.99' },
    { id: 10, title: 'Men\'s Chicago Fire New Era White 2025 Jersey Hook 9FORTY M-Crown Adjustable Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-new-era-white-chicago-fire-2025-jersey-hook-9forty-m-crown-adjustable-hat_ss5_p-202216504+u-beofxykgkzbmotsjw5wb+v-ydvozqhebtjgoucwwwro.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-new-era-white-hat', price: '$34.99' },
    { id: 11, title: 'Men\'s Chicago Fire Fanatics Red Logo Quarter-Zip Top', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-fanatics-red-chicago-fire-logo-quarter-zip-top_ss5_p-5020692+u-tr47kkmh9auc94cn3awh+v-lckcefdqh52zbczxh1kq.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-logo-quarter-zip-top', price: '$39.99' },
    { id: 12, title: 'Men\'s Chicago Fire New Era Black 2025 Kickoff 9TWENTY Adjustable Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-new-era-black-chicago-fire-2025-kickoff-9twenty-adjustable-hat_ss5_p-202427769+u-gglzsxmofzklgrzvhayo+v-njgaoaz6dzpcfuy87xrl.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-new-era-black-hat', price: '$27.99' },
    { id: 13, title: 'Chicago Fire Two-Tone Scarf', imageUrl: 'https://images.footballfanatics.com/chicago-fire/chicago-fire-two-tone-scarf_ss5_p-201166568+u-mjqy9cnhgnbhcphywhrf+v-1e7oybutvbj2mljysjme.jpg?_hv=2&w=400', link: 'https://www.amazon.com/chicago-fire-two-tone-scarf', price: '$39.99' },
    { id: 14, title: 'Men\'s Chicago Fire adidas Red 2024 Return To Red Replica Jersey', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-adidas-red-chicago-fire-2025-travel-pullover-hoodie_ss5_p-201657345+u-1eoibq1cruu7lrri5ont+v-5xupjtzaej2ax5p7q8mu.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-red-2024-replica-jersey', price: '$99.99' },
    { id: 15, title: 'Men\'s Chicago Fire New Era Light Blue Color Pack 9FORTY A-Frame Adjustable Trucker Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-adidas-red-chicago-fire-2024-return-to-red-replica-jersey_ss5_p-201093753+u-d8his5twwpr7cuen5uu2+v-egbxdjjvzaljfwnzywqr.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-new-era-light-blue-hat', price: '$32.99' },
    { id: 16, title: 'Men\'s Chicago Fire  New Era Tan Active 9TWENTY Adjustable Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-new-era-light-blue-chicago-fire-color-pack-9forty-a-frame-adjustable-trucker-hat_ss5_p-201948604+u-jb8pxrcpi0fi1dgjwwyc+v-bcqpi0d4auue9zyt3bjl.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-new-era-tan-hat', price: '$31.99' },
    { id: 17, title: 'Men\'s Chicago Fire Sport Design Sweden White Game Day Relaxed T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens%C2%A0new-era-tan-chicago-fire-active-9twenty-adjustable-hat_ss5_p-202314655+u-umyptvnfjywcfukt83yx+v-jxz2shiufjqmg7utmj2m.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-sport-design-white-tshirt', price: '$39.99' },
    { id: 18, title: 'Men\'s Chicago Fire New Era Cream 2025 Kickoff Snapback Golfer Hat', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens%C2%A0sport-design-sweden-white-chicago-fire-game-day-relaxed-t-shirt_ss5_p-202666758+u-xd2k2tcrfjxgbspgch3d+v-3npncrtfpmh4vxpjalfx.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-new-era-cream-hat', price: '$34.99' },
    { id: 19, title: 'Men\'s Chicago Fire Cream \'90s Heavyweight Relaxed T-Shirt', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens%C2%A0new-era-cream-chicago-fire-2025-kickoff-snapback-golfer-hat_ss5_p-202514197+u-vxgjwmru7pghddeekzad+v-sirfaplofdokwqtz2bwi.jpg?_hv=2&w=400', link: 'https://www.amazon.com/men-chicago-fire-cream-90s-tshirt', price: '$39.99' },
    { id: 20, title: 'Chicago Fire Primary Scarf', imageUrl: 'https://images.footballfanatics.com/chicago-fire/mens-cream-chicago-fire-90s-heavyweight-relaxed-t-shirt_ss5_p-200860251+u-eyw4ldwly4odkclofzep+v-jjrw912b1meb9ixzvoqc.jpg?_hv=2&w=400', link: 'https://www.amazon.com/chicago-fire-primary-scarf', price: '$34.99' },
  ];



  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Chicago Fire FC</h1>
        <div className='mb-6'>
          <img 
            src={Chicago} 
            alt='Chicago Fire' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
        </div>
              {/* Add the buttons for "Kupi kartu" and "Pronađi hotel u blizini" */}
              <div className='flex gap-4 mb-8 justify-center'>
          <a 
            href="https://example.com/buy-ticket" 
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300'
          >
            BUY TICKETS
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
            <li><strong>Full Name:</strong> Chicago Fire Football Club</li>
            <li><strong>Nickname(s):</strong> The Fire</li>
            <li><strong>Founded:</strong> 1997</li>
            <li><strong>Stadium:</strong> Soldier Field, Chicago, Illinois</li>
            <li><strong>Capacity:</strong> 61,500</li>
            <li><strong>Owner:</strong> Joe Mansueto</li>
            <li><strong>Head Coach:</strong> Gregg Berhalter</li>
            <li><strong>League:</strong> Major League Soccer</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>A Legacy of Passion</h2>
          <p>
            Chicago Fire FC is a proud member of Major League Soccer, known for its passionate fan base and rich history. Founded in 1997, the club has a strong connection to the city of Chicago, and it strives to uphold the values of teamwork and community.
          </p>
          <p>
            Over the years, the Fire have been home to many talented players and have achieved significant success, including winning the MLS Cup and multiple U.S. Open Cups. The club continues to build its legacy with exciting matches and community involvement.
          </p>
          <p>
            The Fire aims to captivate both local fans and the broader soccer community by showcasing high-quality soccer and engaging activities throughout the season.
          </p>
        </div>

        {/* Trending Players Section */}
        <TrendingPlayers />

        {/* Shop Section */}
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop</h1>
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
                  Buy on MLS Store <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChicagoFire;
