/* ToDo using useState */
// import React, { useState } from 'react';
// import {
//     Alert,
//     FlatList,
//     Modal,
//     Platform,
//     Text,
//     TextInput,
//     ToastAndroid,
//     TouchableOpacity,
//     View,
// } from 'react-native';

// import Header from '../components/Header';
// import TodoCard from '../components/TodoCard';

// interface Todo {
//     id: number;
//     title: string;
//     description: string;
//     priority: 'High' | 'Medium' | 'Low';
//     completed: boolean;
// }

// const HomeScreen = () => {
//     const [todos, setTodos] = useState<Todo[]>([]);

//     const [modalVisible, setModalVisible] = useState(false);

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');

//     const [priority, setPriority] = useState<
//         'High' | 'Medium' | 'Low'
//     >('Medium');

//     const [editingId, setEditingId] = useState<number | null>(null);

//     const resetForm = () => {
//         setTitle('');
//         setDescription('');
//         setPriority('Medium');
//         setEditingId(null);
//         setModalVisible(false);
//     };

//     // ADD TODO
//     const handleAddTodo = () => {

//         if (!title.trim()) return;

//         const newTodo: Todo = {
//             id: Date.now(),
//             title,
//             description,
//             priority,
//             completed: false,
//         };

//         setTodos((prev) => [newTodo, ...prev]);

//         showToast('Task Added Successfully ✅');

//         resetForm();
//     };

//     const handleDeleteTodo = (id: number) => {

//         Alert.alert(
//             'Delete Task',
//             'Are you sure you want to delete this task?',
//             [
//                 {
//                     text: 'Cancel',
//                     style: 'cancel',
//                 },

//                 {
//                     text: 'Delete',
//                     style: 'destructive',

//                     onPress: () => {

//                         setTodos((prev) =>
//                             prev.filter((todo) => todo.id !== id)
//                         );

//                         showToast('Task Deleted 🗑️');
//                     },
//                 },
//             ]
//         );
//     };

//     const handleToggleComplete = (id: number) => {

//         setTodos((prev) =>
//             prev.map((todo) =>
//                 todo.id === id
//                     ? {
//                         ...todo,
//                         completed: !todo.completed,
//                     }
//                     : todo
//             )
//         );
//     };

//     const handleEditTodo = (todo: Todo) => {

//         setTitle(todo.title);
//         setDescription(todo.description);
//         setPriority(todo.priority);

//         setEditingId(todo.id);

//         setModalVisible(true);
//     };

//     const handleUpdateTodo = () => {

//         setTodos((prev) =>
//             prev.map((todo) =>
//                 todo.id === editingId
//                     ? {
//                         ...todo,
//                         title,
//                         description,
//                         priority,
//                     }
//                     : todo
//             )
//         );

//         showToast('Task Updated Successfully ✨');


//         resetForm();
//     };

//     const showToast = (message: string) => {

//         if (Platform.OS === 'android') {
//             ToastAndroid.show(message, ToastAndroid.SHORT);
//         } else {
//             Alert.alert(message);
//         }

//     };

//     return (
//         <View className="flex-1 bg-gray-100">

//             <Header />

//             {/* ADD BUTTON */}
//             <TouchableOpacity
//                 onPress={() => setModalVisible(true)}
//                 className="bg-blue-500 mx-5 mt-5 py-4 rounded-2xl items-center"
//             >
//                 <Text className="text-white font-bold text-base">
//                     + Add Task
//                 </Text>
//             </TouchableOpacity>

//             {/* TODO LIST */}
//             <FlatList
//                 data={todos}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <TodoCard
//                         title={item.title}
//                         description={item.description}
//                         priority={item.priority}
//                         completed={item.completed}

//                         onDelete={() =>
//                             handleDeleteTodo(item.id)
//                         }

//                         onEdit={() =>
//                             handleEditTodo(item)
//                         }

//                         onToggle={() =>
//                             handleToggleComplete(item.id)
//                         }
//                     />
//                 )}
//             />

//             {/* MODAL */}
//             <Modal
//                 visible={modalVisible}
//                 transparent
//                 animationType="slide"

//             >
//                 <View className="flex-1 justify-end bg-black/40"
//                     style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>

//                     <View className="bg-white p-6 rounded-t-3xl">

//                         <Text className="text-2xl font-bold mb-5">
//                             Create Task
//                         </Text>

//                         {/* TITLE */}

//                         <TextInput
//                             placeholder="Task Title"
//                             value={title}
//                             onChangeText={setTitle}
//                             className="bg-gray-100 p-4 rounded-xl text-base"
//                             style={{ marginBottom: 16 }}
//                         />

