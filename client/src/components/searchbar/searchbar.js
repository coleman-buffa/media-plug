import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FormControl, TextField, Button, InputAdornment, IconButton, Grid } from '@material-ui/core';
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
						placeholder="Learn you some knowledge"
						variant="outlined"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton>
										<SearchIcon
											onClick={props.handleInputSearch} />
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