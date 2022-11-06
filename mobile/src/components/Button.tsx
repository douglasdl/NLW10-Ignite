import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

interface Props extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY' | 'CUSTOMIZED';
    bgColor?: string;
    bgHoverColor?: string;
    textColor?: string;
}

export function Button({ title, type='PRIMARY', bgColor, bgHoverColor, textColor, ...rest }: Props) {
    return (
        <ButtonNativeBase 
            w="full"
            h={14}
            rounded="sm"
            bg={type === 'SECONDARY' ? 'red.500' : type === 'PRIMARY' ? 'yellow.500' : bgColor }
            _pressed={{
                bg: type === 'SECONDARY' ? 'red.600' : type === 'PRIMARY' ? 'yellow.600' : bgHoverColor
            }}
            _loading={{
                _spinner: { color: 'black' }
            }}
            { ...rest }
        >
            <Text
                textTransform="uppercase"
                fontSize="sm"
                fontFamily="heading"
                color={type === 'SECONDARY' ? 'white' : type === 'PRIMARY' ? 'black' : textColor}
            >
                { title }
            </Text>
        </ButtonNativeBase>        
    )
}