//                         {/* DESCRIPTION */}
//                         <TextInput
//                             placeholder="Task Description"
//                             value={description}
//                             onChangeText={setDescription}
//                             multiline
//                             numberOfLines={4}
//                             textAlignVertical="top"
//                             className="bg-gray-100 p-4 rounded-xl text-base"
//                             style={{ marginBottom: 16 }}
//                         />

//                         {/* PRIORITY */}
//                         <Text className="text-base font-semibold" style={{ marginBottom: 6 }}>
//                             Select Priority
//                         </Text>

//                         <View
//                             className="flex-row justify-between"
//                             style={{ marginBottom: 12 }}
//                         >
//                             {['High', 'Medium', 'Low'].map((item) => (
//                                 <TouchableOpacity
//                                     key={item}
//                                     onPress={() =>
//                                         setPriority(
//                                             item as 'High' | 'Medium' | 'Low'
//                                         )
//                                     }
//                                     className={`px-5 py-5 rounded-xl items-center justify-center ${priority === item
//                                         ? 'bg-blue-500'
//                                         : 'bg-gray-200'
//                                         }`}
//                                 >
//                                     <Text
//                                         className={`text-base font-semibold ${priority === item
//                                             ? 'text-white'
//                                             : 'text-black'
//                                             }`}
//                                     >
//                                         {item}
//                                     </Text>
//                                 </TouchableOpacity>
//                             ))}
//                         </View>

//                         {/* BUTTONS */}
//                         <View className="flex-row px-2 mt-2">

//                             <TouchableOpacity
//                                 onPress={() => setModalVisible(false)}
//                                 className="bg-gray-200 py-4 rounded-xl flex-1 items-center"
//                                 style={{ marginRight: 8 }}
//                             >
//                                 <Text className="font-semibold">
//                                     Cancel
//                                 </Text>
//                             </TouchableOpacity>

//                             <TouchableOpacity
//                                 onPress={
//                                     editingId
//                                         ? handleUpdateTodo
//                                         : handleAddTodo
//                                 }
//                                 className="bg-blue-500 py-4 rounded-xl flex-1 items-center"
//                             >
//                                 <Text className="text-white font-semibold">
//                                     {editingId ? 'Update Task' : 'Save Task'}
//                                 </Text>
//                             </TouchableOpacity>

//                         </View>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// export default HomeScreen;

/* ToDo using AsyncStorage */

import React, { useEffect, useState } from 'react';

