import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function ResturantCard({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      /**
        
          While navigate from HomeScreen to ResturantScreen the copy
          of item obejct will pass to ResturantScreen using a spread 
          operator (...item). To access those data we need to use params from
          useRoute() in the RestaurantScreen.
        
         */
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-green-700">{item.stars}</Text>
              <Text className="text-gray-700">
                ({item.reviews} review) .{" "}
                <Text className="font-semibold">{item.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin height={15} width={15} color={"gray"} />
            <Text className="text-xs text-gray-700">
              {" "}
              Nearby. {item.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
