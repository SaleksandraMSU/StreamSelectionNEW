import type Map from "ol/Map";

export enum ELayerType {
    Basemap = "Basemap",
    Vector = "Vector",
}

export interface ILayerConfig {
    id: number;
    name: string;
    type: ELayerType;
}

export type TLayerComponentProps<T extends ILayerConfig> = T & {
    map: Map;
    streamorder: string;
};

export type TControlsProps = {
    map: Map;
}

export interface IVectorLayerConfig extends ILayerConfig {
    type: ELayerType.Vector;
  }

