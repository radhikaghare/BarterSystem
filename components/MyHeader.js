import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View } from 'react-native';

export default class MyHeader extends Component {

    render(){
        return(
            <View style={{marginTop:40,width:400}}>
            <Header 
              centerComponent={{text:this.props.title,style:{color:'#90A5A9',fontSize:20,fontWeight:'bold'}}}
              backgroundColor = "#eaf8fe"
            />
            </View>
        )
    }
}