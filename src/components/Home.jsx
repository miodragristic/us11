import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from "@material-tailwind/react";
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Book from '../assets/book.png';
import Inter from '../assets/Interlogo.png';
import SanDiegoLogo from '../assets/posters/SD.png';

const TrendingPlayers = () => {
  const players = [
    { name: 'Lionel Messi', image: 'https://en.nogomania.com/GetFile.ashx?id=271175', link: './messi' },
    { name: 'Marco Reus', image: 'https://assets.spox.com/images/v3/SPOX_6842816/contentpush.tmp?quality=60&auto=webp&format=pjpg&width=1148', link: './Reus' },
    { name: 'Olivier Giroud', image: 'https://www.parismatch.com/lmnr/r/375,250,000000,forcex,center-middle/img/var/pm/public/media/image/2024/09/26/11/resize_gettyimages-2174568974.jpg?VersionId=.zVbe1A5VQJ_HQsT0MUZseBycBDhlb1p', link: './giroud' },
    { name: 'Luis Suarez', image: 'https://en.nogomania.com/GetFile.ashx?id=259742', link: './suarez' },
  ];

  return (
    <div className='max-w-4xl mx-auto py-8'>
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

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteMLSClub, setFavoriteMLSClub] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle the submission logic here, like sending data to an API or storing it
  };


 

  // Slider data
  const slides = [
    { 
      url: 'https://www.mlsstore.com/content/ws/all/0ed240d5-a432-451e-98f9-e7c0dee0e81a__1600X600.jpg',
      title: '2024 MLS Cup Champions',
      link: 'https://mlsstore.i8h2.net/09PxkL'
    },
    { 
      url: 'https://www.mlsstore.com/content/ws/all/ebab9ab3-8f51-451b-a8c4-457f93f1ecf5__1600X492.png',
      title: 'All Jerseyes',
      link: 'http://mlsstore.i8h2.net/raX24B'
    },
    { 
      url: 'https://images.topps.com/v3/assets/bltc7206971cb4b2bfc/blt55f6c57a80f8365d/660704c7e838c81f0a60c9e4/24-TOPPS.COM-ARCHIVE-GRAPHICS-NEW_-03.png',
      title: 'Topps Now',
      link: 'https://mlsstore.i8h2.net/197WeB'
    },
    { 
      url: 'https://www.mlsstore.com/content/ws/all/2273fed5-bd79-4e51-aa30-645f9706e5b9__800X593.png',
      title: 'Looks For Her',
      link: 'https://mlsstore.i8h2.net/XmNXyM'
    },
    { 
      url: 'https://i.pinimg.com/736x/96/04/9d/96049d79294a3eb76078b3a21a5d3ea6.jpg',
      title: 'MLS in FC25',
      link: 'http://localhost:3000/blog/FC25'
    }
  ];

  // Mock blog posts array
  const blogPosts = [
    {
      id: 15,
      title: 'Peter Vermes Bids Farewell to Sporting KC',
      author: 'Mio Ristic',
      date: 'April 16, 2025',
      excerpt: ' A Storied Legacy and Logical Parting.',
      imageUrl: 'https://nb1.hu/wp-content/uploads/2023/10/GettyImages-1257216781-scaled-e1743504066347.jpg',
      link: '/blog/PeterVermesBlog',
    },
    {
      id: 14,
      title: 'Chicago Fire Makes Ambitious Move for Kevin De Bruyne',
      author: 'Mio Ristic',
      date: 'April 16, 2025',
      excerpt: ' What We Know So Far.',
      imageUrl: 'https://icdn.sempreinter.com/wp-content/uploads/2023/05/Kevin-De-Bruyne-8.jpg',
      link: '/blog/KevinDb',
    },
    {
      id: 13,
      title: 'Thomas Müller to MLS? The End of an Era, the Start of a New One',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: ' Thomas Müller, a name synonymous with Bayern Munich and the German national team.',
      imageUrl: 'https://assets.bundesliga.com/tachyon/sites/2/2021/05/GettyImages-859182146.jpg?crop=284px,0px,1352px,1080px&fit=540,540',
      link: '/blog/ThomasMullerMLSBlog',
    },
    {
      id: 12,
      title: 'MLS & adidas Special Edition: Pushing for a Greener Future in Football',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: 'How MLS & adidas Are Changing the Game for a Greener Future.',
      imageUrl: 'https://www.mlsstore.com/content/ws/all/2735eeb9-6378-4ba7-b6d8-5552f898cc0d__1600X732.jpg?w=3200',
      link: '/blog/OnePlanetKit',
    },
    {
      id: 9,
      title: 'The Legacy of Aaron Boupendza in MLS: A Tribute to a Star Gone Too Soon',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: 'The world of football was shaken on April 16, 2025.',
      imageUrl: 'https://www.telegram.hr/wp-content/uploads/2025/04/aaron-boupendza.jpg',
      link: '/blog/Boupendza',
    },
    {
      id: 6,
      title: 'San Diego FC Makes History with First MLS Win',
      author: 'Mio Ristic',
      date: 'February 25, 2025',
      excerpt: 'San Diego FC secures a dramatic victory in their inaugural MLS match.',
      imageUrl: SanDiegoLogo,
      link: '/blog/san-diego-first-win',
    },
    {
      id: 5,
      title: 'Inter Miami: A New Attempt to Claim the Title',
      author: 'Mio Ristic',
      date: 'June 29, 2024',
      excerpt: 'The Glamorous Heartbeat of American Soccer.',
      imageUrl: Inter,
      link: '/blog/inter-miami-global-attraction',
    },
    // {
    //   id: 4,
    //   title: 'MLS in FC25',
    //   author: 'Mio Ristic',
    //   date: 'July 1, 2024',
    //   excerpt: 'FC25 – Overview, MLS Clubs, and U.S. National Team.',
    //   imageUrl: 'https://drop-assets.ea.com/images/1BY2V24NDqyjYKlDV8mJrx/ff63d00bb5bf24ad0c1b87adcd0e2771/EA_FC25_Standard_KeyArt_16-9_3840x2160.jpg?im=AspectCrop=(16,9),xPosition=0.5384114583333334,yPosition=0.538425925925926&q=85&w=1280',
    //   link: '/blog/FC25',
    // },
    // {
    //   id: 3,
    //   title: 'San Diego: A New MLS Team Ready for Big Challenges',
    //   author: 'Mio Ristic',
    //   date: 'December 24, 2024',
    //   excerpt: 'Hirving Lozano, Coach and Rooster',
    //   imageUrl: SanDiegoLogo,
    //   link: '/blog/san-diego-news',
    // },
    // {
    //   id: 2,
    //   title: 'MLS: Past, Present, and Future',
    //   author: 'Mio Ristic',
    //   date: 'July 3, 2024',
    //   excerpt: "An in-depth analysis of soccer's journey in America.",
    //   imageUrl: 'https://images.unsplash.com/photo-1653014741491-ff4c23be99be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   link: '/blog/mls-past',
    // },
    // {
    //   id: 1,
    //   title: 'Top Supplements for Soccer Players',
    //   author: 'Author Name',
    //   date: 'July 4, 2024',
    //   excerpt: 'A countdown of the most memorable moments in the league.',
    //   imageUrl: 'https://images.unsplash.com/photo-1662695086526-112d7959fab4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   link: '/blog/supplements-in-soccer',
    // },
  ];
  

  return (
    <>
      {/* Background Image */}
      <div className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1686168523188-8949907234a5?q=80&w=1974&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9
        }}
      >
 {/* Left Content */}
