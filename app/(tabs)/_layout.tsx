import { Tabs } from 'expo-router'
import React, { useRef, useState } from 'react'
import {icons} from '@/constants/icons'
import {images} from '@/constants/images'
import { ImageBackground, Text, Image, View } from 'react-native'

const TabIcon = ({focused, icon, title} : any) => {
        if (focused) {
            return (
                <ImageBackground
                source={images.highlight}
                className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center
                rounded-full overflow-hidden'
                >
                    <Image source={icon}
                    tintColor='#151315' className='size-5' />
                    <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
                </ImageBackground>
            )
        }
        return (
            <View>
                <Image source={icon} className='size-5 justify-center items-center mt-4 rounded-full' tintColor='#ffff' />
            </View>
        )
        
}

const _Layout = () => {
    
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '0f0d23'
                }

            }}
        >
            <Tabs.Screen 
                name='index'
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.home} title='Home' />
                    )
                }}
            />
            <Tabs.Screen 
                name='search'
                options={{
                    headerShown: false,
                    title: "Search",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.search} title='Search' />
                    )
                }}
            />
            <Tabs.Screen 
                name='profile'
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.profile} title='Profile' />
                    )
                }}
            />
            <Tabs.Screen 
                name='saved'
                options={{
                    headerShown: false,
                    title: "Saved",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.saved} title='Saved' />
                    )
                }}
            />
        </Tabs>
    )
}

export default _Layout