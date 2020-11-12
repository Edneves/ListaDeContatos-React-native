import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {toUpperFirst} from '../util';


const PeopleListItem = props => {
    
    const {people, onPressItemDetails} = props
    const{first, last} = people.name

    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails(people)
        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{uri: people.picture.thumbnail}} />
                <Text style={styles.linetext} key={first}>
                    {` ${
                        toUpperFirst(first)
                    } ${
                        toUpperFirst(last)
                    }`}
                </Text>
            </View>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderWidth: 2,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linetext: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 6,
        color: '#fff'
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 50,
        borderRadius: 8
    }
})

export default PeopleListItem;