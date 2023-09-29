import { FlatList, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CarTypes from '../components/CarTypes';
import RecentLaunch from '../components/RecentLaunch';
import CarDetail from '../components/CarDetail';



const HomeScreen = () => {
  const data = [
    { key: 'carTypes', component: <CarTypes /> },
    { key: 'recentLaunch', component: <RecentLaunch /> },
    { key: 'carDetail', component: <CarDetail/> },


  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => item.component}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header />}
      stickyHeaderIndices={[0]} 
    />
  );
};

export default HomeScreen;
