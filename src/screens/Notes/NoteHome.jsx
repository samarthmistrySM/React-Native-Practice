import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BottomTabBar from '../../components/Notes/BottomTabBar';
import Header from '../../components/Notes/Header';

const NoteHome = () => {
  const navigtaion = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{}}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            maxHeight: '81%',
            width: '100%',
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 38,
                  color: '#fff',
                  fontWeight: 600,
                }}>
                Hello,
              </Text>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 38,
                  color: '#fff',
                  fontWeight: 600,
                }}>
                Derek Doyle
              </Text>
            </View>
            <Image
              style={{
                tintColor: '#fff',
                width: 30,
                height: 30,
                marginRight: 30,
              }}
              source={require('../../assets/humidity.png')}
            />
          </View>

          <ScrollView
            style={{marginTop: 20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Text style={[styles.scrollText, {color: '#fff'}]}>All types</Text>
            <Text style={styles.scrollText}>Daily</Text>
            <Text style={styles.scrollText}>Important</Text>
            <Text style={styles.scrollText}>Done</Text>
            <Text style={styles.scrollText}>Backlogs</Text>
            <Text style={[styles.scrollText]}>All types</Text>
            <Text style={styles.scrollText}>Daily</Text>
            <Text style={styles.scrollText}>Important</Text>
            <Text style={styles.scrollText}>Done</Text>
            <Text style={styles.scrollText}>Backlogs</Text>
          </ScrollView>

          <ScrollView
            style={{marginTop: 20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.noteContainer}>
              <Image
                style={styles.noteBg}
                source={require('../../assets/bg.png')}
              />
              <Text style={styles.noteText}>Html, Welcome form</Text>
              <Image
                style={styles.signature}
                source={require('../../assets/hax.png')}
              />
            </View>
            <View style={styles.noteContainer}>
              <Image
                style={styles.noteBg}
                source={require('../../assets/bg.png')}
              />
              <Text style={styles.noteText}>Css, Welcome form</Text>
              <Image
                style={styles.signature}
                source={require('../../assets/hax.png')}
              />
            </View>
            <View style={styles.noteContainer}>
              <Image
                style={styles.noteBg}
                source={require('../../assets/bg.png')}
              />
              <Text style={styles.noteText}>Js, Welcome form</Text>
              <Image
                style={styles.signature}
                source={require('../../assets/hax.png')}
              />
            </View>
            <View style={styles.noteContainer}>
              <Image
                style={styles.noteBg}
                source={require('../../assets/bg.png')}
              />
              <Text style={styles.noteText}>Js, Welcome form</Text>
              <Image
                style={styles.signature}
                source={require('../../assets/hax.png')}
              />
            </View>
            <View style={styles.noteContainer}>
              <Image
                style={styles.noteBg}
                source={require('../../assets/bg.png')}
              />
              <Text style={styles.noteText}>Html, Welcome form</Text>
              <Image
                style={styles.signature}
                source={require('../../assets/hax.png')}
              />
            </View>
          </ScrollView>

          <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,alignItems:'center',paddingHorizontal:5}}>
              <Text style={{color:'#fff',fontSize:30,}}>Favourites</Text>
              <Text style={{color:'#007AFF',fontSize:20}}>See All</Text>
            </View>

            <View>
              <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#333',padding:10,borderRadius: 13,marginTop:10,}}>
                <Image style={{width:50,height:50,borderRadius:15,}} source={require("../../assets/char.png")}/>
                <Text style={{color:'#fff',alignSelf:'flex-end'}}>5 min ago</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#333',padding:10,borderRadius: 13,marginTop:10,}}>
                <Image style={{width:50,height:50,borderRadius:15,}} source={require("../../assets/char.png")}/>
                <Text style={{color:'#fff',alignSelf:'flex-end'}}>5 min ago</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#333',padding:10,borderRadius: 13,marginTop:10,}}>
                <Image style={{width:50,height:50,borderRadius:15,}} source={require("../../assets/char.png")}/>
                <Text style={{color:'#fff',alignSelf:'flex-end'}}>5 min ago</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomTabBar />
    </SafeAreaView>
  );
};

export default NoteHome;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    height: '100%',
    justifyContent: 'space-between',
    position: 'relative',
  },
  scrollText: {
    color: 'gray',
    paddingRight: 40,
  },
  noteContainer: {
    width: 180,
    height: 200,
    backgroundColor: '#333',
    borderRadius: 15,
    position: 'relative',
    marginRight:15,
  },
  noteBg: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  noteText: {padding: 10, fontSize: 19, color: '#fff', marginTop: 25},
  signature: {width: 50, height: 50, position: 'absolute', top: '40%', left: 5},
});
