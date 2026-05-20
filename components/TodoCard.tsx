import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';


interface Props {
    title: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low';
    completed: boolean;

    onDelete: () => void;
    onEdit: () => void;
    onToggle: () => void;
}

const TodoCard = ({
    title,
    description,
    priority,
    completed,
    onDelete,
    onEdit,
    onToggle,
}: Props) => {

    const priorityColors = {
        High: 'bg-red-100 text-red-600',
        Medium: 'bg-yellow-100 text-yellow-700',
        Low: 'bg-green-100 text-green-600',
    };

    const renderRightActions = () => {
        return (

            <View className="flex-row mt-4 mr-5">

                {/* EDIT */}
                <TouchableOpacity
                    onPress={onEdit}
                    className="bg-blue-500 justify-center items-center px-5 rounded-l-2xl"
                >
                    <Ionicons
                        name="create-outline"
                        size={26}
                        color="white"
                    />

                    <Text className="text-white font-semibold mt-1">
                        Edit
                    </Text>
                </TouchableOpacity>

                {/* DELETE */}
                <TouchableOpacity
                    onPress={onDelete}
                    className="bg-red-500 justify-center items-center px-5 rounded-r-2xl"
                >
                    <Ionicons
                        name="trash-outline"
                        size={26}
                        color="white"
                    />

                    <Text className="text-white font-semibold mt-1">
                        Delete
                    </Text>
                </TouchableOpacity>

            </View>
        );
    };
    return (
        <Swipeable
            renderRightActions={renderRightActions}
        >
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onToggle}
                className="bg-white mx-5 mt-4 p-5 rounded-2xl"
            >

                <View className="flex-row justify-between items-start">

                    <View className="flex-1 pr-4">

                        <Text
                            className={`text-lg font-bold ${completed
                                ? 'line-through text-gray-400'
                                : 'text-black'
                                }`}
                        >
                            {title}
                        </Text>

                        <Text
                            className={`mt-2 leading-6 ${completed
                                ? 'text-gray-400'
                                : 'text-gray-600'
                                }`}
                        >
                            {description}
                        </Text>



                    </View>

                    <View className="items-center">

                        <Text
                            className={`self-start px-3 py-1 rounded-full text-xs font-bold ${priorityColors[priority]
                                }`}
                        >
                            {priority}
                        </Text>

                    </View>

                </View>

            </TouchableOpacity>
        </Swipeable>

    );
};

export default TodoCard;