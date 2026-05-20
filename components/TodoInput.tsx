import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const TodoInput = () => {
  return (
    <View className="flex-row items-center px-5 mt-5">
      <TextInput
        placeholder="Add new todo..."
        className="flex-1 bg-gray-100 rounded-xl px-4 py-4 text-base"
      />

      <TouchableOpacity
        className="bg-blue-500 ml-3 px-5 py-4 rounded-xl"
      >
        <Text className="text-white font-semibold">
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;