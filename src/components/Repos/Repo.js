import "./repos.css";
import React, { useState, useEffect } from 'react';


export default function Repo() {

    const [repos, setRepo] = useState([]);


    useEffect(() => {
        const fetchRepos = async () => {
            const repoData = await fetch('https://api.github.com/users/samiatoui/repos');
            const json = await repoData.json();
            setRepo(json);

        }
        fetchRepos()
            .catch(console.error)
    }, [])

    return repos.map((repo) => (
        <div>
            <div className="repo-item" key={repo}>
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <div className="repo-button"><a href={repo.html_url}> Code </a></div>
                {
                    repo.homepage !== "" && repo.homepage !== null ? (<div className="demo-button"><a href={repo.homepage} target="_blank"> Demo </a></div>) : <div className="repo-button"></div>
                }

            </div>
        </div>
    ));
}
