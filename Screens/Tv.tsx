import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { tvApi } from "../api";
import { ScrollView, RefreshControl } from "react-native";
import Loader from "./Loader";
import HList, { HListSeparator } from "../components/HList";

const Tv = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const {
    isLoading: todayLoading,
    data: todayData,
    isRefetching: todayRefetching,
  } = useQuery(["tv", "today"], tvApi.airingToday);
  const {
    isLoading: topLoading,
    data: topData,
    isRefetching: topRefetching,
  } = useQuery(["tv", "top"], tvApi.topRated);
  const {
    isLoading: trendingLoading,
    data: trendingData,
    isRefetching: trendingRefetching,
  } = useQuery(["tv", "trending"], tvApi.trending);

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["tv"]);
    setRefreshing(false);
  };
  //const refreshing = todayRefetching || topRefetching || trendingRefetching;

  const loading = todayLoading || topLoading || trendingLoading;
  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingVertical: 30 }}
    >
      <HList title="Trending Tv" data={trendingData.results}></HList>
      <HList title="Today Tv" data={todayData.results}></HList>
      <HList title="Top-rated Tv" data={topData.results}></HList>
    </ScrollView>
  );
};
export default Tv;
