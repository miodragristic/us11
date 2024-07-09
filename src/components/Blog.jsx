import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from 'react-icons/fa';
import Inter from '../assets/Interlogo.png'; // assuming you have Interlogo.png in your assets folder

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Inter Miami: A Global Attraction',
      author: 'Mio Ristic',
      date: 'June 29, 2024',
      excerpt: 'The Glamorous Heartbeat of American Soccer.',
      imageUrl: Inter,
      link: '/blog/inter-miami-global-attraction',
    },
    {
      id: 2,
      title: 'Exploring the Rise of MLS',
      author: 'Author Name',
      date: 'July 1, 2024',
      excerpt: 'A look at the growth and popularity of Major League Soccer.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/inter-miami-global-attraction',
    },
    {
      id: 3,
      title: 'The Impact of International Players',
      author: 'Author Name',
      date: 'July 2, 2024',
      excerpt: 'How international talent is shaping the MLS.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-3',
    },
    {
      id: 4,
      title: 'Soccer in the USA: Past, Present, and Future',
      author: 'Author Name',
      date: 'July 3, 2024',
      excerpt: 'An in-depth analysis of soccer\'s journey in America.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-4',
    },
    {
      id: 5,
      title: 'Top 10 Moments in MLS History',
      author: 'Author Name',
      date: 'July 4, 2024',
      excerpt: 'A countdown of the most memorable moments in the league.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-5',
    },
    {
      id: 6,
      title: 'Inter Miami: The Beckham Effect',
      author: 'Author Name',
      date: 'July 5, 2024',
      excerpt: 'How David Beckham is influencing soccer in Miami.',
      imageUrl: Inter,
      link: '/blog/post-6',
    },
    {
      id: 7,
      title: 'Women in Soccer: Breaking Barriers',
      author: 'Author Name',
      date: 'July 6, 2024',
      excerpt: 'The role of women in the soccer world.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-7',
    },
    {
      id: 8,
      title: 'Youth Development in American Soccer',
      author: 'Author Name',
      date: 'July 7, 2024',
      excerpt: 'Nurturing the next generation of soccer stars.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-8',
    },
    {
      id: 9,
      title: 'The Business of Soccer in America',
      author: 'Author Name',
      date: 'July 8, 2024',
      excerpt: 'A look at the economic aspects of the sport.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-9',
    },
    {
      id: 10,
      title: 'Inter Miami: Building a Legacy',
      author: 'Author Name',
      date: 'July 9, 2024',
      excerpt: 'The journey of creating a new soccer powerhouse.',
      imageUrl: Inter,
      link: '/blog/post-10',
    },
    {
      id: 11,
      title: 'The Rivalries of MLS',
      author: 'Author Name',
      date: 'July 10, 2024',
      excerpt: 'Exploring the biggest rivalries in the league.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-11',
    },
    {
      id: 12,
      title: 'Technology in Soccer: A Game Changer',
      author: 'Author Name',
      date: 'July 11, 2024',
      excerpt: 'How technology is transforming the sport.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-12',
    },
    {
      id: 13,
      title: 'The Fans: Heart and Soul of Soccer',
      author: 'Author Name',
      date: 'July 12, 2024',
      excerpt: 'Celebrating the passionate soccer fans.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-13',
    },
    {
      id: 14,
      title: 'Inter Miami: The Home Field Advantage',
      author: 'Author Name',
      date: 'July 13, 2024',
      excerpt: 'The impact of the home crowd on team performance.',
      imageUrl: Inter,
      link: '/blog/post-14',
    },
    {
      id: 15,
      title: 'Soccer and Social Media',
      author: 'Author Name',
      date: 'July 14, 2024',
      excerpt: 'The role of social media in the sport.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-15',
    },
    {
      id: 16,
      title: 'Inter Miami: From Vision to Reality',
      author: 'Author Name',
      date: 'July 15, 2024',
      excerpt: 'The story behind the creation of the club.',
      imageUrl: Inter,
      link: '/blog/post-16',
    },
    {
      id: 17,
      title: 'The Future of Soccer in the USA',
      author: 'Author Name',
      date: 'July 16, 2024',
      excerpt: 'Predicting the next steps for the sport.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-17',
    },
    {
      id: 18,
      title: 'Inter Miami: A Team to Watch',
      author: 'Author Name',
      date: 'July 17, 2024',
      excerpt: 'Why Inter Miami is the team to watch this season.',
      imageUrl: Inter,
      link: '/blog/post-18',
    },
    {
      id: 19,
      title: 'Soccer Tactics: The Art of Strategy',
      author: 'Author Name',
      date: 'July 18, 2024',
      excerpt: 'An analysis of popular soccer tactics.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-19',
    },
    {
      id: 20,
      title: 'The Evolution of Soccer Jerseys',
      author: 'Author Name',
      date: 'July 19, 2024',
      excerpt: 'A look at the history and evolution of soccer jerseys.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '/blog/post-20',
    },
  ];

  return (
    <div name='blog' className='w-full min-h-screen bg-[#84cc16]'>
      {/* Container */}
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>-----------------------------</h1>
        {/* Blog post cards */}
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'>
          {blogPosts.map((post) => (
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
      </div>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/'>
              TikTok <FaTiktok size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;

