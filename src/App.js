import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import React, { useState } from 'react';

import LoadingAnimation from './components/templates/loadingAnimation';
import Card from './components/molecules/card';
import Pagination from './components/molecules/pagination';
import ListItem from './components/atoms/listItem';
import './components/templates/default/styles.css';

import './bootstrap';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  );
}

function Content() {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery(['people', page], () =>
    fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) => res.json())
  );

  if (isLoading) return <LoadingAnimation></LoadingAnimation>;

  if (error) return 'An error has occurred: ' + error.message;
  return (
    <div className="default">
      <div className="colFull">
        <img
          width="320"
          className="center py-3"
          src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png"
          alt="Star Wars Logo"
        />
        <Pagination
          peoplePerPage={data.results.length}
          totalPeople={data.count}
          page={page}
          setPage={setPage}
        />
        <div className="cardGrid">
          {data.results.map((person, index) => (
            <Card
              className="card"
              // button="Learn More"
              title={person.name}
              key={person.name}
              uniqueId={person.url.match(/\d/g)}
              page={page}
            >
              <ul>
                <ListItem>Mass: {person.mass}</ListItem>
                <ListItem>Height: {person.height}</ListItem>
                <ListItem>Hair Color: {person.hair_color}</ListItem>
                <ListItem>Skin Color: {person.skin_color}</ListItem>
                <ListItem>Eye Color: {person.eye_color}</ListItem>
                <ListItem>Birth Year: {person.birth_year}</ListItem>
                <ListItem>Gender: {person.gender}</ListItem>
              </ul>
            </Card>
          ))}
        </div>
      </div>
      {/* data={data} */}
    </div>
  );
}