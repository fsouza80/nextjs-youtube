import { Box, Grid } from '@material-ui/core';
import Layout from 'src/components/Layout';
import VideoCard from 'src/components/Layout/VideoCard';

function Home({ data }) {
  return (
    <Layout title="Youtube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item x1={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item = {item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'fefefe',
      authorId: 1,
      authorName: 'fefe',
      authorAvatar: 'fefe',
      views: 22,
      thumb: '/thumbs/download1.jpeg',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 2,
      title: 'Titulo',
      authorId: 1,
      authorName: 'Nome Autor',
      authorAvatar: 'Avatar Autor',
      views: 2,
      thumb: '/thumbs/download2.jpeg',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 3,
      title: 'tbbt',
      authorId: 4,
      authorName: 'grgrgr',
      authorAvatar: 'grgrgr',
      views: 44,
      thumb: '/thumbs/download3.jpeg',
      videoUrl: 'url',
      updateAt: new Date(),
    },
    {
      id: 4,
      title: 'grgrgr',
      authorId: 2,
      authorName: 'grgrgr',
      authorAvatar: 'grgrgr',
      views: 333,
      thumb: '/thumbs/download4.jpeg',
      videoUrl: 'url',
      updateAt: new Date(),
    },

  ];

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }
  };
}

export default Home;
