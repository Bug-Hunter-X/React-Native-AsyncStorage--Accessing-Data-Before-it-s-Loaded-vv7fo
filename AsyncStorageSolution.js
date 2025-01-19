import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageSolution = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const getUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        setUsername(storedUsername);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };

    getUsername();
  }, []);

  if (username === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>Welcome, {username}!</Text>
    </View>
  );
};

export default AsyncStorageSolution;