import React from 'react';
import CompanyImage from "./CompanyImage";
import CompanyName from "./CompanyName";
import JobTag from "./JobTag";
import JobTitle from "./JobTitle";
import JobDescription from './JobDescription';
import JobName from "./JobName";

const JobCard = props => {
    return ( 
        <div className="job-card featured">
            <div style={{display: 'flex', gap: '2rem'}}>
                <CompanyImage
                    src={[props.companyLogo]}
                />
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                    <div style={{display: 'flex', gap: '1rem'}}>
                        <CompanyName 
                            name={props.companyName}
                        />
                        {props.new && <JobTag
                            tag='NEW!'
                        />}
                        {props.featured && <JobTag
                            tag='FEATURED'
                        />}
                    </div>
                    <JobTitle 
                        title={props.title}
                    />
                    <JobDescription
                        posted={props.postedAt}
                        duration={props.contract}
                        accessibility={props.location}
                     />
                </div>
            </div>
            <div style={{display: 'flex', gap: '1.5rem'}}>
                <JobName 
                name={props.role}
                />
                <JobName 
                name={props.level}
                />
                {props.languages.map(language =>
                    <JobName 
                        name={language}
                    />
                )}
                {props.tools.map(tool => 
                    <JobName 
                        name={tool}
                    />
                )}
            </div>
        </div>
     );
}
 
export default JobCard;