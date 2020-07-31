import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

class Button extends Component {
/*     static propTypes = {
        label: propTypes.string,
        action: propTypes.func,
    } */

    render() {
        const { label, action } = this.props;
        return (
            <TouchableOpacity
                style={styles.btn}
                onPress={action}
            >
                <Text style={styles.btnText}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

Button.defaultProps = {
    label: 'Button',
    action: () => null,
}

Button.propTypes = {
    label: propTypes.string,
    //label: propTypes.string.isRequired,
    action: propTypes.func,
}

/* function Button(props) {
    const {label, action} = props;
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={action}
        >
            <Text style={styles.btnText}>{label}</Text>
        </TouchableOpacity>
    );
} */

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1'
    },

    btnText: {
        fontSize: 25,
        color: '#7f8c8d',
        fontWeight: 'bold'
    }
});

export default Button;