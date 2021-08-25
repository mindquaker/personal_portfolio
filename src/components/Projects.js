import React from "react";

export const Projects = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <div
          className='h-2/3 w-2/5 ml-10 border-t-2 border-l-2 border-red-600  drop-shadow-2xl 
           bg-red-500 p-3 rounded-2xl  mt-12 shadow-2xl mr-3'>
          <h2 className='text-md font-bold text-white '>Foodies</h2>
          <li className='text-md font-medium text-white '>
            Link:{" "}
            <a href='https://shielded-cove-82509.herokuapp.com/'>
              https://shielded-cove-82509.herokuapp.com/
            </a>
          </li>
          <li className='text-md font-medium  text-white '>
            Code:{" "}
            <a href='https://github.com/jon-perez18/Foodies'>
              https://github.com/jon-perez18/Foodies
            </a>
          </li>
          <h2 className='text-md font-bold text-white '>Discription:</h2>
          <li className='text-md font-medium text-white '>
            Built a restaurant discovery web app in 4 weeks, that allows
            individuals to identify nearby restaurants and create and join
            events.
          </li>
          <br />
          <li className='text-md font-medium text-white '>
            Utilized Yelp API to fetch data dynamically, Google OAuth API to
            register a new user and displayed these data using React.js for
            frontend & Flask for backend as well as did version control using
            Git/GitHub.
          </li>
          <br />
          <li className='text-md font-medium text-white '>
            Performed client-side, and server-side test coverage, persisted data
            in Postgres database, and continuous Heroku deployment while
            maintaining industry-standard (Airbnb & Pylint) linting.
          </li>
          <br />
          <li className='text-md font-medium text-white '>
            Applied agile methodologies, Kanban, and Scrum procedures while
            working in a four-person team, holding weekly standup meetings,
            consulting with a Facebook consultant, and utilizing GitHub Actions
            for continuous integration.
          </li>
        </div>
        <div
          className='h-2/3 w-2/5 ml-10 border-t-2 border-l-2 border-red-600  drop-shadow-2xl 
           bg-red-500 p-4 rounded-2xl  mt-12 shadow-2xl mr-5'>
          <h2 className='text-md font-bold text-white '>
            Live Tic Tac Toe Game
          </h2>
          <li className='text-md font-medium text-white '>
            Link:{" "}
            <a href='https://calm-basin-39013.herokuapp.com/'>
              https://calm-basin-39013.herokuapp.com/
            </a>
          </li>
          <li className='text-md font-medium  text-white '>
            Code:{" "}
            <a href='https://tinyurl.com/4sxj97p3'>
              https://tinyurl.com/4sxj97p3
            </a>
          </li>
          <h2 className='text-md font-bold text-white '>Discription:</h2>
          <li className='text-md font-medium text-white '>
            Developed a two-player Tic Tac Toe game in 3 weeks, allowing two
            players to participate in distinct browser tabs.
          </li>
          <br />
          <li className='text-md font-medium text-white '>
            Designed a client-server architecture using Socket io to track live
            moves of the players and displayed the game board using React.js for
            frontend & Flask for backend as well as did version control using
            Git/GitHub and deployed it to live server using Heroku.
          </li>
          <br />
          <h2 className='text-md font-medium text-white '></h2>
          <br />
          <h2 className='text-md font-medium text-white '> </h2>

          <br />
          <h2 className='text-md font-medium text-white '></h2>
          <br />
          <h2 className='text-md font-medium text-white '> </h2>
          <br />
          <h2 className='text-md font-medium text-white '> </h2>
          <br />
          <h2 className='text-md font-medium text-white '> </h2>
          <br />
          <h2 className='text-md font-medium text-white '> </h2>
        </div>
      </div>
      <div className='flex flex-row mb-10'>
        <div
          className='h-2/3 w-2/5 ml-10 border-t-2 border-l-2 border-red-600  drop-shadow-2xl 
           bg-red-500 p-4 rounded-2xl  mt-12 shadow-2xl mr-3'>
          <h2 className='text-md font-bold text-white '>
            Spotify Music Discovery App
          </h2>
          <li className='text-md font-medium text-white '>
            Link:{" "}
            <a href='https://infinite-dusk-50944.herokuapp.com/'>
              https://infinite-dusk-50944.herokuapp.com/
            </a>
          </li>
          <li className='text-md font-medium  text-white '>
            Code:{" "}
            <a href='https://github.com/NJIT-CS490-SP21/Tic-Tac-Toe-Game--Ajr72'>
              https://github.com/NJIT-CS490-SP21/Tic-Tac-Toe-Game--Ajr72
            </a>
          </li>
          <h2 className='text-md font-bold text-white '>Discription:</h2>
          <li className='text-md font-medium text-white '>
            Created a web app in 2 weeks, for music discovery that recommends
            new music to users and allows them to follow the song's lyrics.
          </li>
          <br />
          <li className='text-md font-medium text-white '>
            Applied Spotify API to fetch data about an artist and his/her song
            dynamically, Genius API to fetch lyrics of the song and deployed it
            to the live server using Heroku.
          </li>
        </div>
        <div
          className='h-2/3 w-2/5 ml-10 border-t-2 border-l-2 border-red-600  drop-shadow-2xl 
           bg-red-500 p-4 rounded-2xl  mt-12 shadow-2xl mr-5'>
          <h2 className='text-md font-bold text-white '>Top Headlines</h2>
          <li className='text-md font-medium text-white '>
            Link:{" "}
            <a href='https://warm-cliffs-42935.herokuapp.com/'>
              https://warm-cliffs-42935.herokuapp.com/
            </a>
          </li>
          <li className='text-md font-medium  text-white '>
            Code:{" "}
            <a href='https://github.com/mindquaker/Top_Head_Lines_web_scraper'>
              https://github.com/mindquaker/Top_Head_Lines_web_scraper
            </a>
          </li>
          <h2 className='text-md font-bold text-white '>Discription:</h2>
          <li className='text-md font-medium text-white '>
            Developed a web app in 2 weeks, that will display headlines from the
            top seven news organizations in the United States by fetching
            headlines directly from their websites.
          </li>
          <br />
          <li className='text-md font-medium text-white '>
            Employed Web Scraping techniques to directly fetch news headline
            using cheerio library and Node.js as backend.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Projects;
