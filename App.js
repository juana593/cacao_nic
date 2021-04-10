import React from 'react';

import { Button, View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity,ImageBackground, Switch} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import {useState} from 'react';






function Inicio({ navigation }) {


  return (
<ScrollView>
<View >

           <Text style={styles.ccntxt}>Cacao Nica</Text> 
          <View style={styles.view1}>
           <Image
                    source={{
                               uri: 'https://th.bing.com/th/id/OIP.5t0wBSwqGZ4vFdlZT55LGQHaFj?w=234&h=180&c=7&o=5&pid=1.7'
                              }}
                                  style={ styles.imagencacao }  />
                                  </View>
            <Text style={styles.txtlogo}>Bienvenidos a CACAO NIC esta es una aplicacion para le realizacion de compras y ventas de Cacao tanto nivel nacional como internacional.</Text>
            
              <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              </Text>
        <TouchableOpacity 
        style={styles.btnopacidad}
        onPress={()=> navigation.navigate('Servicios', {name:"Servicios"})}
        
        >
        <Text style={styles.ccntxt}>Servicios</Text>
          
        </TouchableOpacity>
        <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              </Text>

        <Button

            title="Compras"

            onPress={() => navigation.navigate('Compras',{name:'Compras'})}
                    
          /> 
           <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              </Text>
             <TouchableOpacity 
        style={styles.btnopacidad}
        onPress={()=> navigation.navigate('Exportaciones', {name:"Exportaciones"})}
        
        >
        <Text style={styles.ccntxt}>Exportaciones</Text>
          
        </TouchableOpacity>

        
</View>
</ScrollView> 

);

}


