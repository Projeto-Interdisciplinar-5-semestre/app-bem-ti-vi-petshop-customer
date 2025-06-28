import React, { useEffect, useRef, useState } from 'react';
import { Button, TextInput, View, Text, FlatList, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { ChatMessage } from '../../utils/Types';
import { loadHistoryChat } from '../../api/chat/loadHistoryChat';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps } from '../../routes/AppRoute';
import { GLOBAL_VAR } from '../../api/config/globalVar';
import { styles } from './style';
import hardwareBackPress from '../../utils/hardwareBackPress/hardwareBackPress';

export default function ChatCustomer() {
    const { navigate } = useNavigation<NavigationProps>();
    const route = useRoute();
    const { id: customerId, name: customerName } = route.params as { id: string, name: string };

    const [userId] = useState(customerId); 
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const clientRef = useRef<Client | null>(null);
    const subscribedRef = useRef(false); 

    hardwareBackPress(navigate, 'ShowProfile');

    useEffect(() => {
        if (userId) {
            (async () => {
                try {
                    console.log(`📥 Buscando histórico para: ${userId}`);
                    const data = await loadHistoryChat(userId);

                    if ('code' in data) {
                        console.error('Erro ao carregar histórico:', data);
                        Alert.alert('Erro', 'Não foi possível carregar o histórico do chat.');
                        return;
                    }

                    setChatMessages(data);
                } catch (error) {
                    console.error('Erro fetch histórico:', error);
                    Alert.alert('Erro', 'Não foi possível carregar o histórico do chat.');
                }
            })();
        }
    }, [userId]);

    useEffect(() => {
        if (!userId) return;

        const client = new Client({
            webSocketFactory: () => new SockJS(`${GLOBAL_VAR.BASE_URL}/bemtivi-app-websocket`),
            reconnectDelay: 5000,
            debug: (str) => console.log('[STOMP]', str),
            onConnect: () => {
                console.log('✅ Conectado ao STOMP como cliente:', userId);

                if (!subscribedRef.current) {
                    client.subscribe(`/topic/client.${userId}`, (message: IMessage) => {
                        try {
                            const body: ChatMessage = JSON.parse(message.body);
                            setChatMessages((prev) => [...prev, body]);
                        } catch (err) {
                            console.error('Erro ao processar mensagem:', err);
                        }
                    });
                    subscribedRef.current = true;
                }
            },
            onStompError: (frame) => {
                console.error('🚨 Erro STOMP:', frame.headers['message']);
                Alert.alert('Erro STOMP', frame.headers['message'] || 'Erro desconhecido');
            },
            onWebSocketError: (event) => {
                console.error('❌ WebSocket error:', event);
                Alert.alert('Erro de WebSocket', 'Não foi possível conectar ao servidor.');
            },
            onWebSocketClose: (event) => {
                console.log('🔌 WebSocket fechado:', event.reason);
                subscribedRef.current = false;
            },
        });

        clientRef.current = client;
        client.activate();

        return () => {
            client.deactivate();
            subscribedRef.current = false;
            console.log('🔌 Cliente WebSocket desativado');
        };
    }, [userId]);

    const sendMessage = () => {
        if (clientRef.current && userId && message.trim()) {
            const chatMessage = {
                userId,
                userName: customerName,
                sender: 'CUSTOMER',
                content: message.trim(),
            } as ChatMessage;
            clientRef.current.publish({
                destination: '/app/client-message',
                body: JSON.stringify(chatMessage),
            });
            setChatMessages((prev) => [...prev, chatMessage]);
            setMessage('');
        } else {
            Alert.alert('Preencha seu ID e a mensagem.');
        }
    };

    const renderMessage = ({ item }: { item: ChatMessage }) => {
        const isClient = item.sender === 'CUSTOMER';
        return (
            <View
                style={[
                    styles.message,
                    {
                        backgroundColor: isClient ? '#DCF8C6' : '#ECECEC',
                        alignSelf: isClient ? 'flex-end' : 'flex-start',
                    },
                ]}
            >
                <Text style={styles.name}>{item.userName}</Text>
                <Text style={styles.content}>{item.content}</Text>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        >

            <FlatList
                data={[...chatMessages]} 
                keyExtractor={(_, index) => index.toString()} 
                renderItem={renderMessage}
                contentContainerStyle={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.messageInputContainer}>
                <TextInput
                    placeholder="Digite sua mensagem"
                    value={message}
                    onChangeText={setMessage}
                    style={styles.messageInput}
                    multiline
                />
                <Button title="Enviar" onPress={sendMessage} disabled={!message.trim()} />
            </View>
        </KeyboardAvoidingView>
    );
}
