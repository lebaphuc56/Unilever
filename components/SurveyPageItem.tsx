import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Fonts from '../constants/Fonts'
import { RadioButton } from 'react-native-paper';
import Colors from '../constants/Colors';
const SurveyPageItem = (props: any) => {
    const [checked, setChecked] = React.useState(null);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{props.question}</Text>
            </View>
            <View style={styles.viewRadioBtn}>
                <View style={styles.viewRadio}>
                    <RadioButton
                        value="1"
                        status={checked === '1' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('1')}
                        color={Colors.blue}
                    />
                    <Text style={styles.title}>{props.textA}</Text>
                </View>
                <View style={styles.viewRadio}>
                    <RadioButton
                        value="2"
                        status={checked === '2' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('2')}
                        color={Colors.blue}
                    />
                    <Text style={styles.title}>{props.textB}</Text>
                </View>
                <View style={styles.viewRadio}>
                    <RadioButton
                        value="3"
                        status={checked === '3' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('3')}
                        color={Colors.blue}
                    />
                    <Text style={styles.title}>{props.textC}</Text>
                </View>
                <View style={styles.viewRadio}>
                    <RadioButton
                        value="4"
                        status={checked === '4' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('4')}
                        color={Colors.blue}
                    />
                    <Text style={styles.title}>{props.textD}</Text>
                </View>
            </View>

        </View>
    )
}

export default SurveyPageItem

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        ...Fonts.h10
    },
    viewRadio: {
        flexDirection: "row",
        alignItems: "center"
    },
    viewRadioBtn: {
        flex: 1
    }
})
