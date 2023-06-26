import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginBottom: 100,
  },

  title: {
    fontSize: 24,
    color: '#000',
    width: '80%',
    fontWeight: '600',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomLeftContainer: {
    flex: 1.4,
    gap: 20,
  },

  bottomRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },

  desc: {
    fontSize: 14,
    color: '#000',
  },

  discoverBtn: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },

  discoverBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  discoveryImage: {
    width: 100,
    height: 100,
  },
})

export default styles