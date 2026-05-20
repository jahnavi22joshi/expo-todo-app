import { View, Text } from 'react-native';

const StatsCard = () => {
  return (
    <View className="bg-blue-500 mx-5 mt-6 p-5 rounded-2xl">
      <Text className="text-white text-lg font-bold">
        Today's Progress
      </Text>

      <Text className="text-blue-100 mt-2">
        Completed 2 out of 3 tasks
      </Text>
    </View>
  );
};

export default StatsCard;