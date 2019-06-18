import React, { Component } from 'react';
import { ScrollView, AppRegistry, Text } from 'react-native';
import { connect } from "react-redux";
import axios from 'axios';

import { fetchItems } from '../actions/items';
import ItemDetail from './ItemDetail';

class ItemList extends Component {

   
   /*  state = {
        albums: []
    }; */
    componentDidMount() {

        const { loadItems } = this.props;
        loadItems();
       /*  axios
            .get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); */
    }

    renderItems(items) {
        return items
            .map(album => <ItemDetail key={album.title} album={album} />);
    }

    render() {
        
        const { items, isLoading } = this.props;
       
        if (isLoading){
            return <Text>Loading ... </Text>
        }else {
        return (           
            <ScrollView>
                {items && this.renderItems(items)}
            </ScrollView>
        )
    }
    }
}
mapStateToProps = state => {
    
    return {
        items: state.items.data,
        isLoading: state.items.isLoading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadItems: () => { dispatch(fetchItems()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
