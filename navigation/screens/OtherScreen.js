import React, { useState , useEffect} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView, 
} from 'react-native';
import { Provider as PaperProvider, Button, List, IconButton, Avatar, Appbar, DefaultTheme, TextInput } from "react-native-paper";
import Counter from '../../components/Counter';
import CounterRow from '../../components/CounterRow';
import * as StorageHandler from "../../StorageHandler";
import SectionTitle from '../../components/SectionTitle';

const theme = {
    ...DefaultTheme,
    //roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4DB6AC',
        accent: '#FFFFFF',
    },
};

export default function OtherScreen({ navigation }) {
    const [errorText1, setErrorText1] = React.useState("");
    const [errorText2, setErrorText2] = React.useState("");
    const [errorText3, setErrorText3] = React.useState("");
    const [errorText4, setErrorText4] = React.useState("");

    function saveComment(storageKey, text) {
        StorageHandler.storeStringData(storageKey, text);
    }

    async function setToInitalSavedValues() {

        const errorText1 = await StorageHandler.getData("OTHER_ERROR_TEXT_1");
        const errorText2 = await StorageHandler.getData("OTHER_ERROR_TEXT_2");
        const errorText3 = await StorageHandler.getData("OTHER_ERROR_TEXT_3");
        const errorText4 = await StorageHandler.getData("OTHER_ERROR_TEXT_4");
    
        if (errorText1 != null) {
            setErrorText1(errorText1);
        }
    
        if (errorText2 != null) {
            setErrorText2(errorText2);
        }
    
        if (errorText3 != null) {
            setErrorText3(errorText3);
        }
    
        if (errorText4 != null) {
            setErrorText4(errorText4);
        }
    }

    useEffect(() => {
        setToInitalSavedValues();
    }, []);

    return (
        <PaperProvider theme={theme}>
            <ScrollView>
                <SectionTitle name="Other"></SectionTitle>
                <List.Section>

                <CounterRow 
                    title="Engine Not On"
                    icon={require("../../assets/brakeLights.png")}
                    storageKey="OTHER_ERROR_ENGINE_NOT_ON"
                />

                <CounterRow 
                    title="Parking Brake"
                    icon={require("../../assets/brakeLights.png")}
                    storageKey="OTHER_ERROR_PARKING_BRAKE"
                />

                <CounterRow 
                    title="Concentration"
                    icon={require("../../assets/brakeLights.png")}
                    storageKey="OTHER_ERROR_CONCENTRATION"
                />

                <CounterRow 
                    title="Judgement"
                    icon={require("../../assets/brakeLights.png")}
                    storageKey="OTHER_ERROR_JUDGEMENT"
                />

                <CounterRow 
                    title="Mindful of Signals"
                    icon={require("../../assets/brakeLights.png")}
                    storageKey="OTHER_ERROR_MINDFUL_OF_SIGNALS"
                />

                <CounterRow 
                    title="Off Course"
                    icon={require("../../assets/car-traction-control.png")}
                    storageKey="OTHER_ERROR_OFF_COURSE"
                />

                <CounterRow 
                    title="Late Reaction to Hazards"
                    icon={require("../../assets/exclamationpoint.png")}
                    storageKey="OTHER_ERROR_LATE_REACTION_TO_HAZARDS"
                />

                <Text style={styles.title}>Error 1</Text>
                <View style={styles.row}>
                    <TextInput
                    editable
                    multiline
                    style={styles.input}
                    value={errorText1}
                    onChangeText={(text) => {setErrorText1(text); saveComment("OTHER_ERROR_TEXT_1", text);}}
                    />
                    <Counter storageKey="OTHER_COUNTER_1" maxValue={4}/>
                </View>
                <View style={styles.divider}></View>

                <Text style={styles.title}>Error 2</Text>
                <View style={styles.row}>
                    <TextInput
                    editable
                    multiline
                    style={styles.input}
                    value={errorText2}
                    onChangeText={(text) => {setErrorText2(text); saveComment("OTHER_ERROR_TEXT_2", text);}}
                    />
                    <Counter storageKey="OTHER_COUNTER_2" maxValue={4}/>
                </View>
                <View style={styles.divider}></View>

                <Text style={styles.title}>Error 3</Text>
                <View style={styles.row}>
                    <TextInput
                    editable
                    multiline
                    style={styles.input}
                    value={errorText3}
                    onChangeText={(text) => {setErrorText3(text); saveComment("OTHER_ERROR_TEXT_3", text);}}
                    />
                    <Counter storageKey="OTHER_COUNTER_3" maxValue={4}/>
                </View>
                <View style={styles.divider}></View>

                <Text style={styles.title}>Error 4</Text>
                <View style={styles.row}>
                    <TextInput
                    editable
                    multiline
                    style={styles.input}
                    value={errorText4}
                    onChangeText={(text) => {setErrorText4(text); saveComment("OTHER_ERROR_TEXT_4", text);}}
                    />
                    <Counter storageKey="OTHER_COUNTER_4" maxValue={4}/>
                </View>
                <View style={styles.divider}></View>

                </List.Section>
            </ScrollView>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    
    left: {
        flexDirection: "row",
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        alignItems: 'center', //Centered vertically
      },

      row: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 10
      },

    title: {
        marginHorizontal: 8,
        alignItems: 'center',
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        marginTop: 10
    },

    divider: {
        borderBottomColor: "#d9d9d9",
        borderBottomWidth: 1,
    },
    input: {
        borderRadius: 10,
        backgroundColor: 'white',
        minHeight: 50,
        minWidth: 200,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.05,
        shadowRadius: 25,           
        margin: 10,
        maxWidth: 200
    }
});
