import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from "react-redux";
import { fetchItems } from '../actions/items';
import ListItem from './ListItem';
import {Spinner} from './Spinner';

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

  /*   renderItems(items) {
        return items
            .map(album => <ItemDetail key={album.title} album={album} />);
    }
 */
    renderItem(item) {
        return <ListItem item={item} />;
    }

    render() {

        const { items, isLoading } = this.props;
       
        if (isLoading) {
            return <Spinner />

        } else {
            return (
                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    >
                    
                </FlatList>
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
