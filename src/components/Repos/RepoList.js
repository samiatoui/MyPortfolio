import "./repos.css";
import Repos from "./Repo";

export default function RepoList() {
    return (
        <div className="repo-main">
            <h1>Personal projects</h1>
            <h4>This list is auto-generated from my public GitHub repos.</h4>
            <div className="repo-container">
                <Repos />

            </div>
        </div>
    )
}