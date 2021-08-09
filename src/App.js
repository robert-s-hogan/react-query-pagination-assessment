import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState } from "react";

import Card from "./components/molecules/card";
import Pagination from "./components/molecules/pagination";
import ListItem from "./components/atoms/listItem";
import "./components/templates/default/styles.css";

import "./bootstrap";

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
    const { isLoading, error, data } = useQuery(["people", page], () =>
        fetch(`https://swapi.dev/api/people/?page=${page}`).then(res =>
            res.json()
        )
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="default">
            <div className="colFull">
                <img
                    className="center"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/320px-Star_Wars_Logo.svg.png"
                    alt="Star Wars Logo"
                />
                <Pagination page={page} setPage={setPage} />
                <div className="cardGrid">
                    {data.results.map((person, index) => (
                        <Card
                            className="card"
                            button="Learn More"
                            title={person.name}
                            key={person.name}
                            uniqueId={index}
                            page={page}
                        >
                            <ul>
                                <ListItem>Mass: {person.mass}</ListItem>
                                <ListItem>Height: {person.height}</ListItem>
                                <ListItem>
                                    Hair Color: {person.hair_color}
                                </ListItem>
                                <ListItem>
                                    Skin Color: {person.skin_color}
                                </ListItem>
                                <ListItem>
                                    Eye Color: {person.eye_color}
                                </ListItem>
                                <ListItem>
                                    Birth Year: {person.birth_year}
                                </ListItem>
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
