interface ChartistGraphProps {
    data: any,
    options?: any,
    type: string
}

declare class ChartistGraph extends React.Component<ChartistGraphProps, any>{
}

declare namespace ChartistGraph {
}

declare module "react-chartist" {
    export = ChartistGraph;
}