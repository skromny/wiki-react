import React, { useState } from 'react'
import api from "../Services/api";

export const Home = () => {

	const [searchQuery, setSearchQuery] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const createMarkup = (html) => {
		return {__html: html};
	};

	const onSearch = async () => {
		console.log("Search", searchQuery);
		try {
			const { data: {
				query: {
					general,
					search
				}
			} } = await api.get(`api.php?action=query&prop=info&inprop=url&meta=siteinfo&origin=*&list=search&format=json&srlimit=20&srsearch=${searchQuery}`);
			console.log(search);
			setSearchResult(search);
		} catch (error) {
			console.error(error);
		}
	};

	return ( 
		<div >
			<h1> Szukajka </h1>
			<input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
			<button onClick={onSearch}>Szukaj </button> 
			<div>
				{searchResult.map(r => (
					<div key={r.pageid}>
						<h3>{r.title}</h3>
						<div dangerouslySetInnerHTML={createMarkup(r.snippet)}></div>
					</div>
				))}
			</div>
		</div>
	)
}