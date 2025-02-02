import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const generateSupplementItems = () => {
  return [
    { 
      id: 1, 
      title: "Supplements", 
      imageUrl: "https://images.pexels.com/photos/3886066/pexels-photo-3886066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      link: "./Preworkout" 
    },
    { 
      id: 2, 
      title: "Energy Drinks", 
      imageUrl: "https://images.pexels.com/photos/5532676/pexels-photo-5532676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
      link: "./EnergyDrinks" 
    },
  ];
};

const Supplements = () => {
  const items = generateSupplementItems();

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div name='supplements' className='w-full min-h-screen bg-white pt-[150px]'>
      <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-4'>
          Supplements and Energy Drinks for Footballers
        </h1>

        {/* Product Grid */}
        <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7'>
          {items.map(item => (
            <div key={item.id} className='group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'>
              <div className='relative overflow-hidden bg-gray-200 h-48'>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className='object-contain w-full h-full group-hover:scale-105 transition duration-300' 
                />
              </div>
              <div className='p-4'>
                <h3 className='text-xl font-bold group-hover:text-blue-600 transition duration-300'>
                  {item.title}
                </h3>
                <a 
                  href={item.link} 
                  rel='noopener noreferrer' 
                  className='block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300'>
                  Visit Shop <FaShoppingCart className='inline-block ml-2' />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Supplement Information Section */}
        <section className='mb-8 mt-10'>
          <h2 className='text-2xl sm:text-4xl font-bold text-[#020617] mb-4'>
            Supplements for Footballers
          </h2>
          <p className='text-lg text-[#020617] mb-4'>
            Supplements can play an important role in enhancing the performance, endurance, and recovery of footballers. While they should never replace a healthy diet, the right supplements can give athletes the edge they need to perform at their best. Popular supplements for footballers include **pre-workout** formulas and **creatine**.
          </p>

          <h3 className='text-xl font-semibold text-[#020617] mb-2'>Pre-Workout Supplements</h3>
          <p className='text-lg text-[#020617] mb-4'>
            **Pre-workout supplements** are designed to increase energy, endurance, and focus during physical activity. These often include ingredients like **caffeine**, **beta-alanine**, and **creatine** to help you push through intense training or match situations. A good pre-workout can help delay fatigue, boost energy, and improve focus, ensuring you're at your peak when you need it most.
          </p>

          <h3 className='text-xl font-semibold text-[#020617] mb-2'>Creatine: A Game Changer</h3>
          <p className='text-lg text-[#020617] mb-4'>
            **Creatine** is one of the most well-researched supplements in sports science. It helps increase the production of ATP, the body’s main source of energy for short bursts of activity. For footballers, this means more power for sprints, tackles, and explosive movements. Creatine can also help with recovery, reducing muscle damage and inflammation, making it an essential supplement for any footballer looking to improve their performance.
          </p>

          <h3 className='text-lg font-semibold text-[#020617] mb-2'>Consult with Professionals</h3>
          <p className='text-lg text-[#020617] mb-4'>
            Before incorporating supplements into your routine, it’s important to consult with a healthcare provider, coach, or nutritionist, especially if you're a young footballer. Supplements are not always necessary for athletes under 18, and it’s essential to ensure they align with your specific fitness goals and health needs.
          </p>
        </section>

        {/* Energy Drink Information Section */}
        <section className='mb-8 mt-10'>
          <h2 className='text-2xl sm:text-4xl font-bold text-[#020617] mb-4'>
            Energy Drinks for Footballers
          </h2>
          <p className='text-lg text-[#020617] mb-4'>
            **Energy drinks** are often used by athletes to boost energy, focus, and performance during intense activities. However, while they can provide a quick lift in energy levels, it's important to consume them responsibly.
          </p>

          <h3 className='text-xl font-semibold text-[#020617] mb-2'>Benefits of Energy Drinks</h3>
          <ul className='list-disc pl-5 mb-4'>
            <li>Increase energy levels and alertness, especially during high-stakes training sessions or games.</li>
            <li>Improve focus and concentration, helping you stay mentally sharp during the game.</li>
            <li>Hydrate with added electrolytes, which can help maintain performance during physical exertion.</li>
          </ul>

          <h3 className='text-xl font-semibold text-[#020617] mb-2'>Risks of Energy Drinks</h3>
          <p className='text-lg text-[#020617] mb-4'>
            While energy drinks can be helpful, they come with potential risks. Most energy drinks contain high levels of **sugar** and **caffeine**, which can lead to energy crashes, dehydration, and increased heart rate. Excessive use can cause negative side effects such as **nervousness**, **irritability**, and even more severe health concerns.
          </p>

          <h3 className='text-lg font-semibold text-[#020617] mb-2'>Usage Guidelines</h3>
          <p className='text-lg text-[#020617] mb-4'>
            It is important to limit energy drink consumption to **one can per day** (250-300 ml), especially if you're an adult footballer. Drinking too much can lead to side effects like jitters, dehydration, and crashes. **Young athletes under 18** should avoid energy drinks altogether, as their developing bodies are more sensitive to the high caffeine and sugar content.
          </p>

          <h3 className='text-lg font-semibold text-[#020617] mb-2'>Conclusion</h3>
          <p className='text-lg text-[#020617] mb-4'>
            Energy drinks can provide a quick energy boost when used in moderation, but they should never replace proper hydration and nutrition. For footballers looking to enhance their focus and performance, energy drinks can be an occasional supplement. Always remember that a healthy, well-balanced diet is key to long-term success.
          </p>
        </section>

        {/* Scroll to Top Button */}
        <div className='mt-8 flex justify-center'>
          <button 
            onClick={scrollToTop} 
            className='text-white bg-[#020617] group border-2 border-transparent px-6 py-3 my-2 flex items-center hover:bg-transparent hover:border-[#020617] hover:text-[#020617] rounded-lg transition duration-500 ease-in-out transform hover:scale-105'>
            Back to top
          </button>
        </div>
      </div>
    </div>
  );
};

export default Supplements;