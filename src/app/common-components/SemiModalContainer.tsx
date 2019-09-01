import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import SemiModal from './SemiModal';
import { observer } from 'mobx-react'
import ModalStore from '../stores/ModalStore';
export interface SemiModalContainerProps {
}
@observer
export default class SemiModalContainer extends React.PureComponent<SemiModalContainerProps, any> {
  constructor(props: SemiModalContainerProps) {
    super(props);
  }

  public render() {
    return (
      <SemiModal isVisible={ModalStore.isModalActive} onModalClose={() => {
        ModalStore.closeModal()
      }} style={styles.SemiModal}
        disableTopScroll
      >
        <View>
          <View style={styles.modalInner}>
            <View style={[styles.bar, styles.leftBar]} />
            <View style={[styles.bar, styles.rightBar]} />
          </View>
          <ScrollView style={{ marginBottom: 4, maxHeight: 300 }}>
            {
              ModalStore.selectedCardsWordList && ModalStore.selectedCardsWordList.map((word, index) => {
                return (
                  <Text key={index} style={[styles.modalText, { marginBottom: 16 }]}>{
                    word
                  }</Text>
                )
              })
            }
          </ScrollView>
        </View>
      </SemiModal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  open: {
    textAlign: 'center',
    marginTop: 64
  },
  modalText: {
    color: '#FFF'
  },
  modalCancelButton: {
    borderRadius: 32,
    height: 40,
    backgroundColor: '#243347',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bar: {
    width: 16,
    borderBottomWidth: 4,
    borderColor: '#FFFFFF44'
  },
  leftBar: {
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  rightBar: {
    borderRadius: 16,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  SemiModal: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    paddingTop: 8,
    maxHeight: 400,
    backgroundColor: '#151F2B',
  },
  modalInner: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'center'
  }
});