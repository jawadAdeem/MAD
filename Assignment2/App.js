import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, TextInput, Button,
  TouchableOpacity,
} from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <Text><h1>Log in to Upwork</h1></Text>
      <View style={{ padding: 10 }}>
        <TextInput style={{
          height: 40, width: 400, fontSize: 20,
          textAlign: "center"
        }} placeholder="Username or Email" />
        <View style={{ width: 400, height: 100, marginTop: 10, }}>
          <TouchableOpacity style={{ borderRadius: 80 }}>
            <Button
              onPress={() => {
                alert('You have sucessfull login in!');
              }}
              title="Continue with Email"
              color={'green'}
            >

            </Button>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.textRegister}> ────────  or  ────────
        </Text>
      </View>
      <View style={{ width: 400, height: 100, marginTop: 10, }}>
        <TouchableOpacity style={{ borderRadius: 40 }}>
          <Button
            onPress={() => {
              alert('Google!');
            }}
            title="Continue with Google"
            color={'blue'}
          >
          </Button>
        </TouchableOpacity>
      </View>
      <View style={{ width: 400, height: 100, marginTop: 10, }}>
        <TouchableOpacity style={{ borderRadius: 40 }}>
          <Button
            onPress={() => {
              alert('Apple Id!');
            }}
            title="Continue with Apple"
            textc
            color={'silver'}
          >
          </Button>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textRegister}> ────────  don't have an upwork account  ────────
        </Text>
      </View>
      <View style={{ width: 400, height: 100, marginTop: 10, }}>
        <TouchableOpacity style={{ borderRadius: 40, }}>
          <Button
            onPress={() => {
              alert('Register yourself!');
            }}
            title="Sign up"
            color={'silver'}
          >
          </Button>
        </TouchableOpacity>
      </View>
    </View >
  )



}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "silver",
    alignSelf: "center",
  },
});