<div className="flex flex-col justify-center h-auto max-w-[800px] mx-auto p-4 sm:p-8 bg-white/60 rounded-lg shadow-md">
  <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#020617] mb-2">
    Welcome to US11
  </h2>
  <p className="text-black font-bold py-4 max-w-[700px] text-base sm:text-lg leading-relaxed">
    At US11, we are passionate about bringing you the latest news, insights, and updates from the world of US soccer and Major League Soccer (MLS). Don't forget to visit our shop, where you can find high-quality jerseys at great prices. Show your support for your favorite teams with our official merchandise.
  </p>
  <div>
    <Link to="/shop">
      <button className="text-white bg-[#020617] group border-2 border-transparent px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center hover:bg-transparent hover:border-[#020617] hover:text-[#020617] rounded-lg transition duration-500 ease-in-out transform hover:scale-105">
      BROWSE TEAMS
      </button>
    </Link>
  </div>
</div>

        {/* Right Image */}
        <div className="hidden md:flex md:flex-col md:items-center md:ml-8">
  <a href="/download-page" target="_blank" rel="noopener noreferrer">
    <img src={Book} alt="MLS Finals" className="w-[340px] h-auto mr-20 mt-20 lg:mt-40 xl:mt-48" />
  </a>
  <a href="/download-page" target="_blank" rel="noopener noreferrer">
    <button className="text-black bg-white group border-2 border-transparent px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center hover:bg-black hover:border-white hover:text-white rounded-lg transition duration-500 ease-in-out transform hover:scale-105 mr-10">
      DOWNLOAD BOOK
    </button>
  </a>
