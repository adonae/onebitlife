import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function start() {
    return {
        < View >
        <ScrollView showVerticalScrollIndicator={false}>
            <view>
                <Image source={require("../../assets/icons/logo3.png")} />
                <Text>
                    Vamos transformar sua vida {"\n"} em um jogo, buscando sempre {"\n"}{" "}
                    o melhor nível.</Text>
            </view>
        </ScrollView>
        </View >
    }
}