import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },

  topTextContainer: {
    gap: 5,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  textSmall: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },

  productsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginVertical: 50,
  },

  productContainer: {
    width: '46%',
    height: 350,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 1,
    position: 'relative',
    marginBottom: 20,
  },

  productMatchContainer: {
    position: 'absolute',
    top: -15,
    alignSelf: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 2,
    borderRadius: 20,
    flexDirection: 'row',
  },

  productMatchText: {
    color: '#fff',
    fontSize: 12,
  },

  matchIcon: {
    width: 15,
    height: 15,
    marginRight: 2,
  },

  productTopContainer: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  productImage: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },

  productBottomContainer: {
    flex: 1,
    padding: 10,
    boxSizing: 'border-box',
  },

  productBottomTextContainer: {
    gap: 5,
    width: '90%',
  },

  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },

  description: {
    fontSize: 12,
    color: '#000',
  },

  productBottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: '100%',
  },

  productBottomButton: {
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  productBottomOptionsButton: {
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 50,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  productBottomButtonText: {
    fontSize: 12,
    color: '#000',
  },

  heart: {
    backgroundColor: '#E9E9E9',
  },
})

export default styles