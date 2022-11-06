import { Text, VStack, Icon } from "native-base";
import { Button } from "../components/Button";
import Logo from '../assets/logo.svg';
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Octicons } from '@expo/vector-icons';

export function Pools() {
    return (
        <VStack flex={1} bgColor='gray.900'>
            <Header 
                title="Meus bolões"
            />

            <VStack mt={6} mx={5} alignItems="center" borderBottomWidth={1} borderBottomColor='gray.600' pb={4} mb={4}>
                <Button 
                    title="BUSCAR BOLÃO POR CÓDIGO"
                    leftIcon={<Icon as={Octicons} name='search' color='black' size='md' />}
                    onPress={() => {}}
                />
            </VStack>
                <Text color='gray.200' fontSize="sm" textAlign="center" px={10} mt={4}>
                    Você ainda não está participando de nenhum bolão, que tal buscar um por código ou criar um novo?
                </Text>
        </VStack>
    );
}