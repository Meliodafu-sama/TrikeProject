import React from "react";
import { Text, FlatList } from "react-native";
//Dependecy for creating a more lively UI - it's like a bootstrap
import { View, List, ListItem, Left, Body } from "native-base";
//Dependecy if you'll use Icons like FontAwesome/Ionicons etc.
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./SearchResultStyles";

export const SearchResults = ({predictions, getSelectedAddress})=> {
	function handleSelectedAddress(placeID){
		getSelectedAddress(placeID)
	}

		return(
			<View style={styles.searchResultsWrapper} >
				<List 
					dataArray={predictions}
					renderRow={(item)=>
						<View>
							<ListItem onPress={()=>handleSelectedAddress(item.placeID)} button avatar>
								<Left style={styles.leftContainer}>
									<Icon style={styles.leftIcon} name="location-on" />
								</Left>
								<Body>
									<Text style={styles.primaryText}>{item.primaryText}</Text>
									<Text style={styles.secondaryText}>{item.secondaryText}</Text>
								</Body>
							</ListItem>
						</View>
					}
				/>
			</View>

		);
};

export default SearchResults;