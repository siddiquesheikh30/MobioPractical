/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */

//import liraries
import React from 'react';
import { View, Text, StyleSheet,Image, FlatList,StatusBar } from 'react-native';
import { productData } from '../data/ProductData';
import { RadioButton } from 'react-native-paper';

const ListContainer = ({item})=> {

    return (

        <View style={styles.listContainer}>
    <View style={[styles.block,styles.bottomMargin]}>
            <Image 
                        resizeMode="contain"
                        source={require('../images/icon-picture.png')}
                        style={styles.brandImage}
                         />
            <View>
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.textStyle}><Text style={styles.label}>price:</Text> {item.price}</Text>
    
                <View style={{flexDirection:'row', flexWrap:'wrap',width:'94%'}}>
                <Text style={styles.label}>brands: </Text>
    
                {item.brands.map((brand,index,arr) =>{
                    return (
                        arr.length - 1 === index ?<Text key={index} style={styles.textStyle}>{brand.name}</Text>:<Text key={index} style={styles.textStyle}>{brand.name}, </Text>
                    )
                })}
                </View>
            </View>
    
        </View>
        <View>

<Text style={styles.label}>Colors</Text>

<View style={styles.block}>
<View style={styles.block}>
        <RadioButton
            value="Red"
            status={ item.colors.includes('Red') == true?'checked':'unchecked' }
            color={'#000'}
            uncheckedColor={'#000'}
          />
          <Text style={styles.textStyle}>Red</Text>
</View>

<View style={styles.block}>
<RadioButton
            value="Red"
            status={ item.colors.includes('Blue') == true?'checked':'unchecked' }
            color={'#000'}
            uncheckedColor={'#000'}
          />
    <Text style={styles.textStyle}>Blue</Text>
</View>

<View style={styles.block}>
<RadioButton
            value="Red"
            status={ item.colors.includes('Green') == true?'checked':'unchecked' }
            color={'#000'}
            uncheckedColor={'#000'}
          />
    <Text style={styles.textStyle}>Green</Text>
</View>
</View>

        </View>
        </View>
    );
};

// create a component
const ProductList = () => {
    return (
        <View style={styles.container}>
        <StatusBar
                    animated={true}
                    backgroundColor={'#fff'}
                    barStyle="dark-content"
                  />
          <FlatList
                    data={productData}
                    ListHeaderComponent={() => {
              return (
                  <View style={styles.headerContainer}>
             <Text style={styles.headerText}>Products</Text>
            </View>
              );
            }}
            stickyHeaderIndices={[0]}
                    renderItem={ListContainer}
                    keyExtractor = {item => item._id }
                />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:20,
        backgroundColor: '#fff',
    },
    headerContainer: {
        borderWidth:0.5,
        padding:5,alignItems:'center',
        backgroundColor:'#fff',
    },
    headerText:{
        fontWeight:'700',
        color:'#000',
        fontSize:20,
    },
    listContainer:{
        padding:20,
        borderBottomWidth:0.5,
    },
    block:{
        flexDirection:'row',
        alignItems:'center',
    },
    bottomMargin:{
        marginBottom:25,
    },
    brandImage:{
        width:100,
        height:100,
        borderRadius:360,
         marginRight:20,
        },
        productName:{
            color:'#000',
            fontWeight:'500',
            marginBottom:10,
        },
    label:{
        fontWeight:'700',
        color:'#000',
        textTransform:'capitalize',
        fontSize:16,
    },
    textStyle:{
        color:'#000',
        fontWeight:'500',
    },
});

//make this component available to the app
export default ProductList;
