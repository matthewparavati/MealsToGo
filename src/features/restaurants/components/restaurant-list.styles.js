import { FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import styled from 'styled-components/native';

export const List = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 80%;
  padding: ${(props) => props.theme.space[2]};
  align-self: center;
`;
