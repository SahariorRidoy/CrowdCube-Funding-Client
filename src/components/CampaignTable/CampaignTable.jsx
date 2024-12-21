import React from 'react';
import { Link } from 'react-router';

const CampaignTable = ({campaign,idx}) => {
    const {image,amount,date,title,_id}=campaign  
    return (
        <>
         <tr>
            <td>{idx+1}</td>
                <td><img className='w-20 rounded-md' src={image} alt="" /></td>
                <td>{title}</td>
                <td>{date}</td>
                <td>{amount}</td>
                <td>
                <div>
                <Link to={`/all-campaign/${_id}`} className='btn btn-success text-white'>See More</Link>
            </div>
                </td>
            </tr>    
        </>
 
    );
};

export default CampaignTable;