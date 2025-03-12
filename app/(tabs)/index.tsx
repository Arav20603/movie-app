import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text, View, Image, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter()
  return (
    <View className="flex-1">
      <Image source={images.bg} className="absolute w-full z-0 h-full" />

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10}}
      >
        <Image source={icons.movieIcon} className="w-12 h-10 mx-auto mt-4" />

        <SearchBar placeholder='Search for a movie' onPress={() => router.push('/search')} />
      </ScrollView>
    </View>
  );
}

export default Index
