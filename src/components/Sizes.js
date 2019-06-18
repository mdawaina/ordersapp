import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'

class Sizes extends Component { 
// ...

state = {
    selectedOption: ''

}

render() {
    const options = [
        "Option 1",
        "Option 2"
    ];

    function setSelectedOption(selectedOption) {
        this.setState({
            selectedOption
        });
    }

    function renderOption(option, selected, onSelect, index) {
        const style = selected ? { fontWeight: 'bold' } : {};

        return (
            <TouchableWithoutFeedback onPress={onSelect} key={index}>
                <Text style={style}>{option}</Text>
            </TouchableWithoutFeedback>
        );
    }

    function renderContainer(optionNodes) {
        return <View>{optionNodes}</View>;
    }

    return (
        <View style={{ margin: 20 }}>
            <RadioButtons
                options={options}
                onSelection={setSelectedOption.bind(this)}
                selectedOption={this.state.selectedOption}
                renderOption={renderOption}
                renderContainer={renderContainer}
            />
            <Text>Selected option: {this.state.selectedOption || 'none'}</Text>
        </View>);
    }
   
}
 
export default Sizes;