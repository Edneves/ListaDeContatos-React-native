import React from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import PeopleList from '../component/PeopleList';



export default class PeoplePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            peoples: []
        }   
    }

    componentDidMount(){
        axios
        .get('https://run.mocky.io/v3/5b2bc1ee-ba37-43f4-90d3-729a4b52452a')
        .then(response => {
            const {results} = response.data
            this.setState({
                peoples: results
            })
        })
    }

    render() {
        return (
            <ScrollView>
                <PeopleList peoples={this.state.peoples}
                onPressItem={(people) => {
                    this.props.navigation.navigate('DETALHES DO CONTATO', {"people": people})
                }} />
            </ScrollView>
        )
    }
}