import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import ProfileHeader from './components/ProfileHeader';
import SkillBadge from './components/SkillBadge';
import CustomButton from './components/CustomButton';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('profile');

  const skills = ['React', 'TypeScript', 'Figma'];

  const handlePress = () => {
    alert('Merci de me suivre !');
  };

  const themeStyles = isDarkMode ? darkTheme : lightTheme;

  const renderProfile = () => (
    <>
      <ProfileHeader isDarkMode={isDarkMode} />
      
      <Text style={[styles.sectionTitle, { color: themeStyles.textColor }]}>
        Mes compétences
      </Text>
      <View style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <SkillBadge key={index} title={skill} />
        ))}
      </View>

      <CustomButton title="Me suivre" onPress={handlePress} />
    </>
  );

  const renderPortfolio = () => (
    <View style={styles.pageContainer}>
      <Text style={[styles.pageTitle, { color: themeStyles.textColor }]}>
        Mon Portfolio
      </Text>
      <Text style={[styles.pageText, { color: themeStyles.textColor }]}>
        Découvrez mes projets créatifs et techniques.
      </Text>
    </View>
  );

  const renderContact = () => (
    <View style={styles.pageContainer}>
      <Text style={[styles.pageTitle, { color: themeStyles.textColor }]}>
        Me Contacter
      </Text>
      <Text style={[styles.pageText, { color: themeStyles.textColor }]}>
        Email: samar.jleli@devmobile.tn
      </Text>
      <Text style={[styles.pageText, { color: themeStyles.textColor }]}>
        Téléphone: +216 22 111 333
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: themeStyles.background }]}>
      <View style={[styles.header, { backgroundColor: themeStyles.headerBg }]}>
        <View style={styles.navContainer}>
          <TouchableOpacity onPress={() => setCurrentPage('profile')}>
            <Text style={[styles.navText, currentPage === 'profile' && styles.navActive]}>
              Profil
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentPage('portfolio')}>
            <Text style={[styles.navText, currentPage === 'portfolio' && styles.navActive]}>
              Portfolio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCurrentPage('contact')}>
            <Text style={[styles.navText, currentPage === 'contact' && styles.navActive]}>
              Contact
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, { color: themeStyles.textColor }]}>
            Thème Sombre
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: '#81b0ff', true: '#f5dd4b' }}
            thumbColor={isDarkMode ? '#f4f3f4' : '#767577'}
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {currentPage === 'profile' && renderProfile()}
          {currentPage === 'portfolio' && renderPortfolio()}
          {currentPage === 'contact' && renderContact()}
        </View>
      </ScrollView>
    </View>
  );
}

const lightTheme = {
  background: '#f8f9fa',
  headerBg: '#ffffff',
  textColor: '#212529',
};

const darkTheme = {
  background: '#121212',
  headerBg: '#1f1f1f',
  textColor: '#e0e0e0',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 45,
    paddingBottom: 18,
    paddingHorizontal: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  navText: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
  },
  navActive: {
    color: '#E91E63',
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  switchLabel: {
    fontSize: 14,
    marginRight: 10,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 35,
    paddingHorizontal: 18,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 14,
    marginTop: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 28,
  },
  pageContainer: {
    alignItems: 'center',
    width: '100%',
  },
  pageTitle: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  pageText: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
});