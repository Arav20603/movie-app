import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from "expo-router";
import { useFetchMovies } from "../services/useFetch";
import MovieCard from "../components/MovieCard";

const Index = () => {
  const router = useRouter()

  const {movies, loading, error} = useFetchMovies()
  return (
    <View className="flex-1">
      <Image source={images.bg} className="absolute w-full z-0 h-full" />

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10}}
      >
        <Image source={icons.movieIcon} className="w-12 h-10 mx-auto mt-4" />

        { loading ? (
          <ActivityIndicator size='large'
          color='#000ff'
          className="mt-10 self-center" />
        ) : (error ? (
          <Text>Error: {error.message}</Text>
        ):
        <View>
          <SearchBar placeholder='Search for a movie' onPress={() => router.push('/search')} />

            <>
              <Text className="color-white mt-5 underline text-xl">Latest Movies</Text>
              <FlatList data={movies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <MovieCard item={item} />
              )}
              numColumns={2}
              />
            </>
        </View> 
        )}



        
      </ScrollView>
    </View>
  );
}

export default Index
