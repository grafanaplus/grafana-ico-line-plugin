import { d3SSelection } from './types';
import { RenderConfig } from 'render-config';

import * as d3 from 'd3';

export class Grid {
  private _renderConfig: RenderConfig;
  private _gX: d3SSelection;
  private _gY: d3SSelection;

  constructor(canvas: d3SSelection, renderConfig: RenderConfig) {
    this._renderConfig = renderConfig;

    this._gX = canvas.append("g");
    this._gX.classed('axis x', true);
    this._gY = canvas.append("g");
    this._gY.classed('axis y', true);

  }

  public render() {
    if(this._gX === undefined) {
      throw new Error('Group for X axis is undefined');
    }
    if(this._gY === undefined) {
      throw new Error('Group for Y axis is undefined');
    }

    this._gX.selectAll().remove();
    this._gY.selectAll().remove();

    this._gX
      .attr("transform", `translate(0,${this._renderConfig.height})`)
      .call(d3.axisBottom(this._renderConfig.x));
    
    this._gY
      .attr("transform", `translate(0,0)`)
      .call(d3.axisLeft(this._renderConfig.y));
  }

}