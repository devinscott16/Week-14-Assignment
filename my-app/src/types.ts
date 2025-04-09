export type MasterType = {
  id: string;
  imageSrc: string;
  altText: string;
  description: string;
};

export type NewFoodItem = Omit<MasterType, "id">;
