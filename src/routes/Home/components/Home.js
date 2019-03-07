import React from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import PropTypes from 'prop-types'; 

import { Container } from "native-base";

import MapContainer from "./MapContainer";
import { getCurrentLocation } from "../modules/home";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";

const taxiLogo = require("../../../assets/img/taxi_logo_white.png")

export default class Home extends React.Component{

	componentDidMount(){
		this.props.getCurrentLocation();
		// console.log('CurrentLocation'+ this.props.getCurrentLocation());
	}

	render(){
		const region = {
			latitude: 14.599512,
			longitude: 120.984222,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		}

		return (
		<Container>
			<HeaderComponent logo={taxiLogo}/>
			{this.props.region.latitude &&
			<MapContainer region={this.props.region} 
					getInputData={this.props.getInputData}
					toggleSearchResultModal={this.props.toggleSearchResultModal}
					getAddressPredictions={this.props.getAddressPredictions}
					resultTypes={this.props.resultTypes}
					predictions={this.props.predictions}
			/>
			}
			<FooterComponent/>
		</Container>
		);
	}
}