</div>
</div>


      <div className="flex flex-col items-center ml-8 sm:hidden">
    <a href="/download-page" target="_blank" rel="noopener noreferrer">
      <img src={Book} alt="MLS Finals" className="w-[340px] h-auto mr-20 mt-20" />
    </a>
    <a href="/download-page" target="_blank" rel="noopener noreferrer">
      <button className="text-white bg-black group border-2 border-transparent px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center hover:bg-black hover:border-white hover:text-white rounded-lg transition duration-500 ease-in-out transform hover:scale-105 ml-2">
        DOWNLOAD BOOK
      </button>
    </a>
  </div>



      {/* Slider Section mobile */}
      <div className="max-w-[1200px] h-[450px] w-full m-auto py-16 relative group">
        <a href={slides[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full  bg-center bg-cover duration-500"
          >
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/1 bg-black/80 flex flex-col justify-center items-center ">
              <h2 className="text-white text-2xl font-bold">{slides[currentIndex].title}</h2>
            </div>
          </div>
        </a>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-9 justify-center py-9">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
   {/* Trending Players Section */}
   <TrendingPlayers />
    


      {/* Blog Section */}
      <div name="blog" className="mb-4 bg-white pt-[150px]">
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
          <h2 className="text-7xl font-bold text-[#020617] sm:text-6xl text-black mb-2">Blog</h2>
          {/* Blog post cards */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {blogPosts.map((post) => (
              <Link to={post.link} key={post.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover object-center group-hover:scale-105 transition duration-300" />
                <div className="p-4">
                  <h2 className="text-xl font-bold group-hover:text-blue-600 transition duration-300">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">{post.author} | {post.date}</p>
                  <p className="text-gray-700">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

  {/* Join Our Newsletter Section */}
<div className="bg-gray-900 text-white py-12">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl font-bold mb-4">Join Our Newsletter</h2>
    <p className="text-lg mb-8">Receive a digest of the best content each week direct to your mailbox.</p>

    {submitted ? (
      <p className="text-xl font-semibold">Thank you for subscribing!</p>
    ) : (
      <form onSubmit={handleNewsletterSubmit} className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"  // text-left added
          required
        />
        
        {/* Favourite MLS Club Field */}
        <input
          type="text"
          placeholder="Your Favourite MLS Club"
          value={favoriteMLSClub}
          onChange={(e) => setFavoriteMLSClub(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"  // text-left added
          required
        />
        
        {/* Email Field */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-10 focus:ring-blue-500 text-left"  // text-left added
          required
        />
        <button
          type="submit"
          className="px-3 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    )}
  </div>
</div>


    

    </>
  );
};

export default HomePage;


