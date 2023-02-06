import { StyleSheet } from "react-native";
import { theme } from "../Themes";



export const styles = StyleSheet.create({
    title: {
        fontSize: 24, 
        fontFamily: theme.fontes.text700, 
        color: theme.neutras.black
    },

    viewDesc: {
        paddingHorizontal: 24,
        paddingTop: 24 
    },

    viewHeader: {
        flexDirection: 'row',
        backgroundColor: theme.neutras.white, 
        paddingHorizontal: 24, 
        paddingVertical: 24, 
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    desconto: {
        paddingVertical: 4, 
        paddingHorizontal: 8, 
        marginLeft: 12, 
        fontSize: 16,
        backgroundColor: theme.primarias.paleorange, 
        color: theme.primarias.orange, 
        fontFamily: theme.fontes.text700, 
        borderRadius: 4 
    },

    valorAntigo: {
        color: theme.neutras.grayishBlue, 
        fontFamily: theme.fontes.text700, 
        textDecorationLine: 'line-through', 
        marginRight: 12, 
        fontSize: 16
    },

    text: {
        fontSize: 16, 
        fontFamily: theme.fontes.text400, 
        color: theme.neutras.darkGrayishBlue
    },

    titleOrange: {
        fontSize: 12, 
        fontFamily: theme.fontes.text700, 
        color: theme.primarias.orange, 
        letterSpacing: 1 
    }
})