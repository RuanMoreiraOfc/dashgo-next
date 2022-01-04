import { Fragment } from 'react';
import Head from 'next/head';

import { theme } from '@chakra-ui/react';
import type { SimpleGridProps } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

import type { GraphicProps, GraphicStyleProps } from '@c-molecules/Graphic';
import Graphic from '@c-molecules/Graphic';

export default Dashboard;

function Dashboard() {
   return (
      <Fragment>
         <Head>
            <title>Dashboard | dashgo</title>
         </Head>

         <SimpleGrid {...gridStyles}>
            <Graphic
               {...graphicStyles}
               caption='Inscritos da semana'
               chartHeight={160}
               series={series}
               options={options}
            />
            <Graphic
               {...graphicStyles}
               caption='Taxa de abertura'
               chartHeight={160}
               series={series}
               options={options}
            />
         </SimpleGrid>
      </Fragment>
   );
}

const series: GraphicProps['series'] = [
   {
      name: 'series1',
      data: [31, 120, 10, 28, 61, 18, 109],
   },
];

const options: GraphicProps['options'] = {
   chart: {
      toolbar: {
         show: false,
      },
      zoom: {
         enabled: false,
      },
      foreColor: theme.colors.gray[500],
   },
   grid: {
      show: false,
   },
   dataLabels: {
      enabled: false,
   },
   tooltip: {
      enabled: false,
   },
   xaxis: {
      type: 'datetime',
      axisBorder: {
         color: theme.colors.gray[600],
      },
      axisTicks: {
         color: theme.colors.gray[600],
      },
      categories: [
         '2021-03-18T00:00:00.000Z',
         '2021-03-19T00:00:00.000Z',
         '2021-03-20T00:00:00.000Z',
         '2021-03-21T00:00:00.000Z',
         '2021-03-22T00:00:00.000Z',
         '2021-03-23T00:00:00.000Z',
         '2021-03-24T00:00:00.000Z',
      ],
   },
   fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
         shade: 'dark',
         opacityFrom: 0.7,
         opacityTo: 0.3,
      },
   },
};

const gridStyles: SimpleGridProps = {
   flex: '1',
   gap: '4',
   minChildWidth: '320px',
};

const graphicStyles: GraphicStyleProps = {};
