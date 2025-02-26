import React from 'react'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

export default function RepoItem({repo}) {

    const {
        name,
        description,
        html_url,
        watchers_count,
        stargazers_count,
        forks
    } = repo
  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
        <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">\
                <a href={html_url}>
                    <FaLink className='inline mr-1' /> {name}
                </a>
            </h3>
            <p className='mb-3'>{description}</p>
            <div>
                <div className="mr-2 badge badge-info badge-lg">
                    <FaEye className='mr-2' /> {watchers_count}
                </div>
            </div>
            <div>
                <div className="mr-2 badge badge-success badge-lg">
                    <FaStar className='mr-2' /> {stargazers_count}
                </div>
            </div>
            <div>
                <div className="mr-2 badge badge-warning badge-lg">
                    <FaStar className='mr-2' /> {forks}
                </div>
            </div>
        </div>
    </div>
  )
}
