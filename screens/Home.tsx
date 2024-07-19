import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../AppNavigator';

const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onSurfingTabPress = () => {
    navigation.navigate('Surfing');
  };
  const onHomeTabPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={require('../assets/Home.png')}
          style={styles.backgroundImage}
          resizeMode="cover">
          <View style={styles.overlay} />
        </ImageBackground>
        <View style={styles.content}>
          <Image
            source={require('../assets/Highlights.png')}
            style={styles.highlightsTitleImage}
          />
          <ScrollView
            horizontal={true}
            style={styles.tilesContainer}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={onSurfingTabPress}>
              <View style={styles.tile}>
                <Image
                  source={require('../assets/Tile1.png')}
                  style={styles.tileImage}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.tile}>
              <Image
                source={require('../assets/Tile2.png')}
                style={styles.tileImage}
              />
            </View>
            <View style={styles.tile}>
              <Image
                source={require('../assets/Tile3.png')}
                style={styles.tileImage}
              />
            </View>
          </ScrollView>
          <View style={styles.categoriesSectionContainer}>
            <View style={styles.categoriesSection}>
              <Text style={styles.categoriesTitle}>Categories</Text>
              {['Adventure', 'Culinary', 'Eco-tourism', 'Family', 'Sport'].map(
                category => (
                  <TouchableOpacity key={category} style={styles.categoryItem}>
                    <Text style={styles.categoryText}>{category}</Text>
                    <Text style={styles.categoryArrow}>➔</Text>
                  </TouchableOpacity>
                ),
              )}
            </View>
          </View>
          <View style={styles.guideSection}>
            <Text style={styles.guideTitle}>Travel Guide</Text>
            <View style={styles.guideCard}>
              <View style={styles.guideInfo}>
                <Text style={styles.guideName}>Hadwin Malone</Text>
                <Text style={styles.guideDescription}>Guide since 2012</Text>
                <TouchableOpacity style={styles.contactButton}>
                  <Text style={styles.contactButtonText}>Contact</Text>
                </TouchableOpacity>
              </View>
              <Image
                source={require('../assets/guide.png')}
                style={styles.guideImage}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.tripButton}>
        <Text style={styles.tripButtonText}>Book a trip</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={onHomeTabPress}>
          <Image
            source={require('../assets/Icon.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerItemTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={onSurfingTabPress}>
          <Image
            source={require('../assets/surfing.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerItemText}>Surfing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image
            source={require('../assets/nightlife.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerItemText}>Hula</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image
            source={require('../assets/filter_hdr.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerItemText}>Volcano</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  scrollContent: {
    paddingBottom: 160, // Ensure space for the button and footer
    backgroundColor: '#f0f4f7', // Ensure background color to match the rest of the content
  },
  backgroundImage: {
    width: '100%',
    height: 600, // Set a fixed height to ensure the entire image is visible
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff', // Ensure background color to prevent overlay issues
  },
  highlightsTitleImage: {
    width: '100%',
    height: 20, // Adjust the height as needed
    resizeMode: 'contain',
    marginBottom: 10,
    marginLeft: '-30%',
  },
  tilesContainer: {
    flexDirection: 'row',
  },
  tile: {
    width: 200, // Adjust width as needed
    height: 300, // Adjust height as needed
    marginRight: 15,
  },
  tileImage: {
    width: '100%',
    height: '90%',
    borderRadius: 15,
    margin: '5%',
    resizeMode: 'cover',
  },
  categoriesSectionContainer: {
    width: '110%',
    marginLeft: '-5%',
    backgroundColor: '#f0f4f7', // Add background color to match screenshot
  },
  categoriesSection: {
    padding: 20,
  },
  categoriesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 18,
  },
  categoryArrow: {
    fontSize: 18,
    color: '#007b5e',
  },
  guideSection: {
    backgroundColor: '#f0f4f7',
    padding: 20,
    marginLeft: '-5%',
    marginBottom: 130,
    width: '110%',
    borderRadius: 10,
  },
  guideTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  guideCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    height: '35%',
    borderRadius: 10,
  },
  guideInfo: {
    flex: 1,
  },
  guideName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  guideDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  contactButton: {
    borderColor: '#007b5e',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '30%',
  },
  contactButtonText: {
    color: '#007b5e',
    fontSize: 16,
  },
  guideImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  tripButton: {
    position: 'absolute',
    bottom: 80, // Adjusted to make space for the footer
    left: 20,
    right: 20,
    backgroundColor: '#007b5e',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  tripButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 15,
    height: 15,
    marginBottom: 5,
  },
  footerItemText: {
    fontSize: 12,
    color: '#000',
  },
  footerItemTextActive: {
    fontSize: 12,
    color: '#007b5e',
  },
});

export default Home;
