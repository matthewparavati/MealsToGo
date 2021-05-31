import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import { SafeAreaViewContainer } from '../../../components/utility/safe-area.component';
import { Text } from '../../../components/typography/text.component';
import styled from 'styled-components/native';
import { RestaurantList } from '../../restaurants/components/restaurant-list.component';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';

const NoFavoritesArea = styled(SafeAreaViewContainer)`
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeAreaViewContainer>
      <RestaurantList data={favorites} navigation={navigation} />
    </SafeAreaViewContainer>
  ) : (
    <NoFavoritesArea>
      <Text>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
