import React, {useState} from 'react'
import { View, Text, TextInput,  TouchableOpacity, Vibration } from 'react-native';
import ResultImc from './ResultImc/index'
import styles from './style'

export default function Form() {

  const[height, setHeight]=useState(null)
  const[weight, setWeight]=useState(null)
  const[messageImc, setMessageImc]=useState("Preencha o peso e a altura")
  const[imc, setImc]=useState(null)
  const[textButton, setTextButton]=useState("Calcular")
  const[errorMessage, setErrorMessage]=useState(null)

function imcCalculator(){
  return setImc((weight/(height*height)).toFixed(2))
}

function verificationImc(){
  if(imc==null){
    Vibration.vibrate();
    setErrorMessage("Campo Obrigatório*")
  }
}

function validationImc(){
  if(weight != null && height != null){
    imcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Seu IMC é igual: ")
    setTextButton("Calcular Novamente")
    setErrorMessage(null)
    return
  }
  verificationImc()
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("Preencha o peso e altura")
 
}


  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel} >Altura: </Text>
        <Text style={styles.errormessage} >{errorMessage}</Text>
        <TextInput 
        style={styles.formInput}
        onChangeText={setHeight}
        value={height}
        placeholder="Ex. 1.75" 
        placeholderTextColor="gray"
        keyboardType="numeric"
        //autoFocus
        />

        <Text style={styles.formLabel}>Peso: </Text>
         <Text style={styles.errormessage} >{errorMessage}</Text>
        <TextInput 
         style={styles.formInput}
        onChangeText={setWeight}
        value={weight}
        placeholder="Ex. 75.365" 
        placeholderTextColor="gray"
        keyboardType="numeric"
         //autoFocus
        />

        <TouchableOpacity
         style={styles.formButton}
         onPress={()=> validationImc() }
         ><Text style={styles.formText}>Calcular</Text>
         </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
    </View>
  );
}
