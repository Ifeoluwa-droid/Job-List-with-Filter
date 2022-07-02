import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import React from 'react';

const Jobs = props => {

    const [jobs, setJobs] = useState(null)

    const workingFrom = 'external';

    let endpoint = workingFrom === 'local' ? 'http://localhost:8000/jobs' : 'https://ifeoluwa-droid.github.io/Job-List-with-Filter/data/db.json';  

    useEffect(() => {
        fetch(endpoint).then(res => res.json()).then(data => {
            setJobs(workingFrom === 'local' ? data : data.jobs) // since we are using github hosted api.
        })
    }, []);

    const filterJobs = (job) => {
        const jobRole = [job.role.toLowerCase()];
        const jobLevel = [job.level.toLowerCase()];
        const jobLanguages = job.languages.map(language => language.toLowerCase());
        const jobTools = job.tools.map(tool => tool.toLowerCase());

        const jobTags = jobRole.concat(jobLevel).concat(jobLanguages).concat(jobTools);

        console.log(jobTags);

        if (props.searchTerms.every(tag => jobTags.includes(tag.value.toLowerCase()))) {
            console.log(true);
            return <JobCard 
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
        }
    }

    return (  
        <main className="jobs">
           {jobs ? jobs.map(filterJobs) : <h1>Loading...</h1>} 
        </main>  
    );
}
 
export default Jobs;