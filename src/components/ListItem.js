import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text,  View, Image, Button, TouchableWithoutFeedback } from 'react-native';
import { selectItem } from '../actions/items';
import CardSection from './CardSection';




class ListItem extends Component {
    navigateToDetails(){
        if (this.props.item.item.id == this.props.selectedItemId){
            //console.log(">>" + this.props.selectedItemId);
            return <Text>{this.props.item.item.title}</Text>
        }else {
            //console.log(this.props.item.item.id);
            //console.log(this.props.selectedItemId);
        }
    }
    render () {
       
        const { id, image, title } = this.props.item.item;
        
        const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
        return (
            <TouchableWithoutFeedback  onPress={() => this.props.onItemSelect(id)}>
                <View>
                    <CardSection>
                        <Image source={{ uri: image }} style={imageStyle} />
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => Linking.openURL('http://dawzone.tech')} title="Press Me">
                        
                    </Button>
                    </CardSection>
                    {/* {this.navigateToDetails()} */}
                </View>
               
            </TouchableWithoutFeedback>
        );
    }
}

mapStateToProps = state => {
    return {
        selectedItemId: state.selectedId
    }
}
const mapDispatchToProps = (dispatch,id) => {
    return {
        onItemSelect: (id) => { dispatch(selectItem(id)) }
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);