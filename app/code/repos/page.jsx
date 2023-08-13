import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/Princessayomide53/repos"
  );
  const repos = await response.json();
  return repos;
}
const repos = async () => {
  const repos = await fetchRepos();
  console.log(repos);
  return (
    <div className="bg-gray-600 h-full mb-0">
      <h2 className="text-white text-center text-xl p-3">Repositories</h2>
      <ul className="max-w-4xl m-auto">
        {repos.map((repo) => (
          <li key={repo.id} className="pb-7">
            <Link href={`/code/repos/${repo.name}`}>
              <div className="bg-white p-5 space-y-3 rounded-md">
                <h3>{repo.name}</h3>

                <p>{repo.description}</p>
                <div className="bg-white flex justify-between space-y-2">
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default repos;
