## React test with Redux and Navigation

## Using tutorials

- [React Navigation Redux](https://reactnavigation.org/docs/guides/redux)
- [React Navigation Redux example](https://github.com/react-community/react-navigation/tree/master/examples/ReduxExample)
- [Redux with React](http://redux.js.org/docs/basics/UsageWithReact.html)

## Instalation

```shell
brew install node
brew install watchman
npm install -g react-native-cli
```

## Running

run with

```shell
react-native run-ios
```

or 

```shell
react-native run-android
```
(You must have an android emulator running or a device connected)

## Logging

```shell
react-native log-ios
```

## Notes

Added `lodash` to the dependencies to [prevent an app crash](https://github.com/mhartington/cordova-config-utils/issues/18#issuecomment-259471411)

## Issues

or to ignore the nw_connection_get_connected_socket_block_invoke message in the log [git hub issue](https://github.com/facebook/react-native/issues/10027)

log via:

```shell
react-native log-ios | grep -v nw_connection_get_connected_socket_block_invoke
```

or install and run [react-devtools](https://github.com/facebook/react-devtools/blob/master/packages/react-devtools/README.md)