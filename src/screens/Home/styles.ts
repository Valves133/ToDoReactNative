import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  content: {
    flex: 1,
    maxHeight: '22.5%',
    backgroundColor: '#0D0D0D',
    padding: 24,
  },
  logo: {
    marginTop: 46,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: '#262626',
    padding: 16,
    color: '#F2F2F2',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },
  buttonText: {
    color: '#f2f2f2',
    
  },
  form: {
    width:'100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  tasks: {

  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  create: {
    fontSize: 14,
    color: '#4EA8DE',
    fontWeight: '700',
    marginRight: 8,
  },
  done: {
    fontSize: 14,
    color: '#8284FA',
    fontWeight: '700',
    marginRight: 8,

  },
  containerInfo: {
    flexDirection: 'row'
  },
  counter: {
    color: '#D9D9D9',
    fontWeight: '700',
    textAlign: 'center',
  }, 
  back: {
    backgroundColor: '#333333',
    width: 25,
    height: 19,
    borderRadius: 999 ,
  },
  containerEmpty: {
    width: 327,
    height: 208,
    paddingTop: 20,
    marginTop: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#808080',
  },
    logoEmpty: {
      width: 56,
      height: 56,
      marginBottom: 16,
    },
  emptyTextTasks1: {
    width: '100%',
    color: '#808080',
    lineHeight: 19.6,
    alignSelf: 'stretch',
  },
  emptyTextTasks: {
    width: '100%',
    color: '#808080',
    lineHeight: 19.6,
    alignSelf: 'stretch',
  },
  task: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#262626',
    height: 64,
    borderRadius: 6,
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  taskText: {
    color: '#F2F2F2',
    lineHeight: 14,
    padding: 8,
  }
});