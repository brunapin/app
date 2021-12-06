import React from 'react'
import {View, Text, StyleSheet,StatusBar} from 'react-native'
import {colors} from './scr/global/styles'
import Providers from './scr/navigation/Providers'

export default function App(){
  return(
    // <SignInContextProvider>
    <View style = {styles.container}>
      <StatusBar 
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />  
        <Providers />   
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})

// import Video from 'react-native-video';
// import React from 'react';

// // Within your render function, assuming you have a file called
// // "background.mp4" in your project. You can include multiple videos
// // on a single screen if you like.

// <Video source={{uri: "https://www.youtube.com/watch?v=maWvFO6qM5A"}}   // Can be a URL or a local file.
//        ref={(ref) => {
//          this.player = ref
//        }}                                      // Store reference
//        onBuffer={this.onBuffer}                // Callback when remote video is buffering
//        onError={this.videoError}               // Callback when video cannot be loaded
//        style={styles.backgroundVideo} />

// // Later on in your styles..
// var styles = StyleSheet.create({
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });
