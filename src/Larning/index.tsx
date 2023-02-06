import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, Pressable } from 'react-native';
import { Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import { theme } from '../Themes';
import { styles } from './styles';

const imagens = {
    avatar: require("../assets/image-avatar.png"),
    dataImg: [
        require("../assets/image-product-1.jpg"),
        require("../assets/image-product-2.jpg"),
        require("../assets/image-product-3.jpg"),
        require("../assets/image-product-4.jpg"),
    ]
}

type PropsCart = [
    {
        id: number,
        nome: string,
        valor: string,
        image: any,
        cont: number
    }
]
type PropsProduto = {
        id: number,
        nome: string,
        valor: string,
        image: any,
}

const { width, height } = Dimensions.get('window')

export function Larning() {

    const [cartModal, setCartModal] = useState(false);

    const produto = {
        id: 0,
        nome: "Fall Limited Edition Sneakers",
        image: require("../assets/image-product-1.jpg"),
        valor: "125.00",
    }

    const [cart, setCart] = useState<PropsCart>();
    const [cont, setCont] = useState(0);
    const [prodsNum, setProdsNum] = useState(0);

    function SetProduto(produto: PropsProduto, cont: number) {
        setCart([{
            id: 1,
            nome: produto.nome,
            image: produto.image,
            valor: produto.valor,
            cont: cont
        }])
        setProdsNum(prodsNum + cont)
    }

    return(
        <View style={{ backgroundColor: theme.neutras.white, paddingTop: 20 }}>
            {cartModal ? 
                <View style={{ position: 'absolute', top: 120, left: 8, zIndex: 999, backgroundColor: theme.neutras.white, width: width-16, borderRadius: 8 }}>
                    <View style={{ borderBottomWidth: .5, paddingLeft: 24, paddingVertical: 24 }}>
                        <Text style={[styles.title, { fontSize: 16 }]}>Cart</Text>
                    </View>
                    <View>
                        {cart?.length === 1 ? 
                            <View style={{ padding: 24 }}>
                                <FlatList 
                                    data={cart}
                                    keyExtractor={(_, i) => i.toString()}
                                    renderItem={({ item }) => (
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                                            <Image 
                                            source={item.image} 
                                            style={{ width: 50, height: 50 }} 
                                            borderRadius={4}
                                            />
                                            <View style={{ marginLeft: -32 }}>
                                                <Text style={[styles.text]} numberOfLines={1} >{item.nome}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={styles.text}>${item.valor}</Text>
                                                    <Text style={styles.text}> x{item.cont} </Text>
                                                    <Text style={[styles.title, { fontSize: 16 }]}>${ parseFloat(item.valor)*item.cont}</Text>
                                                </View>
                                            </View>
                                            <FontAwesome name='trash' size={24} color={theme.neutras.grayishBlue} />
                                        </View>
                                    )}
                                />
                                <Pressable style={{ backgroundColor: theme.primarias.orange, alignItems: 'center', paddingVertical: 16, borderRadius: 8 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Feather name='shopping-cart' size={22} color={theme.neutras.white} />
                                        <Text style={{ color: theme.neutras.white, fontSize: 16, marginLeft: 16, fontFamily: theme.fontes.text700 }}>
                                            Checkout
                                        </Text>
                                    </View>
                                </Pressable>
                            </View>
                        : 
                            <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={[styles.title, { fontSize: 16, color: theme.neutras.darkGrayishBlue }]}>
                                    Your cart is empty.
                                </Text>
                            </View>
                        }
                    </View>
                </View>
            :null}
            <View style={styles.viewHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Ionicons name='menu' size={32} color={theme.neutras.darkGrayishBlue} />
                    <Text style={[styles.title, { fontSize: 32, marginLeft: 16 }]}>sneakers</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable onPress={() => setCartModal(!cartModal)} style={{ }}> 
                        <Feather name='shopping-cart' size={24} color={theme.neutras.darkGrayishBlue} />
                        {prodsNum === 0 ? null:
                            <View style={{ position: 'absolute', backgroundColor: theme.primarias.orange, paddingHorizontal: 6, borderRadius: 4, left: 10, top: -5 }}>
                                <Text style={{ fontSize: 10, color: "#f2f2f2" }}>{prodsNum}</Text>
                            </View>
                        }
                    </Pressable>
                    <Image 
                        source={imagens.avatar} 
                        style={{ width: 24, height: 24, marginLeft: 24 }} 
                        borderRadius={20}
                    />
                </View>
            </View>
            <FlatList 
                data={imagens.dataImg}
                keyExtractor={(_,index) => index.toString()}
                pagingEnabled={true}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image 
                        source={item} 
                        style={{ width: width, height: 330 }} 
                        // resizeMode='cover'
                        // resizeMethod='scale'
                    />
                )}
            />
            <View style={styles.viewDesc}>
                <Text style={styles.titleOrange}>SNEAKER COMPANY</Text>
                <Text style={[styles.title,{ marginVertical: 16 }]}>Fall Limited Edition Sneakers</Text>
                <Text style={styles.text}>
                    These low-profile sneakers are you perfect casual wear companion. Featuring a durable
                    rubber outer sole,they'LL withstand everything the weather can offer.
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.title}>$125.00</Text>
                        <Text style={styles.desconto}>50%</Text>
                    </View>
                    <Text style={styles.valorAntigo}>$250.00</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderRadius: 8, marginBottom: 12, backgroundColor: theme.neutras.lightGrayishBlue, padding: 12, alignItems: 'center' }}>
                    <Pressable onPress={() => setCont(cont-1)}>
                        <Text style={[styles.title, { color: theme.primarias.orange }]}>-</Text>
                    </Pressable>
                    <Text style={styles.title}>{cont}</Text>
                    <Pressable onPress={() => setCont(cont+1)}>
                        <Text style={[styles.title, { color: theme.primarias.orange }]}>+</Text>
                    </Pressable>
                </View>

                <Pressable onPress={() => SetProduto(produto,cont)} style={{ backgroundColor: theme.primarias.orange, alignItems: 'center', paddingVertical: 16, borderRadius: 8 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Feather name='shopping-cart' size={22} color={theme.neutras.white} />
                        <Text style={{ color: theme.neutras.white, fontSize: 16, marginLeft: 16, fontFamily: theme.fontes.text700 }}>Add to cart</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}