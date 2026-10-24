import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units Enrolled: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}
    </View>
  );
}

function StudentRoster() {
  const [students, setStudents] = useState([
    {
      id: 's1',
      name: 'Ana Cruz',
      course: 'IT313',
      units: 21,
      isFullLoad: true,
    },
    {
      id: 's2',
      name: 'Bea Santos',
      course: 'IT313',
      units: 15,
      isFullLoad: false,
    },
    {
      id: 's3',
      name: 'Cid Ramos',
      course: 'IT313',
      units: 18,
      isFullLoad: true,
    },
    {
      id: 's4',
      name: 'Dex Alonzo',
      course: 'IT313',
      units: 12,
      isFullLoad: false,
    },
  ]);

  const reverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>IT313 Student Roster</Text>

      <Text style={styles.count}>
        Total Students: {students.length}
      </Text>

      <View style={styles.button}>
        <Button
          title="Reverse Roster"
          onPress={reverseRoster}
        />
      </View>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

export default function App() {
  return <StudentRoster />;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#F2F5F9',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  count: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D5DCE5',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fullLoad: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 8,
  },
});
  
