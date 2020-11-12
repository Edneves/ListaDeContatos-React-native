import React from 'react'
import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native'

export default class PeopleDetailsPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            "people": props.route.params.people
        }
    }
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.textTitulo}>
                    <Text style={styles.textEstiloHeader}>{this.state.people.name.first} </Text>
                </View>

                <View >
                    <TouchableOpacity onPress={()=> {
                        alert("Me liga"+" "+this.state.people.phone)
                    }}>                      
                   
                        <Image style={styles.avatar} source={{uri: this.state.people.picture.large}}/>
                    </TouchableOpacity> 
                </View>
                
                <View style={styles.detailContainer}>
                    <Text style={styles.textEstilo}>*****{this.state.people.name.first} {this.state.people.name.last}*****</Text>
                    <Text style={styles.textEstilo}> {this.state.people.email}</Text>
                    <Text style={styles.textEstilo}>{this.state.people.phone}</Text>
                    <Text style={styles.textEstilo}>{this.state.people.location.state}</Text>
                    <Text style={styles.textEstilo}>{this.state.people.location.city}</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textTitulo: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderBottomColor: '#bbb',
        borderRadius: 60
    },
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#2E9AFE',
        borderRadius: 80,
    },
    textEstiloHeader: {
        marginLeft: 50,
        marginRight: 50,
        paddingBottom: 10,
        fontSize: 40,
       color: '#0A122A'
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 13,
        marginRight: 13,
        borderRadius: 50,
        marginBottom: 5,
        marginTop: 5
        
    },
    detailContainer:{
        paddingTop: 30,
        flex: 1,
        alignItems: 'center',
    },
        
    textEstilo: {
        fontSize: 21,
        color: '#fff'
    },
    
})