import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

export default function VideoComponent({onPage, listRef, item}) {
  const VideoFunction = () => {
    let videoRef;
    return (
      <View style={styles.videoBox}>
        <Video
          ref={ref => (videoRef = ref)}
          rate={2.0}
          style={styles.videoBox}
          playInBackground={false}
          paused={!onPage}
          source={{
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
          }} // Can be a URL or a local file.
          resizeMode="cover"
          repeat={false}
          muted={true}
          onEnd={() => listRef.current.scrollToIndex({index: item + 1})}
        />
      </View>
    );
  };
  const PosterFunction = () => (
    <Image
      source={{uri: 'https://picsum.photos/id/237/400/800'}}
      style={styles.storyFoto}
    />
  );
  return (
    <View style={styles.container}>
      {onPage ? <VideoFunction /> : <PosterFunction />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 180,
    marginHorizontal: 7.5,
    borderRadius: 20,
  },
  videoBox: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 20,
  },
  storyFoto: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 2.5,
  },
});
