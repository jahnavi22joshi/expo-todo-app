import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View className="pt-16 pb-5 px-5 bg-blue-500">
      <Text className="text-white text-3xl font-bold">
        My Todos
      </Text>

      <Text className="text-blue-100 mt-1">
        Organize your daily tasks
      </Text>
    </View>
  );
};

export default Header;