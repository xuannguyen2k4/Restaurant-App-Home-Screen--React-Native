import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    { key: '1', image: require('../assets/img1/MainBanner.png') },
    { key: '2', image: require('../assets/img1/MainBanner.png') },
    { key: '3', image: require('../assets/img1/MainBanner.png') }
];

const HomeScreen = () => {
    const categories = [
        { image: require('../assets/img1/pizza.png'), color: '#29D697' },
        { image: require('../assets/img1/burger.png'), color: '#F5F5F5' },
        { image: require('../assets/img1/drink.png'), color: '#F5F5F5' },
        { image: require('../assets/img1/rice.png'), color: '#F5F5F5' },
    ];

    const popularItems = [
        { name: 'BURGER', image: require('../assets/img1/BurgerItem.png') },
        { name: 'PIZZA', image: require('../assets/img1/PizzaItem.png') },
    ];

    const renderCategory = ({ item }) => (
        <TouchableOpacity style={[styles.categoryButton, { backgroundColor: item.color }]}>
            <Image source={item.image} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderSlide = ({ item }) => (
        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <Image source={item.image} style={styles.slideImage} />
            <Text style={styles.slideTitle}>{item.title}</Text>
            <Text style={styles.slideText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <View style={styles.gradientOverlay} />
                    <View style={styles.header}>
                        <Image style={styles.profileImage} source={require('../assets/img1/avatar.png')} />
                        <View style={styles.locationContainer}>
                            <Text style={styles.locationLabel}>Your Location</Text>
                            <View style={styles.locationRow}>
                                <Image style={styles.bellIcon} source={require('../assets/img1/location.png')} />
                                <Text style={styles.location}>Savar, Dhaka</Text>
                            </View>
                        </View>
                        <View style={styles.bellContainer}>
                            <Image style={styles.bellIcon} source={require('../assets/img1/Bell.png')} />
                        </View>
                    </View>
                </View>

                <View style={styles.searchBarContainer}>
                    <Icon name="search" size={20} color="#fff" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search your food"
                        placeholderTextColor="#fff"
                    />
                    <Image style={styles.picture} source={require('../assets/img1/SearchBar.png')} />
                </View>

                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categories}
                />

                <AppIntroSlider
                    renderItem={renderSlide}
                    data={slides}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                    containerStyle={styles.sliderContainer}
                    onSkip={() => console.log('Skipped')}
                    onDone={() => console.log('Done')}
                />

                <View style={styles.popularItems}>
                    <View style={styles.popularHeader}>
                        <Text style={styles.popularTitle}>Popular Items</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.popularItemsRow}>
                        {popularItems.map((item, index) => (
                            <View key={index} style={styles.popularItemContainer}>
                                <Image source={item.image} style={styles.popularItemImage} />
                                <Text style={styles.popularItemName}>{item.name}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomNavigation}>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="home" size={24} color="#4CAF50" />
                    <Text style={styles.navText}>HOME</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="receipt" size={24} color="#888" />
                    <Text style={styles.navText}>ORDER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Icon name="person" size={24} color="#888" />
                    <Text style={styles.navText}>PROFILE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff'
    },
    headerContainer: {
        height: 150,  
        position: 'relative',
        overflow: 'hidden',
    },
    gradientOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(254, 255, 191, 1)',
        height: '100%',
        width: '100%',
        opacity: 0.8, 
        borderRadius: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1, 
    },
    profileImage: { 
        width: 50, 
        height: 50, 
        borderRadius: 20 
    },
    locationContainer: { 
        marginLeft: 40, 
        flex: 1 
    },
    locationLabel: { 
        fontSize: 12, 
        color: '#888', 
        marginHorizontal: 20 
    },
    locationRow: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    location: { 
        fontSize: 17, 
        fontWeight: 'bold', 
        marginLeft: 4 
    },
    searchBarContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: -20, 
        marginHorizontal: 15, 
        padding: 15, 
        backgroundColor: '#4A5CFF', 
        borderRadius: 30 
    },
    searchIcon: { 
        marginLeft: 8, 
        marginRight: 8,
    },
    searchBar: { 
        flex: 1, 
        color: '#fff' 
    },
    categories: { 
        marginVertical: 16
    },
    categoryButton: { 
        alignItems: 'center', 
        padding: 13, 
        borderRadius: 8, 
        width: 100, 
        height: 100, 
        marginLeft: 18,
    },
    categoryIcon: { 
        width: 50, 
        height: 50, 
        resizeMode: 'contain' 
    },
    categoryText: { 
        color: '#fff', 
        marginTop: 4, 
        fontSize: 10,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    slideImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10
    },
    slideTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 1,
    },
    slideText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    dotStyle: { 
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        width: 10, 
        height: 10, 
        borderRadius: 6, 
        marginHorizontal: 3 
    },
    activeDotStyle: { 
        backgroundColor: 'black', 
        width: 12, 
        height: 12, 
        borderRadius: 6, 
        marginHorizontal: 3 
    },
    popularHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, paddingHorizontal: 20, marginTop: -25 },
    popularTitle: { fontSize: 18, fontWeight: 'bold' },
    viewAllText: { color: '#4A5CFF' },
    popularItemsRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    popularItemContainer: { 
        marginRight: 12, 
        width: '48%', 
        alignItems: 'center'  // Center items horizontally
    },
    popularItemImage: { 
        width: '100%', 
        height: 150, 
        borderRadius: 12 
    },
    popularItemName: { 
        marginTop: 8, // Space between image and text
        fontSize: 16, 
        fontWeight: 'bold' 
    },
    bottomNavigation: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        borderTopWidth: 1, 
        borderTopColor: '#eee', 
        paddingVertical: 8 
    },
    navItem: { 
        alignItems: 'center' 
    },
    navText: { 
        fontSize: 12, 
        marginTop: 4 
    },
});

export default HomeScreen;
