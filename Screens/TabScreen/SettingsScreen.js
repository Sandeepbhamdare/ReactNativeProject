import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../public/icons/icon_back.png')} />
                <Text style={styles.text_header}>setting</Text>
            </View>

            <ScrollView>

                <View style={styles.listContainer}>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_name.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>Name</Text>
                            <Text style={styles.smallText}>Antonio Perez</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_email.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>Email</Text>
                            <Text style={styles.smallText}>antonio@email.com</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_pw.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>Password</Text>
                            <Text style={styles.smallText}>updated 2 weeks ago</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_phone.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>Phone Number</Text>
                            <Text style={styles.smallText}>Antonio Perez</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_score.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>Scoreboard</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_new.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>New Courses</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_study.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>Study Reminder</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_score.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>Help Center</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_new.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>Privacy & Terms</Text>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <Image source={require('../../public/icons/icon_study.png')} style={styles.icon} />
                        <View >
                            <Text style={styles.largeText}>Contact Us</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.logoutBtn}>Log out</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171531"
    },
    header: {
        flexDirection: "row",
        padding: 10,
        width: "100%",
        height: 60,
        alignItems: "center"
    },
    text_header: {
        fontSize: 20,
        color: "#ffffff",
        fontWeight: '700',
        textAlign: "center",
        flex: 1
    },
    listContainer: {
        marginVertical: 5,
        width: "85%",
        padding: 25,
        backgroundColor: "#231f47",
        alignSelf: "center",
        borderRadius: 15,
        gap: 25
    },
    listItem: {
        flexDirection: "row",
        gap: 20,
    },
    largeText: {
        fontSize: 20,
        color: "#ffffff",
        fontWeight: '700',
    },
    smallText: {
        fontSize: 14,
        opacity: 0.6,
        color: "#ffffff",
        fontWeight: '400'
    },
    icon: {
        width: "15%",
        height: 40,
        resizeMode: "stretch"
    },
    logoutBtn: {
        fontSize: 16,
        letterSpacing: 1,
        lineHeight: 22,
        textTransform: 'uppercase',
        color: "#5468ff",
        fontWeight: '700',
        textAlign: 'center',
        marginVertical:25
    }
})