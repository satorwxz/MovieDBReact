import React from 'react';
import './style.css';
import Pngbar from '../Assets/Lan Wangji Chibi - Afterbyun (6).png';

const Search = ({search,handleSearch,handleSubmit}) => {
    return (
        <div>
            <div className={'search-wrapper'}>
                <img className={'lan'} src={Pngbar} alt=""/>
                <input
                    onKeyDown={(e) =>{
                    if(e.key === 'Enter'){
                        handleSubmit()
                    }
                    }}
                    defaultValue={search}
                    onChange={handleSearch}
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                />
                <button onClick={handleSubmit} type="button" className="btn btn-warning">Search</button>
            </div>
        </div>
    );
};

export default Search;