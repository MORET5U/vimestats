import React from 'react';

import { Tooltip, Typography } from '@material-ui/core';

/**
 * BUG:
 * https://i.imgur.com/euwR3MJ.png
 *
 * КОСТЫЛЬ:
 * позиция top-start
 **/

interface IKDR {
  kills: number;
  deaths: number;
}

interface IWLR {
  wins: number;
  total: number;
  isTotal?: boolean;
}

export const KDR = ({ kills, deaths }: IKDR) => (
  <div>
    {deaths > 0 && (
      <Tooltip
        placement="top-start"
        arrow
        disableFocusListener
        disableTouchListener
        title={
          <span className="badgeTooltip">Соотношение убийств к смертям</span>
        }
      >
        <Typography>
          <strong>Соотношение У/C:</strong> {(kills / deaths).toFixed(2)}
        </Typography>
      </Tooltip>
    )}
  </div>
);

export const WLR = ({ wins, total, isTotal }: IWLR) => (
  <div>
    {total > 0 && (
      <>
        {isTotal && (
          <Typography>
            <strong>Процент общих побед:</strong>{" "}
            {((wins / total) * 100).toFixed(2)}%
          </Typography>
        )}

        {!isTotal && (
          <Typography>
            <strong>Процент побед:</strong> {((wins / total) * 100).toFixed(2)}%
          </Typography>
        )}
      </>
    )}
  </div>
);
