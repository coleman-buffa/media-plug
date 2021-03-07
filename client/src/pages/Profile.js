import React from 'react';
import StatsCarousel from '../components/statsCarousel/statsCarousel';
import ProfHeader from "../components/profheader/profheader";

function Profile() {
	return (
		<div>
			<ProfHeader />
			<div className="statsCar" style={{ padding: 40 }}>
				<StatsCarousel />
			</div>
		</div>
	);
}

export default Profile;