import { View } from "react-native-web"
import StudentDetails from "./components/StudentDetails";

const StudentScreen = () =>{
    return(
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails></StudentDetails>
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize:20,
        marginVertical:20
    }
})

export default StudentsScreen;