import { Image, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { styles } from "./styles";

export function Home(){
  return(
    <>
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={require('../../images/logo.png')}
          style={styles.logo}
        />

        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#F2F2F2'
            keyboardType='default'
            />
          <TouchableOpacity
            style={styles.button}
          >
          <Text style={styles.buttonText}>
            +
          </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tasks}>
        <View style={styles.info}>
          <View style={styles.containerInfo}>
           <Text style={styles.create}>Criadas</Text>
            <View style={styles.back}>
              <Text style={styles.counter}>
                0
              </Text>
            </View>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.done}> Concluídas</Text>
            <View style={styles.back}>
              <Text style={styles.counter}>
                0
              </Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.containerEmpty}>
          <Image 
            source={require('../../images/Clipboard.png')}
            style={styles.logoEmpty}
          />
          <View >
            <Text style={styles.emptyTextTasks1}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyTextTasks}>Crie tarefas e organize seus itens a fazer.</Text>
          </View>
        </View> */}

        <View style={styles.task}>
          <Image
            source={require('../../images/circle.png')}
          />
          <Text style={styles.taskText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          </Text>
          <Image
            source={require('../../images/trash.png')}
          />
        </View>
        </View>
        

      </View>
    </View>
    </>
  )
}