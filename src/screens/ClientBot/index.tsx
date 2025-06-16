import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { styles } from './style';

type Message = {
  from: 'bot' | 'user';
  text: string;
};

const ClientBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: 'Olá! 🐶🐱 Bem-vindo(a) ao Bem-ti-vi PetShop! Como posso te ajudar hoje? 😊' },
  ]);

  const [input, setInput] = useState('');

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#34B7F1" />
      </View>
    );
  }

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    botResponse(input);
  };

  const botResponse = (userText: string) => {
    const text = userText.toLowerCase();
    let response = '';

    if (text.includes('serviço') || text.includes('serviços')) {
      response = 'Oferecemos:\n- Banho 🛁\n- Tosa ✂️\n- Consultas veterinárias 🩺\n- Vacinação 💉\nDeseja agendar algum?';
    }
    else if (text.includes('banho')) {
      response = 'Perfeito! 🛁 Informe o nome do seu pet e o melhor dia/horário para agendarmos o banho.';
    }
    else if (text.includes('tosa')) {
      response = 'Ótimo! ✂️ Me envie o nome do seu pet e o dia/horário que você prefere para tosa.';
    }
    else if (text.includes('consulta') || text.includes('veterinário')) {
      response = 'Certo! 🩺 Para consultas veterinárias, envie o nome do pet e o melhor dia/horário.';
    }
    else if (text.includes('vacina') || text.includes('vacinação')) {
      response = 'Perfeito! 💉 Informe o nome do pet e o melhor dia/horário para a vacinação.';
    }
    else if (text.includes('horário') || text.includes('funciona')) {
      response = 'Funcionamos de segunda a sábado, das 8h às 18h. 😊';
    }
    else if (text.includes('produto') || text.includes('tem') || text.includes('vende') || text.includes('ração')) {
      response = 'Temos uma variedade de produtos como:\n- Rações 🐾\n- Brinquedos 🎾\n- Acessórios 🦴\n- Produtos de higiene 🧼\nGostaria de saber mais sobre algum?';
    }
    else if (text.includes('onde fica') || text.includes('localização') || text.includes('endereço')) {
      response = 'Estamos localizados na Rua dos Animais Felizes, nº 123, Centro. 🗺️ Quer que eu envie o link do mapa?';
    }
    else if (text.includes('telefone') || text.includes('contato') || text.includes('whatsapp')) {
      response = 'Você pode falar diretamente com a nossa equipe pelo WhatsApp: (11) 91234-5678 📱';
    }
    else if (text.includes('pagamento') || text.includes('aceita') || text.includes('pagar')) {
      response = 'Aceitamos Pix, dinheiro, cartões de débito e crédito (Visa, Master, Elo e Amex). 💳💰';
    }
    else if (text.includes('obrigado') || text.includes('valeu') || text.includes('agradeço')) {
      response = 'De nada! 😊 Sempre à disposição para ajudar você e seu pet! 🐶🐱';
    }
    else if (text.includes('tchau') || text.includes('até mais') || text.includes('falou')) {
      response = 'Tchauzinho! 👋 Espero te ver em breve no Bem-ti-vi PetShop! 🐾';
    }
    else {
      response = 'Desculpe, não entendi muito bem. 😅 Você pode perguntar sobre:\n- Serviços 🛠️\n- Produtos 🛍️\n- Horários ⏰\n- Localização 🗺️\n- Agendamento de banho/tosa/consulta 💼';
    }

    const botMessage: Message = { from: 'bot', text: response };
    setMessages(prev => [...prev, botMessage]);
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View style={[styles.messageContainer, item.from === 'user' ? styles.user : styles.bot]}>
      <Text style={styles.messageAuthor}>
        {item.from === 'user' ? 'Você' : 'Admin'}
      </Text>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.messagesList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClientBot;
