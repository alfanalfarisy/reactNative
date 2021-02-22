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
          // "_molecules": "src/components/molecules",
          // "_organisms": "src/components/organisms",
          // "_routes": "src/config/routes",
          "@screens": "./src/container/screens",
          "@actions": "./src/config/redux/actions",
          "@reducers": "./src/config/redux/reducers",
        },
      },
    },
  },
}
