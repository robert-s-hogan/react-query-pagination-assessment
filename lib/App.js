import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import * as React from 'react';
import { useState } from 'react';
import Card from './components/molecules/card';
import Pagination from './components/molecules/pagination';
import ListItem from './components/atoms/listItem';
import './components/templates/default/styles.css';
import GithubLogo from './github-icon.png';
import './bootstrap';
const queryClient = new QueryClient();

const App = () => /*#__PURE__*/React.createElement(QueryClientProvider, {
  client: queryClient
}, /*#__PURE__*/React.createElement(Content, null));

function Content() {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    error,
    data
  } = useQuery(['people', page], () => fetch(`https://swapi.dev/api/people/?page=${page}`).then(res => res.json()), {
    keepPreviousData: true,
    staleTime: 5000
  });
  if (isLoading) return 'Loading...';
  if (error) return `An error has occurred: ' + ${error.message}`;
  return /*#__PURE__*/React.createElement("div", {
    className: "default"
  }, /*#__PURE__*/React.createElement("div", {
    className: "colFull"
  }, /*#__PURE__*/React.createElement("a", {
    rel: "noreferrer",
    target: "_blank",
    href: "https://github.com/robert-s-hogan/react-query-pagination-assessment"
  }, /*#__PURE__*/React.createElement("img", {
    src: GithubLogo,
    className: "github-logo",
    alt: "Github Logo"
  })), /*#__PURE__*/React.createElement("img", {
    width: "320",
    className: "center py-3",
    src: "http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png",
    alt: "Star Wars Logo"
  }), /*#__PURE__*/React.createElement(Pagination, {
    peoplePerPage: data.results.length,
    totalPeople: data.count,
    page: page,
    setPage: setPage
  }), /*#__PURE__*/React.createElement("div", {
    className: "cardGrid"
  }, data.results.map(person => /*#__PURE__*/React.createElement(Card, {
    className: "card" // button="Learn More"
    ,
    title: person.name,
    key: person.name,
    uniqueId: person.url.match(/\d/g),
    page: page
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement(ListItem, null, "Mass: ", person.mass), /*#__PURE__*/React.createElement(ListItem, null, "Height: ", person.height), /*#__PURE__*/React.createElement(ListItem, null, "Hair Color: ", person.hair_color), /*#__PURE__*/React.createElement(ListItem, null, "Skin Color: ", person.skin_color), /*#__PURE__*/React.createElement(ListItem, null, "Eye Color: ", person.eye_color), /*#__PURE__*/React.createElement(ListItem, null, "Birth Year: ", person.birth_year), /*#__PURE__*/React.createElement(ListItem, null, "Gender: ", person.gender)))))));
}

export default App;