import React from 'react'
import { Text, View, Image } from 'react-native'

const MovieCard = ({item}: any) => {
    return (
        <View className='mt-4 flex justify-between mx-2 p-2 bg-gray-900 rounded-2xl'>
            <View className='p-2 w-[160px]'>
                <Image source={{ uri: item.poster }} className='w-full h-60 rounded-2xl' />
                <Text className='color-teal-400 text-lg mt-2 mx-2 font-bold'>{item.title}</Text>
                <Text className='color-blue-200'>({item.genre})</Text>
                <Text className='color-blue-200'>Rating: {item.rating}</Text>
                <Text className='color-blue-200'>Release Date: {item.release_year}</Text>
            </View>
        </View>
    )
}

export default MovieCard
