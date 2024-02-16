import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const MovieLists = ({ title, data }) => {
  const movieName = "Spider Man No Way Home";
  const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
      <View className="flex-row justify-between items-center mx-4">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text style={styles.text}>See All</Text>
          {/*   increase the size later if required */}
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map(({ item, index }) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.navigate("Movie", item)}
          >
            <View className="space-y-1 mr-4">
              <Image
                className="rounded-xl"
                source={require("../assets/movie1.jpg")}
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text className="text-neutral-300 ml-1">
                {movieName.length > 14
                  ? movieName.slice(0, 14) + "..."
                  : movieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default MovieLists;
