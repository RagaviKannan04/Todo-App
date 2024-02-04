import React, { useState } from 'react';

import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './LandingElements';
import { useNavigate } from 'react-router-dom';


function Hero() {
    const nav=useNavigate();
    
    const navigate=()=>{
        nav('/register');
    }

   
    

	return (
		<HeroContainer>
			
			<HeroContent>
				<HeroItems>
					<HeroH1>Get Organized....</HeroH1>
					<HeroP>Plan Your Day With Us</HeroP>
					<HeroBtn onClick={navigate} >Get Started</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
}

export default Hero;