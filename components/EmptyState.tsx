import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const EmptyState = () => {
  return (
    <View className="items-center justify-center mt-28 px-6">

      <View className="bg-blue-100 p-6 rounded-full">
        <Ionicons
          name="document-text-outline"
          size={60}
          color="#3B82F6"
        />
      </View>

      <Text className="text-2xl font-bold text-gray-800 mt-6">
        No Todos Yet
      </Text>

      <Text className="text-gray-500 text-center mt-3 leading-6">
        Start adding your daily tasks and stay productive.
      </Text>

    </View>
  );
};

export default EmptyState;