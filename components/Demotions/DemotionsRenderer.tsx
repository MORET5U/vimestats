import { useRouter } from 'next/router';
import { createRef, Fragment, FunctionComponent } from 'react';

import { Box, Grid, Typography } from '@material-ui/core';

import { IPostArticle } from '../../interfaces';
import { MySweetAlert } from '../MySweetAlert';
import SearchField from '../SearchField';
import DemotionsCard from './DemotionsCard';

type Props = {
  data: IPostArticle[];
};

const DemotionsRenderer: FunctionComponent<Props> = ({ data }) => {
  const router = useRouter();
  const fieldRef = createRef<HTMLInputElement>();

  const searchWithQuery = (query: string) => {
    router.push("/demotions?search=" + encodeURIComponent(query.toString()));
  };

  const resetData = () => {
    router.push("/demotions");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let input = fieldRef.current?.value.toString();

    if (input!.length < 1) {
      MySweetAlert.fire({
        title: "Ошибка",
        text: "Запрос слишком короткий!",
        icon: "error",
        confirmButtonText: "Попробовать снова",
      });
    } else {
      searchWithQuery(input!);
    }
  };

  return (
    <Fragment>
      <SearchField
        placeholder="Введите запрос"
        submitAction={handleSubmit}
        clickAction={() => resetData()}
        searchRef={fieldRef}
      />

      <Box my={3}>
        {data.length > 0 && (
          <Grid container spacing={3}>
            {data.map((post: IPostArticle) => (
              <Grid item xs={12} md={12} sm={12} key={post.id}>
                <DemotionsCard post={post} />
              </Grid>
            ))}
          </Grid>
        )}

        {data.length <= 0 && (
          <Typography variant="h4">
            <strong>404:</strong> Ничего не найдено
          </Typography>
        )}
      </Box>
    </Fragment>
  );
};

export default DemotionsRenderer;
