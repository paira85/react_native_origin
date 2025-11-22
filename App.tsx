// import "./global.css"
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { View, Text } from "react-native";
// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView className="flex-1 bg-gray-100">
//         <Text>HER</Text> 
//         {/* Header */}
//         <View className="h-16 bg-blue-500 items-center justify-center">
//           <Text className="text-white text-lg font-bold">HEADER</Text>
//         </View>
//         {/* Body */}
//         <View className="flex-1 items-center justify-center">
//           <Text className="text-xl text-gray-900">BODY</Text>
//         </View>
//         {/* Footer */}
//         <View className="h-16 bg-gray-800 items-center justify-center">
//           <Text className="text-white">FOOTER</Text>
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

import React from "react";

import {  SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import "./global.css"
import { Image, Text, View } from "react-native";
 
export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex flex-col w-full h-full">
        <View className="h-16 top-10 bg-black flex-row items-center justify-between px-4" >
          {/* LEFT: 아이콘 */}
          
          <View className="flex-row items-center">
            <Image
              source={require("./src/assets/images/home.png")}
              className="w-6 h-6 bg-white"
              resizeMode="contain"
            />
            </View>
            
            {/* CENTER: 타이틀 */}
            <View className="absolute left-1/2 -translate-x-1/2">
              <Text className="text-white text-lg font-bold">GoGo Inje</Text>
            </View>

            {/* RIGHT: 로그인 */}
            <View className="flex-row items-center">
              <Text className="text-white text-base">로그인</Text>
            </View>
        </View>

        {/* Body */}
        <View className="flex-1 w-full h-full items-center ">
          <Text className="text-xl">BODY</Text>

          <View>
            <View className="w-full flex flex-row gap-6">
              <Image className="w-16 h-16  rounded-full border-2"></Image>
              <View className="w-full">
                <Text className="text-sx">죽도해변</Text>
                <Text className="text-ls">서프아트체엄</Text>
                <Text className="text-xs">해양쓰레기를 활용한 나만의 작품 만들기</Text>
              </View>          
            </View>
          </View>    

          <View className="w-full grid grid-cols-2 gap-4 max-w-full p-4 w-[360px] h-[300px] ">
            <View className="flex-1 flex-row gap-4">
              <Image className="w-24 h-24 border-2"></Image>
              <View className="w-full text-wrap">
                <Text className="text-sx">죽도해변</Text>
                <Text className="text-ls">서프아트체엄</Text>
                <Text className="text-xs ">해양쓰레기를 활용한 나만의 작품 만들기</Text>
              </View>          
            </View>
            <View className="flex-1 flex-row gap-4">
              <Image className="w-24 h-24  border-2"></Image>
              <View className="w-full">
                <Text className="text-sx">죽도해변</Text>
                <Text className="text-ls">서프아트체엄</Text>
                <Text className="text-xs text-wrap">해양쓰레기를 활용한 나만의 작품 만들기</Text>
              </View>          
            </View>

            <View className="flex-1 flex-row gap-4">
              <Image className="w-24 h-24  border-2"></Image>
              <View className="w-full">
                <Text className="text-sx">죽도해변</Text>
                <Text className="text-ls">서프아트체엄</Text>
                <Text className="text-xs text-wrap">해양쓰레기를 활용한 나만의 작품 만들기</Text>
              </View>          
            </View>

            <View className="flex-1 flex-row gap-4">
              <Image className="w-24 h-24 border-2"></Image>
              <View className="w-full">
                <Text className="text-sx">죽도해변</Text>
                <Text className="text-ls">서프아트체엄</Text>
                <Text className="text-xs text-wrap">해양쓰레기를 활용한 나만의 작품 만들기</Text>
              </View>          
            </View>
          </View>   


          <View className=" h-[200px] w-[480px] flex flex-row gap-6 justify-start border-3 overflow-auto ">
            <View className="flex">
              <Image className="w-full h-24 rounded-xl  border-2"></Image>
              <View className="w-full  mt-3 ">
                <Text className="text-xs">죽도해변</Text>
                <Text className="text-ls">서프아트체엄</Text>
                <Text className="text-xs">해양쓰레기를 활용한 나만의 작품 만들기</Text>
              </View>          
            </View>

            <View className="flex">
              <Image className="w-full h-24 rounded-xl  border-2"></Image>
              <View className="w-full mt-3">
                <Text className="text-xs">죽도해변</Text>
                <Text className="text-ls">서프아트체엄</Text>
                <Text className="text-xs">해양쓰레기를 활용한 나만의 작품 만들기</Text>
              </View>          
            </View>

            <View className="flex">
              <Image className="w-full h-24 rounded-xl  border-2"></Image>
              <View className="w-full mt-3">
                <Text className="text-xs">죽도해변</Text>
                <Text className="text-ls">서프아트체엄</Text>
                <Text className="text-xs">해양쓰레기를 활용한 나만의 작품 만들기</Text>
              </View>          
            </View>
          </View>  
          
        </View>

        {/* Footer */}
        <View className="h-24 bg-blue-500 items-center justify-center">
          <Text className="text-white">FOOTER</Text>
        </View>
      </View>
      </SafeAreaProvider>
  );
}