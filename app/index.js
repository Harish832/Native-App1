import { useState } from "react";
import { Stack,useRouter } from "expo-router";
import { View,ScrollView,SafeAreaView } from "react-native";

import {COLORS,icons,images,SIZES} from '../constants';
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const Home =()=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle:"",
            }}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex:1,
                    padding:SIZES.medium
                }}>
                    <Welcome></Welcome>
                    <Popularjobs></Popularjobs>
                    <Nearbyjobs></Nearbyjobs>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;