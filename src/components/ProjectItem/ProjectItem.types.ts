export interface IProjectItem {
  item: IItem;
}

export interface IItem {
  link: string;
  image: string;
  resource: string;
  title: string;
  description: string;
  favorite: boolean;
}
