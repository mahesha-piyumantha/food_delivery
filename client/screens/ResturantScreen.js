import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResturantScreen() {
  /**
   *
   * In here we are trying to usw useRoute() to get the data passed from HomeScreen to ResturantScreen. 
   * To access those passed data from HomeScreen
   * to ResturantScreen throughout the item object 
   */

  const { params } = useRoute();
  let item = params;
  console.log(item);

  //console.log("restaurant", item);

  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image}/>
        </View>
      </ScrollView>
    </View>
  );
}
