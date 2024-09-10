import { ButtonSpinner, Button as GluestackButton, Text } from '@gluestack-ui/themed'
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof GluestackButton> & {
    title: string;
    isLoading?: boolean;
    variant?: 'solid' | 'outline';
}

export function Button({ title, variant = 'solid', isLoading = false, ...rest }: Props) {
    return(
        <GluestackButton 
            w="$full"
            h="$14"
            bg={variant === 'outline' ? 'transparent' : '$green700'}
            borderWidth={variant === 'outline' ? '$1' : '$0'}
            borderColor="$green500"
            rounded="$md"
            $active-bg='%green500'
            disabled={isLoading}
            {...rest}
        >

            {isLoading ? ( 
                <ButtonSpinner color={variant === 'outline' ? '$green500' : '$white' } />
            ) : (
                <Text
                    color='$white'
                    fontFamily='$heading'
                    fontSize="$sm"
                >
                    {title}
                </Text>
            )    
            }
            
        </GluestackButton>
    )
}