import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo';
const DetailsScreen = (props) => {
    const [isCast, setIsCast] = useState(false);

    return (
        <View style={styles.container} >

            <ImageBackground style={{ height: "100%", justifyContent: "flex-end", }} source={require("../assets/1.jpeg")}>
                <View style={{
                    height: "55%",
                    borderTopLeftRadius: 24.0,
                    borderTopRightRadius: 24.0,
                    backgroundColor: "#262626",
                }}>
                    <AntDesign color="white" size={50} name="playcircleo" style={{ alignSelf: "flex-end", right: 24.0, bottom: "7%", position: "relative" }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 12.0 }}>
                        <Text style={{ color: "white", fontWeight: "700", marginLeft: 12.0, fontSize: 20 }}>Stranger Things</Text>
                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <Entypo color="yellow" size={20} name="star" />
                            <Entypo color="yellow" size={20} name="star" />
                            <Entypo color="yellow" size={20} name="star" />
                            <Entypo color="yellow" size={20} name="star" />
                            <Entypo color="white" size={20} name="star" />

                        </View>
                    </View>
                    <Text style={{ color: "grey", fontWeight: "700", marginLeft: 12.0, fontSize: 14, marginRight: 20.0, marginTop: 12.0 }}>In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => {
                            setIsCast(false);
                        }}>
                            <View>
                                <Text style={isCast == false ? styles.selectedText : styles.unselectedText}>Cast</Text>
                                {isCast == false
                                    ?
                                    <View style={{ alignSelf: "center", top: 6.2, backgroundColor: "#08E280", width: 40, height: 2, marginLeft: 12.0 }}>

                                    </View> : <View></View>

                                }
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setIsCast(true);
                        }}>
                            <View>
                                <Text style={isCast ? styles.selectedText : styles.unselectedText}>Episode</Text>
                                {isCast
                                    ?
                                    <View style={{ alignSelf: "center", top: 6.2, backgroundColor: "#08E280", width: 40, height: 2 }}>

                                    </View> : <View></View>

                                }
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: 24.0, marginHorizontal: 12.0, flexDirection: "row", justifyContent: "space-between" }}>
                        <Image style={styles.bottomImage} source={require("../assets/4.jpg")} />
                        <Image style={styles.bottomImage} source={require("../assets/5.jpg")} />
                        <Image style={styles.bottomImage} source={require("../assets/6.jpg")} />

                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({

    selectedText: { color: "white", fontWeight: "700", marginLeft: 12.0, fontSize: 18.0, marginTop: 12.0 },
    unselectedText: { color: "grey", fontWeight: "700", marginLeft: 12.0, fontSize: 18.0, marginTop: 12.0 },
    bottomImage: { height: 130, width: 100, borderRadius: 12 }

});

export default DetailsScreen;