import React from 'react'
import { View, Text,Image, FlatList, StyleSheet} from 'react-native'
import styled from 'styled-components';

import {mockImages} from './mockdata'

export default function PhotoListScreen() {
    return (
        <Container>
            <FlatList 
                data={mockImages}
                renderItem={Photo}
                numColumns={3}
                keyExtractor={(item, index)=> index.toString() }
                columnWrapperStyle={styles.FlatListComumWrapper}

            />
        </Container>
    )
}

const Photo = ({item}) => {
    const imageSource = item.regularImageSrc
 return<StyledImage source={{uri:imageSource}} /> 
}



const Container = styled(View)`
` 

const StyledImage = styled(Image)`
flex:1;
height: 300px;
border-width: 1px
`

const styles = StyleSheet.create({
    FlatListComumWrapper:{
        display:'flex',

    },
    Image: {
        flex: 1,
        height: 300,
        borderWidth:1,
    }
})