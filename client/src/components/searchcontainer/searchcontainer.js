import React from 'react';
import SearchBar from '../searchbar/searchbar';
import SearchCard from '../searchcard/searchcard';
import API from '../../utils/API';

function SearchContainer() {
	return (
		<div>
			<SearchBar />
			{/* map over search results and display in cards */}
			<SearchCard />
		</div>
	);
};

export default SearchContainer;