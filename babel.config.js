// module.exports = {
//   presets: [
//     // "module:metro-react-native-babel-preset" ,
//     '@react-native/babel-preset',
//     'nativewind/babel' 
//   ],
//   plugins: [
//     [
//       "module-resolver",
//       {
//         root: ["./"],
//         alias: {
//           "~": "./src",
//           "@components": "./src/components",
//           "@screens": "./src/screens",
//           "@assets": "./src/assets",
//           "@query": "./src/query",
//         },
//         extensions: [
//           ".js",
//           ".jsx",
//           ".ts",
//           ".tsx",
//           ".json",
//         ],
//       },
//     ],
//     // "react-native-worklets/plugin",
//     "react-native-reanimated/plugin"
//   ],
// };


module.exports = {
  presets: ['@react-native/babel-preset', "nativewind/babel"],
  // presets: ["module:metro-react-native-babel-preset" ,'nativewind/babel'   ],
//  plugins: ["nativewind/babel"],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],

        alias: {
          '@': './',
          'tailwind.config': './tailwind.config.js',
        },
      },
    ],
    'react-native-worklets/plugin',
  ]
};