import {
  Alert,
  FlatList,
  Modal,
  Platform,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import TodoCard from '../components/TodoCard';

interface Todo {
  id: number;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

const HomeScreen = () => {

  // TODOS
  const [todos, setTodos] = useState<Todo[]>([]);

  // MODAL
  const [modalVisible, setModalVisible] = useState(false);

  // FORM
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [priority, setPriority] = useState<
    'High' | 'Medium' | 'Low'
  >('Medium');

  // EDIT
  const [editingId, setEditingId] =
    useState<number | null>(null);

  // LOAD TODOS
  useEffect(() => {
    loadTodos();
  }, []);

  // TOAST
  const showToast = (message: string) => {

    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert(message);
    }

  };

  // SAVE TODOS
  const saveTodos = async (
    updatedTodos: Todo[]
  ) => {

    try {

      await AsyncStorage.setItem(
        'TODOS',
        JSON.stringify(updatedTodos)
      );

    } catch (error) {
      console.log(error);
    }

  };

  // LOAD TODOS
  const loadTodos = async () => {

    try {

      const storedTodos =
        await AsyncStorage.getItem('TODOS');

      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }

    } catch (error) {
      console.log(error);
    }

  };

  // RESET FORM
  const resetForm = () => {

    setTitle('');
    setDescription('');
    setPriority('Medium');

    setEditingId(null);

    setModalVisible(false);

  };

  // ADD TODO
  const handleAddTodo = async () => {

    if (!title.trim()) {
      showToast('Please Enter Title');
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    };

    const updatedTodos = [
      newTodo,
      ...todos,
    ];

    setTodos(updatedTodos);

    await saveTodos(updatedTodos);

    showToast('Task Added Successfully ✅');

    resetForm();

  };

  // DELETE TODO
  const handleDeleteTodo = (id: number) => {

    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'Delete',
          style: 'destructive',

          onPress: async () => {

            const updatedTodos =
              todos.filter(
                (todo) => todo.id !== id
              );

            setTodos(updatedTodos);

            await saveTodos(updatedTodos);

            showToast('Task Deleted 🗑️');

          },
        },
      ]
    );

  };

  // TOGGLE COMPLETE
  const handleToggleComplete = async (
    id: number
  ) => {

    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );

    setTodos(updatedTodos);

    await saveTodos(updatedTodos);

    showToast('Task Status Updated ✅');

  };

  // EDIT TODO
  const handleEditTodo = (todo: Todo) => {

    setTitle(todo.title);

    setDescription(todo.description);

    setPriority(todo.priority);

    setEditingId(todo.id);

    setModalVisible(true);

  };

  // UPDATE TODO
  const handleUpdateTodo = async () => {

    const updatedTodos = todos.map((todo) =>
      todo.id === editingId
        ? {
            ...todo,
            title,
            description,
            priority,
          }
        : todo
    );

    setTodos(updatedTodos);

    await saveTodos(updatedTodos);

    showToast('Task Updated Successfully ✨');

    resetForm();

  };

  return (
    <View className="flex-1 bg-gray-100">

      {/* HEADER */}
      <Header />

      {/* ADD BUTTON */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-blue-500 mx-5 mt-5 py-4 rounded-2xl items-center"
      >
        <Text className="text-white font-bold text-base">
          + Add Task
        </Text>
      </TouchableOpacity>

      {/* TODO LIST */}
      <FlatList
        data={todos}
        keyExtractor={(item) =>
          item.id.toString()
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        renderItem={({ item }) => (
          <TodoCard
            title={item.title}
            description={item.description}
            priority={item.priority}
            completed={item.completed}
            onDelete={() =>
              handleDeleteTodo(item.id)
            }
            onEdit={() =>
              handleEditTodo(item)
            }
            onToggle={() =>
              handleToggleComplete(item.id)
            }
          />
        )}
        ListEmptyComponent={
          <View className="items-center mt-32">

            <Text className="text-2xl font-bold text-gray-700">
              No Todos Yet
            </Text>

            <Text className="text-gray-500 mt-2">
              Tap on Add Task to create one
            </Text>

          </View>
        }
      />

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
      >
        <View
          className="flex-1 justify-end"
          style={{
            backgroundColor:
              'rgba(0,0,0,0.4)',
          }}
        >

          <View className="bg-white p-6 rounded-t-3xl">

            {/* INDICATOR */}
            <View className="w-16 h-1.5 bg-gray-300 self-center rounded-full mb-5" />

            <Text className="text-2xl font-bold mb-5">

              {editingId
                ? 'Update Task'
                : 'Create Task'}

            </Text>

            {/* TITLE */}
            <TextInput
              placeholder="Task Title"
              value={title}
              onChangeText={setTitle}
              className="bg-gray-100 p-4 rounded-xl text-base"
              style={{ marginBottom: 16 }}
            />

            {/* DESCRIPTION */}
            <TextInput
              placeholder="Task Description"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              className="bg-gray-100 p-4 rounded-xl text-base"
              style={{
                marginBottom: 16,
                height: 120,
              }}
            />

            {/* PRIORITY */}
            <Text
              className="text-base font-semibold"
              style={{ marginBottom: 6 }}
            >
              Select Priority
            </Text>

            <View
              className="flex-row justify-between"
              style={{ marginBottom: 16 }}
            >

              {['High', 'Medium', 'Low'].map(
                (item) => (

                  <TouchableOpacity
                    key={item}
                    onPress={() =>
                      setPriority(
                        item as
                          | 'High'
                          | 'Medium'
                          | 'Low'
                      )
                    }
                    className={`px-5 py-5 rounded-xl items-center justify-center ${
                      priority === item
                        ? 'bg-blue-500'
                        : 'bg-gray-200'
                    }`}
                  >

                    <Text
                      className={`text-base font-semibold ${
                        priority === item
                          ? 'text-white'
                          : 'text-black'
                      }`}
                    >
                      {item}
                    </Text>

                  </TouchableOpacity>

                )
              )}

            </View>

            {/* BUTTONS */}
            <View className="flex-row px-2 mt-2">

              <TouchableOpacity
                onPress={resetForm}
                className="bg-gray-200 py-4 rounded-xl flex-1 items-center"
                style={{ marginRight: 8 }}
              >

                <Text className="font-semibold">
                  Cancel
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                onPress={
                  editingId
                    ? handleUpdateTodo
                    : handleAddTodo
                }
                className="bg-blue-500 py-4 rounded-xl flex-1 items-center"
              >

                <Text className="text-white font-semibold">

                  {editingId
                    ? 'Update Task'
                    : 'Save Task'}

                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>
      </Modal>

    </View>
  );
};

export default HomeScreen;