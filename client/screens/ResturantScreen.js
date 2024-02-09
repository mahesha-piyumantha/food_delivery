import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import {StatusBar} from 'expo-status-bar';


export default function ResturantScreen() {
  /**
   *
   * In here we are trying to usw useRoute() to get the data passed from HomeScreen to ResturantScreen.
   * To access those passed data from HomeScreen
   * to ResturantScreen throughout the item object
   */

  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;
  console.log(item);

  //console.log("restaurant", item);

  return (
    <View className="relative">
    <CartIcon/>
    <StatusBar style="light"/>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-12 left-4 p-2 bg-gray-50 rounded-full shadow"
          >
            <Icon.ArrowLeft strokWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold"> {item.name}</Text>
            <View className="flex-row my-1 space-x-2">
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

            <Text className=" text-gray-500 mt-2"> {item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>

          {/* dishes */}
          {item.dishes.map((dish, index) => {
            console.log(dish);
            return (
              <DishRow
                item={{...dish}}
                key={index}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
