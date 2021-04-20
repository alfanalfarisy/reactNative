module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        alias: {
          // "_assets": "src/assets",
          // "_components": "src/components",
          "@atoms": "./src/components/atoms",
          "@molecules": "./src/components/molecules",
          "@organisms": "./src/components/organisms",
          "@routes": "./src/config/routes",
          "@screens": "./src/container/screens",
          "@actions": "./src/config/redux/actions",
          "@reducers": "./src/config/redux/reducers",
        },
      },
    },
  },
}
