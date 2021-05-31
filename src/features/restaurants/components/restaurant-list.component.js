import React from 'react';
import { TouchableOpacity } from 'react-native';
import { RestaurantInfoCard } from './restaurant-info-card.component';
import { List } from './restaurant-list.styles';
import { FadeInView } from '../../../components/animations/fade.animation';

export const RestaurantList = ({ data, navigation }) => {
  return (
    <List
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetail', { restaurant: item })
            }
          >
            <FadeInView>
              <RestaurantInfoCard restaurant={item} />
            </FadeInView>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  );
};
