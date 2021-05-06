import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Title, Caption } from 'react-native-paper';

export default function Policy() {
    return (
        <ScrollView style={styles.container}>
            <Title style={{ fontSize: 16 }}>I. Return Policy</Title>
            <Caption style={{ fontSize: 14 }}>Customers need to check the status of the goods and can exchange / return the goods at the time of delivery / receipt in the following cases: </Caption>
            <Caption style={{ fontSize: 14 }}> - The goods are not of the correct type or model in the ordered order or as on the website at the time of order. </Caption>
            <Caption style={{ fontSize: 14 }}> - Not enough quantity, not enough sets as in the order.  </Caption>
            <Caption style={{ fontSize: 14 }}> - External conditions are affected such as packaging tear, peeling, breakage ... </Caption>
            <Caption style={{ fontSize: 14 }}>Customers are responsible for submitting relevant documents proving the above deficiencies to complete the return / return of goods. </Caption>
        
            <Title style={{ fontSize: 16 }}>II. Privacy Policy</Title>
            <Caption style={{ fontSize: 14 }}>This privacy policy is intended to help you understand how the website collects and uses your personal information through the use of the website, including any information that can be provided through the website when you register. account, register to receive communications from us, or when you purchase products or services, request additional service information from us. </Caption>
            <Caption style={{ fontSize: 14 }}>We use your personal information to communicate when necessary in relation to your use of our website, to answer questions or to send documents and information you request.  </Caption>
            <Caption style={{ fontSize: 14 }}>Our website takes the security of information seriously and uses best practices to protect the information and payment of our customers. </Caption>
            <Caption style={{ fontSize: 14 }}>All transaction information will be kept confidential except in case required by law. </Caption>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    }
});