import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileHeader({ isDarkMode }) {
  const [profileData, setProfileData] = useState({
    name: 'Samar Jleli',
    image: require('../assets/profile.jpg'),
  });

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];
      
      setProfileData({
        name: `${user.name.first} ${user.name.last}`,
        image: { uri: user.picture.large },
      });
    } catch (error) {
      console.error('Erreur lors du chargement:', error);
    }
  };

  const textColor = isDarkMode ? '#fff' : '#212529';
  const bioColor = isDarkMode ? '#bbbbbb' : '#555';

  return (
    <View style={styles.container}>
      <Image 
        source={profileData.image}
        style={styles.profileImage}
      />
      <Text style={[styles.name, { color: textColor }]}>
        {profileData.name}
      </Text>
      <Text style={[styles.bio, { color: bioColor }]}>
        Développeuse frontend passionnée par React et le design moderne.
      </Text>
      
      <TouchableOpacity 
        style={styles.randomButton}
        onPress={fetchRandomUser}
      >
        <Text style={styles.randomButtonText}>
          Profil aléatoire
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 25,
    width: '100%',
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#E91E63',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 18,
    paddingHorizontal: 20,
  },
  randomButton: {
    backgroundColor: '#9C27B0',
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 22,
    marginTop: 8,
  },
  randomButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});