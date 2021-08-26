import React, { useState, useEffect } from 'react';

import Card from './components/molecules/card';
import CardHeader from './components/molecules/cardHeader';
import CardBody from './components/molecules/cardBody';
import Pagination from './components/molecules/pagination';
import './components/templates/default/styles.css';

import GithubLogo from './github-icon.png';

import './bootstrap';

const App = () => {
  const [people] = useState([]);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [totalPosts] = useState();
  useEffect(() => {
    const fetchPeople = async () => {
      let nextPage = 'https://swapi.dev/api/people/';
      const nextPage = await initial.json();
    };
    fetchPeople();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = people.slice(indexOfFirstPost, indexOfLastPost);
  console.log(`indexOfLastPost: ${indexOfLastPost}`);
  console.log(`indexOfFirstPost: ${indexOfFirstPost}`);
  console.log(`CurrentPosts: ${currentPosts}`);
  if (loading) return 'Loading...';

  // if (error) return `An error has occurred: ' + ${error.message}`;
  return (
    <div className="default">
      <div className="colFull">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/robert-s-hogan/react-query-pagination-assessment"
        >
          <img src={GithubLogo} className="github-logo" alt="Github Logo" />
        </a>
        <img
          width="320"
          className="center py-3"
          src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png"
          alt="Star Wars Logo"
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="cardGrid">
          {currentPosts.map((person) => (
            <Card className="card" key={person.name}>
              <CardHeader
                className="card-body"
                key={person.name}
                uniqueId={person.url.match(/\d/g)}
                name={person.name}
              />
              <CardBody
                mass={person.mass}
                height={person.height}
                hairColor={person.hair_color}
                skinColor={person.skin_color}
                eyeColor={person.eye_color}
                birthYear={person.birth_year}
                gender={person.gender}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
