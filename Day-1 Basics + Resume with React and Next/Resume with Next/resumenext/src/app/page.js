import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Uncomment this block if needed */}
       <div className="bg-red-500 h-[1200px] text-white">
        <div className="flex flex-col bg-amber-400 items-center justify-center">
          <Header />
          <h1>KL RAHUL</h1>
          <h2>INDIAN CRICKETER</h2>
          <h3>MANGALORE</h3>
          <div>
            <h3>TEAMS</h3>
            <ol>
              <li>NATIONAL TEAM</li>
              <li>DELHI CAPITALS</li>
            </ol>
          </div>
        </div>
        <About />
      </div> 
      <Sahyadri />
    </>
  );
}

function Header() {
  return (
    <div>
      <img
        width="100px"
        alt="BCCI Logo"
        src="https://documents.bcci.tv/resizedimageskirti/1125_compress.png"
      />
    </div>
  );
}

function About() {
  return (
    <p className="text-2xl text-black">
      Someone who has been Team India's crisis man for every occasion & role,
      KL Rahul is one of the most talented & elegant batters of our time. While
      he has been India’s saviour in the lower order in ODIs recently, Rahul
      has been impregnable as a batter in the TATA IPL over the last few
      seasons. The man guarantees runs, and HOW! Rahul boasts of having 575 run
      seasons 5 times in a row from 2018 to 2022. The second-fastest IPL fifty
      belongs to him as well, a 14-ball fifty. But now, a new journey beckons
      one of Indian cricket’s biggest stars. Rahul instantly makes us a side to
      watch out for with his presence.
    </p>
  );
}

function Sahyadri() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <img
        className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8"
        alt="Sahyadri Innovation Center"
        src="https://www.sahyadri.edu.in/_next/image?url=%2Fimages%2Finnovation%2Fhero-img.jpg&w=1920&q=75"
      />

      <div className="mt-10 md:mt-40 p-5 max-w-xl">
        <h1 className="text-2xl font-bold mb-4">
          Innovation and Entrepreneurship
        </h1>
        <p>
          A Native Hub of Innovation. Sahyadri College of Engineering is a
          dynamic institution dedicated to fostering creativity, innovation, and
          an entrepreneurial spirit. Through diverse activities, initiatives,
          and collaborative projects, the college aims to inspire, empower, and
          equip individuals with the skills and mindset needed to thrive in an
          ever-evolving world.
        </p>
      </div>
    </div>
  );
}