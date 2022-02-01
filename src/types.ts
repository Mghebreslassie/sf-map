export interface IViewport {
  bearing: number;
  isDragging: boolean;
  latitude: number;
  longitude: number;
  pitch?: number;
  startBearing?: number;
  startDragLngLat?: number[];
  startPitch?: number;
  zoom: number;
}
