import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';

const CartIconBadge = (props) => {
    return (
        <View style={styles.titleCart}>
            {props.listCart.length > 0 ?
                <View style={styles.titleCount}>
                    <Text style={styles.textCount}>10</Text>
                </View>
                :
                <View></View>
            }
            <TouchableOpacity>
                <AntDesign name="shoppingcart" size={34} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleCart: {
        position: 'relative',
        marginRight: 20
    },
    titleCount: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    textCount: {
        color: '#fff',
        fontSize: 10
    }
});
const mapStateToProps = (state) => {
    return {
        listCart: state
    }
}

export default connect(mapStateToProps)(CartIconBadge);