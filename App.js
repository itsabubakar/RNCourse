import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputConc}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder='Your course goal!' />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <Text style={styles.goalItem}>{itemData.item.text}</Text>
            )
          }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputConc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});
