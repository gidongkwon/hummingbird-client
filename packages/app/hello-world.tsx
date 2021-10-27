import { View, Text } from 'dripsy';

export function HelloWorld() {
  return (
    <View sx={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'slate10',
    }}>
      <Text>Hello, World!!!</Text>
    </View>
  );
}
