import dynamic from 'next/dynamic';

import { PickRequired } from '@~types/pickRequired';

import type { Props as ReactApexchartsProps } from 'react-apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

import type {
   BoxProps,
   TextProps, //
} from '@chakra-ui/react';
import {
   Box,
   Text, //
} from '@chakra-ui/react';

export default Graphic;
export type {
   Props as GraphicProps,
   StyleProps as GraphicStyleProps, //
};

type StyleProps = {
   caption?: string;
   chartWidth?: ReactApexchartsProps['width'];
   chartHeight?: ReactApexchartsProps['height'];
} & Partial<Pick<ReactApexchartsProps, 'type' | 'series' | 'options'>> &
   BoxProps;
type Props = PickRequired<
   Omit<StyleProps, 'as' | 'children'>,
   'caption' | 'series' | 'options'
>;

function Graphic({
   caption,
   type = 'area',
   chartWidth,
   chartHeight,
   series,
   options,
   ...restProps
}: Props) {
   return (
      <Box {...graphicStyles} {...restProps}>
         <Text {...graphicCaptionStyles}>{caption}</Text>
         <Chart
            type={type}
            width={chartWidth}
            height={chartHeight}
            series={series}
            options={options}
         />
      </Box>
   );
}

const graphicStyles: StyleProps = {
   p: '8',
   borderRadius: 8,
   bg: 'gray.800',
};

const graphicCaptionStyles: TextProps = {
   mb: '4',
   fontSize: 'large',
};
