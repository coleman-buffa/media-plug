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

function SearchBar() {
	const classes = useStyles();
	return (
		<Grid >
			{/* <section > */}
				<form className="content"  >
					<FormControl fullWidth >
						<TextField
							className={classes.bar}
							required
							id="search-term"
							placeholder="Learn you some knowledge"
							variant="outlined"
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton>
											<SearchIcon />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
					</FormControl>
				</form>
			{/* </section> */}
		</Grid>
	);
};

export default SearchBar;