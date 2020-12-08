import moment from 'moment';
import React, { FunctionComponent } from 'react';

import { Avatar, Grid, Paper } from '@material-ui/core';

import { IPostArticle } from '../../interfaces';
import { randomLetters } from '../../utils/randomizer';

type Props = {
  post: IPostArticle;
};

const DemotionsCard: FunctionComponent<Props> = ({ post }) => {
  return (
    <Paper className="demotionPaper" variant="outlined">
      <Grid container direction="row" spacing={1}>
        <Grid item>
          <Avatar alt="VimeWorld" src="https://vimeworld.ru/images/fluidicon.png" />
        </Grid>
        <Grid item>
          <h3 style={{ margin: 0 }}>
            <a
              href={`https://vk.com/wall-170072131_${post.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="publicSource"
            >
              VimeWorld Персонал
            </a>
          </h3>
          <p>{moment.unix(post.date).format("DD.MM.YYYY")}</p>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid item>
          {post.text.split("\n").map((line: string) => {
            return (
              <p key={randomLetters(12)}>
                <span className="demotionPostText">{line.replace(/[(\u{2764}|\u{1F49A})]/gu, "")}</span>
              </p>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DemotionsCard;