function Servicios({navigation}) {

  return (

    <View style={styles.view3}>

      <View>
              <Text style={styles.ccntxt}>
                Capasitaciones
              </Text>
              <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              </Text>
              <Text style={styles.ccntxt}>
                Servicios Tecnicos 
              </Text>
            
              <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              </Text>
              
      </View>

         
              <Button
              title="Atras"
              onPress={() => navigation.goBack()}
              /> 
            <Text>{'\n'}</Text>
                <Button

                        title="Compras"

                    onPress={() => navigation.navigate('Compras', {name:"Compras"})}
                   

                    />
          

    </View>
       );
     }
     const imagenPantalla3 ={ uri: 'data:image/jpeg;base64,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'}
     function Compras({navigation}){
       return(
         <ImageBackground source={imagenPantalla3} style={styles.imagenPantalla3}>
         <View style={styles.view3}>
         <Text style={styles.ccntxt3}>
                Cacao seco
              </Text>
              <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              </Text>
              <Text style={styles.ccntxt3}>
               Cacao en baba 
              </Text>
              <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              </Text>
              <Text style={styles.ccntxt3}>
               Cacao  fermentado
              </Text>
              <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              </Text>
              <Text style={styles.ccntxt3}>
               Cacao organico
              </Text>
              <Text>
              {'\n'}
              {'\n'}
              {'\n'}
              </Text>
           
         <Button
            title="Inicio"
            onPress={() => navigation.goBack()}
            
            />
      
         </View>
         </ImageBackground>
       )
     }

     function Exportaciones ({navigation}){
      const [isEnabled, setIsEnabled]=useState(false);
      const toggleSwitch=()=>setIsEnabled(previousStates=>!previousStates);
       return(
         <ScrollView>
         <View>
           <Text style={styles.ccntxt}>Exportaciones</Text>
           <Switch style={{alignContent:'center'}}
           trackColor={{false:'#05056A',true:'#14DAF0'}}
           thumbColor={isEnabled?'#14DAF0':'#05056A'}
           onValueChange={toggleSwitch}
           value={isEnabled}
           
           />
            <Text style={styles.ccntxt3}>
                Honduras
              </Text>
              <View style={styles.view1}>
              <Image
              source={{
                               uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/135px-Flag_of_Honduras.svg.png'
                              }}
                                  style={ styles.bandera }  />
                                  </View>
              <Text style={styles.ccntxt3}>
               Canada
              </Text>
              <View style={styles.view1}>
              <Image
              source={{
                               uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/200px-Flag_of_Canada_%28Pantone%29.svg.png'
                              }}
                                  style={ styles.bandera }  />
                                  </View>
              <Text style={styles.ccntxt3}>
               El Salvador
              </Text>
              <View style={styles.view1}>
              <Image
              source={{
                               uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/150px-Flag_of_El_Salvador.svg.png'
                              }}
                                  style={ styles.bandera }  />
                                  </View>
              <Text style={styles.ccntxt3}>
               Estados Unidos de Norte America
              </Text>
              <View style={styles.view1}>
              <Image
              source={{
                               uri: 'https://www.bing.com/th?id=AMMS_ae5846a10190e76d928e9b9b3dfb9833&w=236&h=183&c=8&rs=1&o=5&pid=3.1&rm=2'
                              }}
                                  style={ styles.bandera }  />
                                  </View>
              <Text style={styles.ccntxt3}>
               Panama
              </Text>
              <View style={styles.view1}>
              <Image
              source={{
                uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAUACAAMAAAABAE0AAAAAAAD/2wBDACodICUgGiolIiUvLSoyP2lEPzo6P4FcYUxpmYagnpaGk5GovfLNqLPltZGT0v/V5fr/////o8v///////L/////2wBDAS0vLz83P3xERHz/rpOu////////////////////////////////////////////////////////////////////wAARCABuAG4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDXooooAKKKKACiiigAooooAKKKKACiiigAooooAKKWigBKKWolnVrl4B95VDf5/T86AJKKWigBkxKwyMvBCkisj7dc/wDPT/x0VrXH/HvL/uH+VYNRI6KMU07os/brn/np/wCOik+3XP8Az0/8dFV6Km7N+SPYsfbrn/np/wCOij7dc/8APT/x0VXoouw5I9iz9uuf+en/AI6KPt1z/wA9P/HRVaii7Dkj2OiooorU4CC6jldMwzGNh+R+tYMc8xud6y4lc43H3ropU8yJk3FdwwSOuKhext2gEPlgKOhHUH1zVJ2E0SQRvGmJJWkY9Sf6VLSKCFAJycdfWlqRkdx/x7y/7h/lWDW9cf8AHvL/ALh/lWDUSOqhswoooqTcKKKKACiiigDd+0wf894/++xR9pg/57x/99iuZoro5TzLnTfaYP8AnvH/AN9ij7TB/wA94/8AvsVzNFHKFzpvtMH/AD3j/wC+xR9pg/57x/8AfYrmaKOULnRzTwtDIqyxsxUgAMCSayfJm/55Sf8AfJqvbf8AH1D/ANdF/nXTVEom1Oq4owfJm/55Sf8AfJo8mb/nlJ/3ya3qKnlNPbvsYPkzf88pP++TR5M3/PKT/vk1vUUcoe3fYwfJm/55Sf8AfJo8mX/nlJ/3ya3qKOUPbvscrRRRXQcgUUUUAFFFFAElt/x9Q/8AXRf5101czbf8fUP/AF0X+ddNWcikFRvNEjbXkVT6E4qSq98qG2YuuSPu+uallRSbsyKC8Rppg7gLn5ST+FW0dZBuRgw9RWQls8ckTTxny2ODz0+tbAAAAAAA7CpVzSoorYWiiiqMjlaK1P7G/wCm/wD45/8AXo/sb/pv/wCOf/XrTmRNmZdFan9jf9PH/jn/ANej+xv+nj/xz/69HMgszLorU/sb/p4/8c/+vR/Y3/Tf/wAc/wDr0cyCzM+2/wCPqH/rov8AOumrMi0ny5Ufz87WDY2dcfjWlUydxoWkIB6jpRRUjAgEYIyKWkooAWikooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z'
                              }}
                                  style={ styles.bandera }  />
                                  </View>
              
          
           <Button
           title='Inicio' 
           onPress={() => navigation.goBack()}
           />

         </View>
         </ScrollView>
       )
     }
 
const Stack = createStackNavigator();

 function cacaoNic() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Servicios" component={Servicios} />
          <Stack.Screen name="Compras" component={Compras}/>
          <Stack.Screen name="Exportaciones" component={Exportaciones}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
 }

 export default cacaoNic; 


 const styles = StyleSheet.create({
   viewimage:{
     alignItems: "center",
     
   },
    
   imagenPantalla3:{
     flex:1,
     justifyContent:'center'
    
   },
   view1:{
    alignItems:'center'
   },
   btnopacidad:{
     backgroundColor:'#F7FE2E',
     padding:10,
   },
   ccntxt:{
    fontSize:20,
    fontWeight:'bold',
     textAlign:'center',
      color:'brown' 
},
imagencacao:{
  width: 200, 
  height: 200,
},
txtlogo:{
  fontSize:18,
      color:'white',
      textAlign:'justify',
      fontWeight:'bold',
      backgroundColor:'#05056A'
},
ccntxt3:{
  fontSize:30,
  fontWeight:'bold',
   textAlign:'center',
    color:'black' 
},
bandera:{
  width:300,
  height:100,
  
}
 });


 const btnalert=()=>{
   alert('Reparación')
 }