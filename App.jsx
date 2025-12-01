import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-3xl font-bold text-blue-500">Hello NativeWind!</Text>
      <Pressable className="mt-5 px-6 py-3 bg-blue-500 rounded-full">
        <Text className="text-white font-semibold">Click Me</Text>
      </Pressable>
    </View>
  );
}
