import { Heading, VStack } from "native-base";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Header } from "../components/Header";

export function Find() {
    return (
        <VStack flex={1} bgColor='gray.900'>
            <Header 
                title="Buscar por código"
                showBackButton
            />

            <VStack mx={5} alignItems="center">
                
                <Heading color='white' fontFamily="heading" fontSize="xl" my={8} textAlign="center">
                    Encontre um bolão através de seu código único
                </Heading>
            
                <Input 
                    placeholder="Qual o código do bolão?"
                    mb={2}
                />
            
                <Button 
                    title="BUSCAR BOLÃO"
                    onPress={() => {}}
                />

            </VStack>
        </VStack>
    );
}