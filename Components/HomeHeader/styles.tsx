import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    gap: 15,
    height: 100,
  },


  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },

  topTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },

  headerTextSmall: {
    fontSize: 14,
    color: '#222',
  },

  headerTextLarge: {
    fontSize: 24,
    color: '#222',
  },

  searchBar: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    boxSizing: 'border-box',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 50,
  },

  filterIcon: {
    backgroundColor: '#eee',
    borderRadius: 50,
    padding: 10,
    boxSizing: 'border-box',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 50,
    width: 50,
  },

  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#222',
  },
})

export default styles