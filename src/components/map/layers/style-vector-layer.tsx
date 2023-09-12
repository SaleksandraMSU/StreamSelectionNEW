import memoizeOne from 'memoize-one';
import { Stroke, Style} from 'ol/style.js';
import { Hack, Shreve } from '../streamorder-constants';

export const emptystyle = new Style({});

let styles: Style[] = [];
let stylesCopy: Style[] | undefined = undefined;
let styles_reversed: Style[] | undefined = undefined;

export const update_styles = memoizeOne((N:number, W:number, M:number) => {
    styles = [];
    for (let i = 0; i < N; ++i) {
        styles.push(
            new Style({
                stroke: new Stroke({
                    color: 'blue',
                    width: W + i*((M-W)/(N-1))
                }),
            })
        )
    }
    stylesCopy = Array.from(styles)
    styles_reversed = stylesCopy.reverse();
})

export const getStyle = memoizeOne((order: number, streamOrder: string, N: number) => {
    let styleChoice:number;
    if (streamOrder === Hack) {
      styleChoice = Math.round((Math.log(order + 1) / Math.log(7 + 1)) * N);
      return styles_reversed![styleChoice - 1];
    } else if (streamOrder === Shreve) {
      styleChoice = Math.round((Math.log(order + 1) / Math.log(1673 + 1)) * N);
      return styles[styleChoice - 1];
    } else {
      styleChoice = Math.round((order / 6) * N);
      return styles[styleChoice - 1];
    }
  });
