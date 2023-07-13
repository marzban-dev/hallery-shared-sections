import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
// @ts-ignore
import Color from "color";

interface IColorsResult {
    primary: string;
    lighter: string;
}

type TUseImageColorsParams = (query: string) => IColorsResult | null;

const useImageColors: TUseImageColorsParams = (query) => {
    const [imageColors, setImageColors] = useState<IColorsResult | null>(null);

    useEffect(() => {
        const fac = new FastAverageColor();
        const imageContainer = document.querySelector(query) as HTMLImageElement;

        fac.getColorAsync(imageContainer, { algorithm: "sqrt" })
            .then((color) => {
                let colorsObject: IColorsResult = {
                    primary: "",
                    lighter: "",
                };

                const colorContrast = Color(color.rgb).contrast(Color("white"));

                // 17.5 => 21
                if (colorContrast > 17.5 && colorContrast < 21) {
                    colorsObject.lighter = Color(color.rgb).lighten(2.1).hex();
                    colorsObject.primary = Color(color.rgb).lighten(1.9).hex();
                }
                // 14 => 17.5
                if (colorContrast > 14 && colorContrast < 17.5) {
                    colorsObject.lighter = Color(color.rgb).lighten(1.9).hex();
                    colorsObject.primary = Color(color.rgb).lighten(1.7).hex();
                }
                // 10.5 => 14
                if (colorContrast > 10.5 && colorContrast < 14) {
                    colorsObject.lighter = Color(color.rgb).lighten(1.7).hex();
                    colorsObject.primary = Color(color.rgb).lighten(1.5).hex();
                }
                // 7 => 10.5
                if (colorContrast < 10.5 && colorContrast > 7) {
                    colorsObject.primary = Color(color.rgb).darken(0).hex();
                    colorsObject.lighter = Color(color.rgb).darken(-0.1).hex();
                }
                // 3.5 => 7
                if (colorContrast < 7 && colorContrast > 3.5) {
                    colorsObject.primary = Color(color.rgb).darken(0.1).hex();
                    colorsObject.lighter = Color(color.rgb).darken(0).hex();
                }
                // 1 => 3.5
                if (colorContrast < 3.5 && colorContrast > 1) {
                    colorsObject.primary = Color(color.rgb).darken(0.2).hex();
                    colorsObject.lighter = Color(color.rgb).darken(0.1).hex();
                }

                setImageColors(colorsObject);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return imageColors;
};

export default useImageColors;
