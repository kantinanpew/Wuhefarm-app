import React from 'react'

import { KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback, Keyboard} from 'react-native-web'
const KeyBoardAvoidingWrapper = () => {
  return (
    <KeyboardAvoidingView style ={{flex: 1}}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}</TouchableWithoutFeedback>
      </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default KeyBoardAvoidingWrapper;
