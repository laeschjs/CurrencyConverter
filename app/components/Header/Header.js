import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const Header = () => (
	<View>
		<TouchableOpacity>
			<Image source={require('./images/gear.png')} />
		</TouchableOpacity>
	</View>
);

export default Header;