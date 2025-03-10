import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-darkMagneta">Welcome</Text>
      <Link href='/Onboarding'>Onboarding</Link>
      <Link href='./movie/Avengers'>Avengers</Link>
    </View>
  );
}
