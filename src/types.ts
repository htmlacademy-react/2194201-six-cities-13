export type Card = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};
