import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/TrendingMovies";
import MovieLists from "../components/MovieLists";

const ios = Platform.OS == "ios";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light"></StatusBar>
        <View className="flex-row justify-between items-center mt-12 mx-4">
          <Bars3CenterLeftIcon strokeWidth={2} size={30} color="white" />
          <Text className="text-white font-bold text-3xl">
            <Text style={styles.text}>m</Text>ovE
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon color="white" strokeWidth={2} size={30} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <TrendingMovies data={trending} />
        <MovieLists title={"Upcoming Movies"} data={upcoming} />
        <MovieLists title={"Top Rated Movies"} data={topRated} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
