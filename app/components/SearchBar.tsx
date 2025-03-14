import { icons } from '@/constants/icons'
import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

interface Props {
    placeholder: string,
    onPress?: () => void
  }

const SearchBar = ({placeholder, onPress}: Props) => {
    return (
        <View className='flex-row items-center bg-darkMagneta rounded-full mt-4 px-5 py-1'>
            <TouchableOpacity onPress={onPress}>
                <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff' />
            </TouchableOpacity>
            <TextInput placeholder={placeholder} className='flex-1 ml-2 text-white'
                 value='' onChangeText={() => {}} placeholderTextColor='#a8b5db'
            />
        </View>
    )
}

export default SearchBar