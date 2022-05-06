export const makeImgPath = (img: string, width: string = "w500") => {
  let src = "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
  if (img) {
    const result = `https://image.tmdb.org/t/p/${width}${img}`;
    src = result;
  }
  return src;
};

export const loadMore = (
  hasNextPage: boolean | undefined,
  fetchNextPage: any
) => {
  if (hasNextPage) {
    fetchNextPage();
  }
};
