export type RootParam = {
  groups: undefined;
  new: undefined;
  players: {
    group: string;
  };
}

export declare global {
  namespace ReactNavigation { 
    interface RootParamList extends RootParam {}
  }
}