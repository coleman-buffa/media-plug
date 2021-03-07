import React from 'react';
import StatsCarousel from '../components/statsCarousel/statsCarousel';
import ProfHeader from "../components/profheader/profheader";
import MyChallenges from "../components/mychallenges/mychallenges";

function Profile() {
	return (
		<div>
			<ProfHeader />
			<div className="statsCar" style={{ padding: 40 }}>
				<StatsCarousel />
				<MyChallenges />
			</div>
		</div>
	);
}

export default Profile;