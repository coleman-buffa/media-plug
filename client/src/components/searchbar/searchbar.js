import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FormControl, TextField, InputAdornment, IconButton, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
	searchForm: {
		marginTop: 50
	},
	bar: {
		width: "100%"
	},
	button: {
		display: 'block'
	}
});

function SearchBar(props) {
	const classes = useStyles();
	return (
		<Grid >
			<form className="content"  >
				<FormControl fullWidth >
					<TextField
						value={props.searchTerm}
						ref={props.inputRef}
						className={classes.bar}
						required
						id="search-term"
						placeholder="Search a book"
						variant="outlined"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={props.handleInputSearch}
									>
										<SearchIcon />
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
				</FormControl>
			</form>
		</Grid>
	);
};

export default SearchBar;