import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import SemiModal from './SemiModal';
import { observer } from 'mobx-react'
import ModalStore from '../stores/ModalStore';
export interface SemiModalContainerProps {
}
@observer
export default class SemiModalContainer extends React.PureComponent<SemiModalContainerProps, any> {
  scroll: any;
  goToTop = () => {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  }
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
          <View style={{ flex: 0.2, flexDirection: "row" }}>
            <View style={{ flex: 0.25, height: 70, justifyContent: "center", alignItems: "center", borderRadius: 20, }}>
              <Image
                source={{ uri: ModalStore.selectedCardDetails && ModalStore.selectedCardDetails.img }} style={{ width: 70, height: 70, marginHorizontal: 20, borderRadius: 20, resizeMode: "cover", }} />
            </View>
            <View style={{ flex: 0.75, height: 80, flexDirection: "column" }}>
              <View style={{ flexDirection: "column", flex: 0.3, }}>
                <Text style={{
                  color: "#333333", fontSize: 24, fontFamily: "Exo-Bold"
                }}>{ModalStore.selectedCardDetails && ModalStore.selectedCardDetails.categoryName.charAt(0).toUpperCase() + ModalStore.selectedCardDetails.categoryName.slice(1)}</Text>
                <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                  <Text style={{
                    color: "#DBDBDB", fontSize: 24, fontFamily: "Exo-Medium",
                  }}>12</Text>
                  <Image
                    source={require("../../assets/images/learn/flame.png")} style={{ width: 16, height: 22, marginLeft: 4, marginTop: 6, resizeMode: "cover", }} />
                </View>
              </View>
              <View style={{ alignSelf: "flex-end", marginHorizontal: 20, marginVertical: 10 }}>
                <TouchableOpacity style={{ flexDirection: "column", alignItems: "center", }}>
                  <Image style={{ width: 60, height: 60, borderRadius: 100 }}
                    source={require('../../assets/images/learn/speak.png')} />
                </TouchableOpacity>
              </View>

            </View>
          </View>
          <View style={{ marginBottom: 4, maxHeight: 250, marginTop: 80, paddingBottom: 6 }}>
            <Text style={{
              color: "#DBDBDB", fontSize: 22, fontFamily: "Exo-Bold", marginBottom: 6
            }}>Phrase List</Text>
            <View style={{ width: '100%', flexDirection: "row", paddingBottom: 6 }}>
              <ScrollView style={{ flex: 1, paddingBottom: 6 }} ref={(c) => { this.scroll = c }}
                onContentSizeChange={() => { this.goToTop() }}>
                {
                  ModalStore.selectedCardDetails && ModalStore.selectedCardDetails.wordList.map((word, index) => {
                    return (
                      <View key={index} style={{ flexDirection: "row", margin: 6, }}>

                        <Text style={{ color: "#3C3F43", fontSize: 20, fontFamily: "Exo-Medium" }}>{
                          word
                        }</Text>
                        <View style={{ flexDirection: "row", position: "absolute", right: 0 }}>
                          <Text style={{
                            color: "#DBDBDB", fontSize: 20, fontFamily: "Exo-Medium", marginRight: 6, lineHeight: 25
                          }}>23</Text>
                          <Image
                            source={require("../../assets/images/learn/flame.png")} style={{ width: 14, height: 22, resizeMode: "contain", }} />
                        </View>
                      </View>
                    )
                  })
                }
              </ScrollView>

            </View>

          </View>

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
    backgroundColor: '#A560EB',
  },
  modalInner: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'center'
  }
});