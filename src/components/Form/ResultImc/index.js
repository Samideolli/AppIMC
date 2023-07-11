import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: 'Meu IMC hoje é: ' + props.ResultImc,
    });
  };

  return (
    <View>
      <View>
        <TouchableOpacity>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{props.messageResultImc}</Text>
      <Text style={styles.textR}>{props.ResultImc}</Text>
    </View>
  );
}
