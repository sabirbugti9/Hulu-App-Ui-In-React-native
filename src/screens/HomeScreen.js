import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeScreen = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "#262626" }}>
            <View>
                <View style={[styles.row, { marginTop: 12.0, marginHorizontal: 12.0 }]}>
                    <Ionicons name="md-filter-outline" color="#08E280" size={35} style={{ top: 6 }} />
                    <Text style={[styles.bottomDiscoverText, { color: "#08E280", fontWeight: "700" }]}>hulu</Text>
                    <Image style={{ height: 50, width: 50, borderRadius: 25 }} source={require("../assets/user.jpg")} />
                </View>
                <Image style={{ height: "40%", width: "95%", borderRadius: 12.0 }} source={require("../assets/avangers.png")} />
                <View style={[styles.row, { marginTop: 12.0, marginHorizontal: 12.0 }]}>
                    <Text style={[styles.bottomDiscoverText, { color: "white", fontWeight: "700", marginLeft: 0.0, fontSize: 20 }]}>Continue Watching</Text>
                    <Text style={[styles.bottomDiscoverText, { color: "grey", fontWeight: "700", fontSize: 14, top: 6.0 }]}>See All</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: 100 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        props.navigation.navigate("Details");
                    }}>
                        <View>
                            <Image style={{ height: 120, width: 250, margin: 12.0, borderRadius: 12.0 }} source={require("../assets/1.jpeg")} />
                            <View style={{ flexDirection: "row", width: "50%" }}>
                                <Text style={[styles.bottomDiscoverText, { color: "white", fontWeight: "700", marginLeft: 12.0, fontSize: 14 }]}>Stranger things</Text>
                                <Text style={[styles.bottomDiscoverText, { color: "#08E280", fontSize: 12, top: 2 }]}>  S1 E1</Text>

                            </View>
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Image style={{ height: 120, width: 250, margin: 12.0, borderRadius: 12.0 }} source={require("../assets/3.jpg")} />
                        <View style={{ flexDirection: "row", width: "50%" }}>
                            <Text style={[styles.bottomDiscoverText, { color: "white", fontWeight: "700", marginLeft: 12.0, fontSize: 14 }]}>The 100</Text>
                            <Text style={[styles.bottomDiscoverText, { color: "#08E280", fontSize: 12, top: 2 }]}>  S1 E1</Text>

                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={[styles.row, { marginTop: 12.0, marginHorizontal: 12.0 }]}>
                <Text style={[styles.bottomDiscoverText, { color: "white", fontWeight: "700", marginLeft: 0.0, fontSize: 20 }]}>Trendings Now</Text>
                <Text style={[styles.bottomDiscoverText, { color: "grey", fontWeight: "700", fontSize: 14, top: 6.0 }]}>See All</Text>
            </View>
            <View style={[styles.row, { marginTop: 12.0, marginHorizontal: 12.0 }]}>
                <Image style={styles.bottomImage} source={require("../assets/naruto.jpg")} />
                <Image style={styles.bottomImage} source={require("../assets/moneyhesit.jpg")} />
                <Image style={styles.bottomImage} source={require("../assets/Erugtrul.jpg")} />

            </View>


        </View>

    );
}

const styles = StyleSheet.create({

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomDiscoverText: {
        color: "#59616A",
        fontSize: 30,
        marginLeft: 17.0,
    },
    bottomImage: { height: 130, width: 100, borderRadius: 12 }

});

export default HomeScreen;
