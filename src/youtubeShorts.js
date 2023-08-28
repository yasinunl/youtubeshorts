import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import VideoComponent from './videoComponent';

export default function YoutubeShorts() {
  const data = Array.from(Array(50).keys());
  const listRef = useRef(null);
  const [currentStoryPage, setCurrentStoryPage] = useState(0);
  const onScrollEnd = e => {
    const pageLocation = e.nativeEvent.contentOffset.x / 195;
    if (pageLocation - Math.floor(pageLocation) > 0.3)
      setCurrentStoryPage(Math.floor(pageLocation) + 1);
    else setCurrentStoryPage(Math.floor(pageLocation));
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          ref={listRef}
          data={data}
          renderItem={({item, index}) => (
            <VideoComponent
              onPage={item === currentStoryPage}
              listRef={listRef}
              item={item}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          onScroll={onScrollEnd}
          onEndReached={() => setCurrentStoryPage(data.length - 1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});
