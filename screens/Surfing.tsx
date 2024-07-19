import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../AppNavigator';

const Surfing = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onHomeTabPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require('../assets/Surf.png')}
          style={styles.backgroundImage}
        />
        <Text style={styles.title}></Text>
        <Text style={styles.description}>
          Hawaii is the capital of modern surfing. This group of Pacific islands
          gets swell from all directions, so there are plenty of pristine surf
          spots for all.
        </Text>
        <Text style={styles.subTitle}>Top spots</Text>
        <View style={styles.spots}>
          <View style={styles.spot}>
            <Text style={styles.spotTitle}>1. Maui</Text>
            <Image
              source={require('../assets/spot1.png')}
              style={styles.spotImage}
            />
          </View>
          <View style={styles.spot}>
            <Text style={styles.spotTitle}>2. Kauai</Text>
            <Image
              source={require('../assets/spot1.png')}
              style={styles.spotImage}
            />
          </View>
          <View style={styles.spot}>
            <Text style={styles.spotTitle}>3. Honolulu</Text>
            <Image
              source={require('../assets/spot1.png')}
              style={styles.spotImage}
            />
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
          <Text style={styles.footerItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image
            source={require('../assets/surfing.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerItemTextActive}>Surfing</Text>
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
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 160, // Ensure space for the button and footer
  },
  backgroundImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    margin: 5,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  spots: {
    margin: 20,
  },
  spot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  spotTitle: {
    fontSize: 18,
  },
  spotImage: {
    width: 100,
    height: 60,
    borderRadius: 10,
  },
  guideSection: {
    backgroundColor: '#f0f4f7',
    padding: 20,
    marginTop: 20,
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
    width: 30,
    height: 30,
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

export default Surfing;
