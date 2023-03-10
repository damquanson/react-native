import React, { useEffect, useState,userRef } from 'react';
import { SafeAreaView, TextInput, View, Text, Pressable } from 'react-native';

export default function Login({ navigation }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {

    })

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Username</Text>
                <TextInput style={""} placeholder="Input Username" />
            </View>
            <View>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Password</Text>
                <TextInput style={""} placeholder="Input Password" />
            </View>
            <Pressable style={{
                backgroundColor: "blue",
                borderRadius: 8,
                padding: 6,
                width: 150,
                height: 40,
                alignItems: "center"
            }} onPress={() => {
                //alert("Read comment in LoginTest.js")
                //Code to check username and password
                //If yes uncomment this
                navigation.navigate("Otp")
                //and send OTP
                //If no, not test
            }}>
                <Text style={{ fontSize: 18, color: "white" }}>Login</Text>
            </Pressable>
        </SafeAreaView>
    )

}
