import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import React from 'react';

const Jobs = () => {

    const [jobs, setJobs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/jobs').then(res => res.json()).then(data => {
            setJobs(data)
        })
    }, []);

    return (  
        <main className="jobs">
           {jobs ? jobs.map(job => 
                <JobCard 
                    key={job.id}
                    companyName={job.company}
                    companyLogo={job.logo}
                    new={job.new}
                    featured={job.featured}
                    title={job.position}
                    postedAt={job.postedAt}
                    contract={job.contract}
                    location={job.location}
                    role={job.role}
                    level={job.level}
                    languages={job.languages}
                    tools={job.tools}
                />
           ) : <h1>Loading...</h1>} 
        </main>  
    );
}
 
export default Jobs;