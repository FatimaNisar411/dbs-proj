import {FlatList, StyleSheet,Pressable} from "react-native";
import CATEGORIES from "../data/data";
import Categorygrid from "../components/categorygrid";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
function CategoryScreen({navigation}) {
   console.log(CATEGORIES);
    const renderitem = ({item}) => {
       
        function pressHandler()
        {
    navigation.navigate("manageExpense",{title:item.title});
        }
        return <Categorygrid onPress={pressHandler}
            title={
                item.title
            }
            color={
                item.color
            }/>
    }
    return <FlatList data={CATEGORIES}
        key={
            (item) => item.item.id
        }
        renderItem={renderitem}
        numColumns={2}/>
}
export default CategoryScreen;
const style = StyleSheet.create({

    container: {
        flex: 1
    }
})
