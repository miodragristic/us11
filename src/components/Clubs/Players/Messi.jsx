import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Messi = () => {
    const items = [
      { id: 1, title: "Men's Inter Miami CF Lionel Messi adidas Aqua 2024 Archive Authentic Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-aqua-inter-miami-cf-2024-archive-authentic-jersey_ss5_p-201718913+u-wsqzu0wcriatez9xey7h+v-bdhj6rrc5qqquwwheyhn.jpg?_hv=2&w=340', price: '$194.99' },
      { id: 2, title: "Youth Inter Miami CF Lionel Messi adidas Aqua 2024 Archive Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-adidas-lionel-messi-aqua-inter-miami-cf-2024-archive-replica-player-jersey_ss5_p-200894753+u-xdrnxzqtzl1doi6rpp3b+v-xjizytfnifhpi5qgjruh.jpg?_hv=2&w=340', price: '$109.99' },
      { id: 3, title: "Lionel Messi Inter Miami CF Autographed Fanatics Authentic Deluxe Framed Autographed 2022-23 Authentic Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/lionel-messi-inter-miami-cf-autographed-deluxe-framed-autographed-2022-23-authentic-jersey_ss5_p-200917763+u-ddwjsul320crpyez85aq+v-i4whm64yv58pus0iddlx.jpg?_hv=2&w=340', price: '$3,464.99' },
      { id: 4, title: "Men's Inter Miami CF Lionel Messi adidas Black 2024 La Noche Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2024-la-noche-authentic-player-jersey_ss5_p-201184603+u-1itqji1xtvlialf7rdj3+v-annclcc5mdfubhsem4my.jpg?_hv=2&w=340', price: '$194.99' },
      { id: 5, title: "Men's Inter Miami CF Lionel Messi adidas Black 2024 La Noche Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-black-inter-miami-cf-2024-la-noche-replica-player-jersey_ss5_p-201141932+u-jxtq9fqkslstjtehu4iu+v-gafrtmumts55sro0vllg.jpg?_hv=2&w=340', link: 'https://www.example.com/product/5', price: '$134.99' },
      { id: 6, title: "Youth Inter Miami CF Lionel Messi Pink Name & Number T-Shirt", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/youth-lionel-messi-pink-inter-miami-cf-name-and-number-t-shirt_ss5_p-200442434+u-rztntnbzkaanl1cc71pt+v-ht3uqud6dbbrfjed7um2.jpg?_hv=2&w=340', link: 'https://www.example.com/product/6', price: '$19.59' },
      { id: 7, title: "Preschool Inter Miami CF Lionel Messi Pink Name & Number T-Shirt", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/preschool-lionel-messi-pink-inter-miami-cf-name-and-number-t-shirt_ss5_p-200442430+u-i8vsrfzhldt4aa608tdm+v-ywpwdqvvdgqildmza5mh.jpg?_hv=2&w=340', link: 'https://www.example.com/product/7', price: '$18.19' },
      { id: 8, title: "Men's Inter Miami CF Lionel Messi Fanatics Black Authentic Stack Name & Number Tri-Blend Pullover Hoodie", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/toddler-lionel-messi-pink-inter-miami-cf-name-and-number-t-shirt_ss5_p-200442428+u-wcu4wmjanriljptuaddb+v-w31oymffefhpziqdkjf3.jpg?_hv=2&w=340', link: 'https://www.example.com/product/8', price: '$74.99' },
      { id: 9, title: "Men's Inter Miami CF Lionel Messi adidas Pink 2024 2getherness Authentic Player Jersey", imageUrl: 'https://images.footballfanatics.com/mens-adidas-lionel-messi-black-2024-mls-all-star-game-authentic-player-jersey_ss5_p-201948683+u-fbcokxbrbv18pxjitxfl+v-u36wdta4qtc5hsfsrbdi.jpg?_hv=2&w=340', link: 'https://www.example.com/product/9', price: '$194.99' },
      { id: 10, title: "Men's Inter Miami CF Lionel Messi adidas Aqua 2024 Archive Replica Player Jersey", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-adidas-lionel-messi-pink-inter-miami-cf-2024-2getherness-2024-2getherness-authentic-player-jersey_ss5_p-201189575+u-9kfkaf3zfug6vvnjhtfv+v-ilisv1besbmmekk2h8py.jpg?_hv=2&w=340', link: 'https://www.example.com/product/10', price: '$129.99' },
      { id: 11, title: "Lionel Messi Inter Miami CF Fanatics Authentic 10.5\" x 13\" Sublimated Player Plaque", imageUrl: 'https://images.footballfanatics.com/inter-miami-cf/mens-fanatics-lionel-messi-black-inter-miami-cf-authentic-stack-name-and-number-tri-blend-pullover-hoodie_ss5_p-201536123+u-iid53naz0a6tmm3lxjdc+v-zxnyijdyifqwned2aymh.jpg?_hv=2&w=340', link: 'https://www.example.com/product/11', price: '$20.99' },
      { id: 12, title: "Lionel Messi Inter Miami CF 2024 Topps Now Black Label #70 BGS Authenticated 10 Card", imageUrl: 'https://example.com/card1.jpg', link: 'https://www.example.com/product/12', price: '$249.99' },
      { id: 13, title: "Men's Inter Miami CF Lionel Messi 500 Level Black Vintage T-Shirt", imageUrl: 'https://example.com/tshirt3.jpg', link: 'https://www.example.com/product/13', price: '$27.99' },
      { id: 14, title: "Men's Inter Miami CF Lionel Messi 500 Level Black Miami Pullover Hoodie", imageUrl: 'https://example.com/hoodie2.jpg', link: 'https://www.example.com/product/14', price: '$55.99' },
      { id: 15, title: "Lionel Messi Inter Miami CF Fanatics Authentic 10.5\" x 13\" First MLS Start Sublimated Plaque", imageUrl: 'https://example.com/plaque2.jpg', link: 'https://www.example.com/product/15', price: '$20.99' },
      { id: 16, title: "Men's Inter Miami CF Lionel Messi 500 Level Black Bold Pullover Hoodie", imageUrl: 'https://example.com/hoodie3.jpg', link: 'https://www.example.com/product/16', price: '$55.99' },
      { id: 17, title: "Lionel Messi Inter Miami CF Autographed Fanatics Authentic adidas X Crazyfast.1 FG White Soccer Cleat - Left foot", imageUrl: 'https://example.com/cleat1.jpg', link: 'https://www.example.com/product/17', price: '$3,149.99' },
      { id: 18, title: "Lionel Messi Inter Miami CF Autographed Fanatics Authentic adidas X Crazyfast.1 FG White Soccer Cleat - Right Foot", imageUrl: 'https://example.com/cleat2.jpg', link: 'https://www.example.com/product/18', price: '$3,149.99' },
      { id: 19, title: "Inter Miami CF Lionel Messi WinCraft 3’ x 5’ Single-Sided Deluxe Flag", imageUrl: 'https://example.com/flag1.jpg', link: 'https://www.example.com/product/19', price: '$27.99' },
      { id: 20, title: "Unisex Inter Miami CF Lionel Messi Pink Portrait Scarf", imageUrl: 'https://example.com/scarf1.jpg', link: 'https://www.example.com/product/20', price: '$27.99' }
    ];

  return (
    <div className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Lionel Messi</h1>
        
        {/* Messi Image and Bio Section */}
        <div className='mb-6'>
          <img 
            src='https://en.nogomania.com/GetFile.ashx?id=271175' 
            alt='Lionel Messi' 
            className='w-full h-[400px] object-cover rounded-lg shadow-md' 
          />
          {/* Dodajemo kredite za sliku */}
          <div className="mt-2 text-center text-sm text-gray-500">
            <p>Creator: Carmen Mandato | Credit: Getty Images | Copyright: 2024 Getty Images</p>
          </div>
        </div>

        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>Player Information</h2>
          <ul className='list-disc list-inside'>
            <li><strong>Full Name:</strong> Lionel Andrés Messi</li>
            <li><strong>Nickname(s):</strong> La Pulga (The Flea)</li>
            <li><strong>Born:</strong> June 24, 1987 (Rosario, Argentina)</li>
            <li><strong>Position:</strong> Forward</li>
            <li><strong>Current Team:</strong> Inter Miami CF</li>
            <li><strong>Previous Clubs:</strong> Barcelona, Paris Saint-Germain</li>
            <li><strong>Achievements:</strong> 7 Ballon d'Ors, 4 UEFA Champions League titles, Copa America 2021</li>
            <li><strong>International Career:</strong> Argentina National Team (2005 - present)</li>
          </ul>
        </div>

        {/* Additional Text */}
        <div className='text-[#020617] mb-8'>
          <h2 className='text-2xl font-semibold mb-2'>The Legacy of Messi</h2>
          <p>
            Lionel Messi is widely regarded as one of the greatest footballers of all time. His extraordinary dribbling, vision, and playmaking ability have earned him numerous accolades, including seven Ballon d'Or awards.
          </p>
          <p>
            Messi's journey began in Argentina and soared to international stardom with FC Barcelona, where he spent over two decades, achieving legendary status. After his time at Barcelona, Messi continued his career with Paris Saint-Germain before joining Inter Miami in Major League Soccer, where he continues to make an impact on the global stage.
          </p>
        </div>

       {/* Shop Section */}
       <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>Shop Messi's Merchandise</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {items.map(item => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-64'>
                <img src={item.imageUrl} alt={item.title} className='object-contain w-full h-full group-hover:scale-105 transition duration-300' />
              </div>
              <div className='p-4'>
                <h3 className='text-lg font-bold group-hover:text-blue-600 transition duration-300'>{item.title}</h3>
                <p className='text-sm font-semibold'>{item.price}</p>
                <a href={item.link} target='_blank' rel='noopener noreferrer' className='block bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 mt-2'>
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

export default Messi;
