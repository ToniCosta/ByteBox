import {StyleSheet, Text} from 'react-native'

export default function TitleSection(props) {
    return (
        <Text style={styles.titleSection}>
            {props.Titulo}
        </Text>
    )
}

const styles = StyleSheet.create({
    titleSection: {
      fontSize: 24,
    }
});