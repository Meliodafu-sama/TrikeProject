import React from "react";
import { Text } from "react-native";
//Dependecy for creating a more lively UI - it's like a bootstrap
import { View, InputGroup, Input } from "native-base";
//Dependecy if you'll use Icons like FontAwesome/Ionicons etc.
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./SearchBoxStyles";

export const SearchBox = () => {

		return (
			<View style = {styles.searchBox}>
				<View style= {styles.inputWrapper}>
					<Text style = {styles.label}>PICK-UP</Text>
					<InputGroup>
						<Icon name="search" size={15} color="#FF5E3A"/>
						<Input style = {styles.inputSearch} 
							placeholder = "Choose Pick-Up Location"
						/>
					</InputGroup>
				</View>

				<View style= {styles.secondInputWrapper}>
					<Text style = {styles.label}>DROP-OFF</Text>
					<InputGroup>
						<Icon name="search" size={15} color="#FF5E3A"/>
						<Input style = {styles.inputSearch} 
							placeholder = "Choose Drop-Off Location"
						/>
					</InputGroup>
				</View>

			</View>
		);
	};
export default SearchBox;