import React from 'react';

import {originalPathPeople} from "../services";

const People = ({people}) => {
    return (
        <div>
            {
                people.map(el => (
                    <div>
                        <img className={'people-img'} src={originalPathPeople + el.profile_path} alt=""/>
                        <div>
                            <h3>{el.name}</h3>
                        </div>

                    </div>

                ))
            }
        </div>
    );
};

export default People;