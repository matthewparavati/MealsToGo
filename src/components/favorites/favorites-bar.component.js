import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../spacer/spacer.component';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Text } from '../typography/text.component';

const FavoritesWrapper = styled(Card)`
  padding: 10px;
  z-index: 999;
  border-radius: 15px;
`;

const NoFavorites = () => (
  <Spacer>
    <Text variant="caption">Add some of your favorite restaurants!</Text>
  </Spacer>
);

const FavoritesList = ({ favorites, onNavigate }) => {
  return favorites.map((r) => {
    const key = r.name.split(' ').join('');
    return (
      <Spacer position="right" size="medium" key={key}>
        <TouchableOpacity
          onPress={() => onNavigate('RestaurantDetail', { restaurant: r })}
        >
          <CompactRestaurantInfo restaurant={r} />
        </TouchableOpacity>
      </Spacer>
    );
  });
};
export const FavoritesBar = ({ favorites, onNavigate }) => {
  return (
    <FavoritesWrapper elevation={3}>
      <Spacer>
        <Text variant="body">Favorites</Text>
      </Spacer>
      {favorites.length ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FavoritesList favorites={favorites} onNavigate={onNavigate} />
        </ScrollView>
      ) : (
        <NoFavorites />
      )}
    </FavoritesWrapper>
  );
};
