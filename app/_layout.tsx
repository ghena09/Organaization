import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
    <Stack.Screen name="index" options={{}} />
    <Stack.Screen name="home" options={{}} />
  </Stack>
  )
}


// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import DropdownMenu, { MenuOption } from '../components/DropdownMenu';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   const [visible2, setVisible2] = useState(false);

//   return (
//     <View style={styles.container}>
//       <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-between' }}>
//         <DropdownMenu
//           visible={visible}
//           handleOpen={() => setVisible(true)}
//           handleClose={() => setVisible(false)}
//           trigger={
//             <View style={styles.triggerStyle}>
//               <Text style={styles.triggerText}>Actions</Text>
//             </View>
//           }
//         >
//           <MenuOption onSelect={() => {

//             setVisible(false);
//           }}>
//             <Text>View Details</Text>
//           </MenuOption>
//           <MenuOption onSelect={() => {

//             setVisible(false);
//           }}>
//             <Text>Delete</Text>
//           </MenuOption>
//         </DropdownMenu>

//         <DropdownMenu
//           visible={visible2}
//           handleOpen={() => setVisible2(true)}
//           handleClose={() => setVisible2(false)}
//           trigger={
//             <View style={styles.triggerStyle}>
//               <Text style={styles.triggerText}>Actions</Text>
//             </View>
//           }
//         >
//           <MenuOption onSelect={() => {

//             setVisible2(false);
//           }}>
//             <Text>2</Text>
//           </MenuOption>
//           <MenuOption onSelect={() => {

//             setVisible2(false);
//           }}>
//             <Text>3</Text>
//           </MenuOption>
//         </DropdownMenu>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5fcff',
//   },
//   triggerStyle: {
//     height: 40,
//     backgroundColor: "red",
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: 100,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   triggerText: {
//     fontSize: 16,
//   }
// });

// export default App;