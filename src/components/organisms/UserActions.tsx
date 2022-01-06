import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

import {
   FlexProps,
   StackProps,
   IconProps,
   BoxProps,
   TextProps,
   AvatarProps,
} from '@chakra-ui/react';
import {
   Flex,
   HStack,
   Icon,
   Box,
   Text,
   Avatar, //
} from '@chakra-ui/react';

import type { PickRequired } from '@~types/pickRequired';

export default UserActions;
export type {
   Props as UserActionsProps,
   StyleProps as UserActionsStyleProps, //
};

type StyleProps = {
   name?: string;
   email?: string;
   avatarUrl?: string;
} & FlexProps;
type Props = PickRequired<StyleProps, 'name' | 'email' | 'avatarUrl'>;

function UserActions({ name, email, avatarUrl, ...restProps }: Props) {
   return (
      <Flex {...userActionsStyles} {...restProps}>
         <HStack {...userActionsLeftHalfStyles}>
            <Icon
               {...userActionsLeftHalfNotificationIconStyles}
               as={RiNotificationLine}
            />
            <Icon
               {...userActionsLeftHalfAddUserIconStyles}
               as={RiUserAddLine}
            />
         </HStack>

         <Flex {...userActionsRightHalfStyles}>
            <Box {...userActionsRightHalfUserInfoStyles}>
               <Text {...userActionsRightHalfUserInfoNameStyles}>{name}</Text>
               <Text {...userActionsRightHalfUserInfoEmailStyles}>{email}</Text>
            </Box>
            <Avatar {...userActionsRightHalfUserAvatarStyles} src={avatarUrl} />
         </Flex>
      </Flex>
   );
}

const userActionsStyles: StyleProps = {
   gap: '8',
};

const userActionsLeftHalfStyles: StackProps = {
   pr: ['6', '8'],
   py: '1',
   spacing: ['6', '8'],
   borderRightWidth: 1,
   borderColor: 'gray.700',
};

const userActionsLeftHalfNotificationIconStyles: IconProps = {};

const userActionsLeftHalfAddUserIconStyles: IconProps = {};

const userActionsRightHalfStyles: FlexProps = {
   gap: '4',
};

const userActionsRightHalfUserInfoStyles: BoxProps = {
   textAlign: 'right',
};

const userActionsRightHalfUserInfoNameStyles: TextProps = {};

const userActionsRightHalfUserInfoEmailStyles: TextProps = {
   color: 'gray.300',
   fontSize: 'small',
};

const userActionsRightHalfUserAvatarStyles: AvatarProps = {
   size: 'md',
};
