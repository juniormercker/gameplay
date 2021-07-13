import React from 'react'
import {
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native'
import IllustrationImg from '../../assets/illustration.png'
import { style } from './style'
import { ButtonIcon } from '../../components/button-icon'

export function SignIn(){
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={IllustrationImg}
        style={style.image}
        resizeMode="stretch"
      />

      <View style={style.content}>
        <Text style={style.title}>
          Conecte-se e organize suas jogatinas
        </Text>

        <Text style={style.subtitle}>
          Crie grupos para jogar seus games favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={.5}
        />
      </View>
    </View>
  );
}