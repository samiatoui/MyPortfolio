import "./repos.css";
import React, { useState, useEffect } from 'react';
import github from "../about/github.svg";
import www from "../about/www.svg"


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
                
                <div className="repo-btncont">
                    <div className="repo-button"><a href={repo.html_url}> <img src={github}></img> </a></div>
                    {
                        repo.homepage !== "" && repo.homepage !== null ? (<div className="repo-button"><a href={repo.homepage} target="_blank"><img src={www}></img></a></div>) : <div className="repo-button"></div>
                    }
                </div>
                <p>{repo.description}</p>
            </div>
        </div>
    ));
}
