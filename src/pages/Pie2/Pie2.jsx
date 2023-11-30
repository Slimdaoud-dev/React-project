// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { Box } from '@mui/material';
import { ResponsivePie } from '@nivo/pie'

const data = [
  {
    "id": "sass",
    "label": "sass",
    "value": 277,
    "color": "hsl(128, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 358,
    "color": "hsl(24, 70%, 50%)"
  },
]

const MyResponsivePie2 = () => (
  <Box sx={{height:"42px"}
  }>
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        startAngle={-42}
        sortByValue={true}
        innerRadius={0.75}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderColor={{
            from: 'color',
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabel="id"
        arcLabelsRadiusOffset={0}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        isInteractive={false}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'sass'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            }
        ]}
        legends={[]}
    />
    </Box>
)

export default MyResponsivePie2;
