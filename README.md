
# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## This is an auto play Youtube Shorts
![Last](readme/gif_20230828_151425.gif)

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```
## Specific configuration

```javascript
// Get the Current Item when scrolling
const onScrollEnd = e => {
    const pageLocation = e.nativeEvent.contentOffset.x / 195; // Component Width + marginHorizontal
    if (pageLocation - Math.floor(pageLocation) > 0.3)
      setCurrentStoryPage(Math.floor(pageLocation) + 1);
    else setCurrentStoryPage(Math.floor(pageLocation));
  };

```

## Contacts
- LinkedIn: https://www.linkedin.com/in/yasin-unluoglu-ba47831a3/
- E-Mail: ysn.unlgl@gmail.com