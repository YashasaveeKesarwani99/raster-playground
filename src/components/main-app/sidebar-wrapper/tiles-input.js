import React from 'react';
import { URL_TILES, URL_UPDATE_PUSH } from 'config';
import { StringParam, useQueryParam } from 'use-query-params';

export default function TilesInput() {
  const [tiles, onChangeTiles] = useQueryParam(URL_TILES, StringParam);

  return (
    <div className="input-group">
      <div className="logo-background">
        <img
          className=""
          src={`${window.location.origin}/assets/svg/layer.svg`}
          alt="globe-asia"
        />
      </div>
      <div className="sub-input-group">
        <p className="label">Tiles Url - XYZ</p>
        <input
          type="text"
          value={tiles}
          className="input-text"
          placeholder="Tiles URL"
          onChange={e => onChangeTiles(e.target.value, URL_UPDATE_PUSH)}
        />
      </div>
    </div>
  );
}
