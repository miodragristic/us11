import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import Inter from '../assets/Interlogo.png';
import SanDiegoLogo from '../assets/posters/SD.png';
import Us11 from '../assets/11.png';

const Blog = () => {
  const blogPosts = [
    {
      id: 16,
      title: 'Columbus Crew vs. Inter Miami',
      author: 'Mio Ristic',
      date: 'April 17, 2025',
      excerpt: ' MLS’s Last Unbeatens Go Head-to-Head',
      imageUrl: 'https://assets.goal.com/images/v3/getty-2208819749/crop/MM5DEMBUHA5DCMJVGI5G433XMU5DENZTHI3TA===/GettyImages-2208819749.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      link: '/blog/ColumbusVsMiamiMLSBlog',
    },
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
    // {
    //   id: 11,
    //   title: 'One PlanetKit Blog',
    //   author: 'Mio Ristic',
    //   date: 'April 15, 2025',
    //   excerpt: 'The world of football was shaken on April 16, 2025.',
    //   imageUrl: 'https://www.mlsstore.com/content/ws/all/2735eeb9-6378-4ba7-b6d8-5552f898cc0d__1600X732.jpg?w=3200',
    //   link: '/blog/OnePlanetKit',
    // },
    {
      id: 10,
      title: 'The Legacy of Aaron Boupendza in MLS: A Tribute to a Star Gone Too Soon',
      author: 'Mio Ristic',
      date: 'April 15, 2025',
      excerpt: 'The world of football was shaken on April 16, 2025.',
      imageUrl: 'https://www.telegram.hr/wp-content/uploads/2025/04/aaron-boupendza.jpg',
      link: '/blog/Boupendza',
    },
    {
      id: 9,
      title: 'San Diego FC Makes History with First MLS Win',
      author: 'Mio Ristic',
      date: 'February 25, 2025',
      excerpt: 'San Diego FC secures a dramatic victory in their inaugural MLS match.',
      imageUrl: SanDiegoLogo,
      link: '/blog/san-diego-first-win',
    },
    {
      id: 8,
      title: 'Inter Miami: A New Attempt to Claim the Title',
      author: 'Mio Ristic',
      date: 'June 29, 2024',
      excerpt: 'The Glamorous Heartbeat of American Soccer.',
      imageUrl: Inter,
      link: '/blog/inter-miami-global-attraction',
    },
    {
      id: 7,
      title: 'MLS in FC25',
      author: 'Mio Ristic',
      date: 'July 1, 2024',
      excerpt: 'FC25 – Overview, MLS Clubs, and U.S. National Team.',
      imageUrl: 'https://drop-assets.ea.com/images/1BY2V24NDqyjYKlDV8mJrx/ff63d00bb5bf24ad0c1b87adcd0e2771/EA_FC25_Standard_KeyArt_16-9_3840x2160.jpg?im=AspectCrop=(16,9),xPosition=0.5384114583333334,yPosition=0.538425925925926&q=85&w=1280',
      link: '/blog/FC25',
    },
    {
      id: 6,
      title: 'San Diego: A New MLS Team Ready for Big Challenges',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'Hirving Lozano, Coach and Rooster',
      imageUrl: SanDiegoLogo,
      link: '/blog/san-diego-news',
    },
    {
      id: 5,
      title: 'MLS: Past, Present, and Future',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: "An in-depth analysis of soccer's journey in America.",
      imageUrl: 'https://images.unsplash.com/photo-1653014741491-ff4c23be99be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/blog/mls-past',
    },
    {
      id: 4,
      title: 'Top Supplements for Soccer Players',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'A countdown of the most memorable moments in the league.',
      imageUrl: 'https://images.unsplash.com/photo-1662695086526-112d7959fab4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/blog/supplements-in-soccer',
    },
    {
      id: 3,
      title: 'Inter Miami: The Beckham Effect',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'How David Beckham is influencing soccer in Miami.',
      imageUrl: Inter,
      link: '/blog/beckham-effect',
    },
    {
      id: 2,
      title: 'Women in Soccer: Breaking Barriers',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'The role of women in the soccer world.',
      imageUrl: 'https://images.unsplash.com/photo-1532290278496-3d29b25b691a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/blog/women-in-soccer',
    },
    {
      id: 1,
      title: 'Welcome to US11',
      author: 'Mio Ristic',
      date: 'December 24, 2024',
      excerpt: 'Nurturing the next generation of soccer stars.',
      imageUrl: Us11,
      link: '/blog/us11',
    },
  ];
  

  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, 6)); // Početno učitavanje prvih 6 postova

  const loadMorePosts = () => {
    const nextPosts = blogPosts.slice(visiblePosts.length, visiblePosts.length + 6);
    setVisiblePosts((prevPosts) => [...prevPosts, ...nextPosts]);
  };

  return (
        <div name='blog' className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8'>Blog</h1>

        {/* Blog post cards */}
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
          {visiblePosts.map((post) => (
            <Link to={post.link} key={post.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <img src={post.imageUrl} alt={post.title} className='w-full h-48 object-cover object-center group-hover:scale-105 transition duration-300' />
              <div className='p-4'>
                <h2 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>{post.title}</h2>
                <p className='text-gray-600 text-sm mb-2'>{post.author} | {post.date}</p>
                <p className='text-gray-700'>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Dugme za učitavanje više postova */}
        {visiblePosts.length < blogPosts.length && (
          <div className='mt-8 flex justify-center'>
            <button onClick={loadMorePosts} className='text-white bg-[#020617] group border-2 border-transparent px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-[#020617] hover:text-[#020617] rounded-lg transition duration-500 ease-in-out transform hover:scale-105'>
              Read More
            </button>
          </div>
        )}
      </div>

      {/* Socijalne ikone */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' >
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' >
              TikTok <FaTiktok size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;





