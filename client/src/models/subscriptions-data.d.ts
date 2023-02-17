interface SubsctiptionsPlan {
  title: string;
  type: 'base' | 'premium';
  cost: number;
  benefits: { title: string; included: boolean }[];
}
