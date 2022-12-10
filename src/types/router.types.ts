import type { VueElement } from 'vue';
import type { AppLayoutsEnum } from '@/types/layouts.types';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum;
    layoutComponent?: VueElement;
  }
}

export enum RouteNamesEnum {
  index = 'index',
  constructor = 'constructor',
  chat = 'chat',
  settings = 'settings',
}
