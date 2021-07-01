import React from 'react';
import {Image, Text} from 'react-native';
import {View} from 'react-native';
import {primary} from '../../assets/styles/primary.styles';

const CenterHeaderComponent = (
    {
        title,
        titleStyle,
        image,
        isImage,
    }
) => {
    return(
        <View style={primary().alignCenter}>
            {
                isImage ? (
                    <Image
                        style={{width: 30, height: 30}}
                        source={image}
                    />
                ):(
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                )
            }
        </View>
    )
};


export default CenterHeaderComponent;
